"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SpotifyWidget() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch once on mount, then poll every 30 seconds
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify/now-playing");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data?.isPlaying) {
    return (
      <div className="mt-4 flex items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm self-center opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden max-w-[280px]">
        <div className="w-2 h-2 rounded-full bg-zinc-500" />
        <span className="text-xs text-zinc-400 font-medium truncate">Spotify Disconnected</span>
        <svg className="w-4 h-4 text-zinc-600 flex-shrink-0 ml-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.26.36.18.48.659.24 1.08zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.68 18.72 12.96c.361.181.54.84.241 1.08zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.261 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.559.3z" />
        </svg>
      </div>
    );
  }

  return (
    <a 
      href={data.songUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-4 flex items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all backdrop-blur-sm self-center max-w-[90vw] overflow-hidden group shadow-[0_0_15px_rgba(29,185,84,0.05)] hover:shadow-[0_0_20px_rgba(29,185,84,0.15)]"
    >
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 overflow-hidden">
        <span className="text-xs text-zinc-400 font-medium whitespace-nowrap">Currently Listening</span>
        <span className="text-xs text-zinc-200 font-bold truncate max-w-[120px] sm:max-w-xs block sm:inline">{data.title}</span>
        <span className="text-[10px] text-zinc-500 truncate max-w-[100px] sm:max-w-xs block sm:inline">by {data.artist}</span>
      </div>
      <img src={data.albumImageUrl} alt={data.album} className="w-5 h-5 rounded ml-1 sm:ml-2 object-cover" />
      <svg className="w-4 h-4 text-[#1DB954] flex-shrink-0 group-hover:scale-110 transition-transform hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.26.36.18.48.659.24 1.08zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.68 18.72 12.96c.361.181.54.84.241 1.08zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.261 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.559.3z" />
      </svg>
    </a>
  );
}
