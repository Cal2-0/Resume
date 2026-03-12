"use client";

import React, { useEffect, useState } from "react";
import { Terminal as TerminalIcon, Github, GitCommit, Star, RefreshCw } from "lucide-react";

interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

export function GithubTerminal({ username }: { username: string }) {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    async function fetchGithub() {
      try {
        setLoading(true);
        // Using GitHub's public API to fetch user events
        const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEvents(data);
        
        // Setup typed lines
        const newLines = [
          `user@cyber-deck:~$ ssh github.com/${username}`,
          `Authenticating... SUCCESS`,
          `Retrieving latest telemetry data from repository sectors...`,
        ];
        
        setTypedLines([]);
        let delays = 0;
        newLines.forEach((line, i) => {
          delays += 500 + Math.random() * 500;
          setTimeout(() => {
            setTypedLines(prev => [...prev, line]);
            
            if (i === newLines.length - 1) {
                setTimeout(() => setLoading(false), 500);
            }
          }, delays);
        });

      } catch (err) {
        console.error(err);
        setTypedLines([`user@cyber-deck:~$ connect github.com`, `Connection failed. Retrying...`]);
        setLoading(false);
      }
    }
    fetchGithub();
  }, [username]);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-zinc-800 bg-[#0c0c0c] shadow-2xl font-mono text-sm">
      {/* Terminal Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-zinc-500 text-xs flex items-center gap-2">
          <TerminalIcon size={14} /> terminal — bash
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[300px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#4f46e5 transparent" }}>
        
        {typedLines.map((line, i) => (
          <div key={i} className="mb-2 text-zinc-400">
            {line.startsWith("user@") ? (
              <span><span className="text-green-500">user@cyber-deck</span><span className="text-cyan-500">:~$</span> {line.split(":~$ ")[1]}</span>
            ) : (
              line
            )}
          </div>
        ))}

        {!loading && events.length > 0 && (
          <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {events.map((event, i) => {
              let icon = <Github size={16} className="text-zinc-500" />;
              let action = "performed an action in";
              let detail = "";

              if (event.type === "PushEvent") {
                icon = <GitCommit size={16} className="text-green-500" />;
                action = "pushed commits to";
                detail = `"${event.payload.commits?.[0]?.message || 'Update'}"`;
              } else if (event.type === "WatchEvent") {
                icon = <Star size={16} className="text-yellow-500" />;
                action = "starred";
              } else if (event.type === "CreateEvent") {
                icon = <RefreshCw size={16} className="text-cyan-500" />;
                action = "created repository";
              }

              return (
                <div key={event.id} className="flex flex-col border-l-2 border-zinc-800 pl-3 py-1 ml-1 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 text-zinc-300">
                    {icon}
                    <span className="text-orange-400">{action}</span>
                    <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                      {event.repo.name.replace(`${username}/`, '')}
                    </a>
                  </div>
                  {detail && (
                    <div className="text-zinc-500 text-xs mt-1 ml-6 max-w-[90%] truncate">
                      {detail}
                    </div>
                  )}
                  <div className="text-zinc-600 text-[10px] mt-1 ml-6">
                    [{formatDate(event.created_at)}]
                  </div>
                </div>
              );
            })}
            
            <div className="mt-4 flex items-center text-zinc-400">
              <span className="text-green-500">user@cyber-deck</span><span className="text-cyan-500">:~$</span> 
              <span className="ml-2 w-2 h-4 bg-orange-500 animate-pulse inline-block"></span>
            </div>
          </div>
        )}

        {!loading && events.length === 0 && (
          <div className="text-red-400 mt-4">
            [ERROR] No recent telemetry detected for target: {username}.
          </div>
        )}
      </div>
    </div>
  );
}
