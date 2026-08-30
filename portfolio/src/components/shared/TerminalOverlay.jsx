import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState(['Bureau Terminal v2.4.1. Type "help" for commands.']);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    const handleCustomOpen = () => setIsOpen(true);
    const handleCustomToggle = () => setIsOpen(prev => !prev);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('openTerminal', handleCustomOpen);
    window.addEventListener('toggleTerminal', handleCustomToggle);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openTerminal', handleCustomOpen);
      window.removeEventListener('toggleTerminal', handleCustomToggle);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd) => {
    const args = cmd.trim().toLowerCase().split(' ');
    let output = '';

    switch(args[0]) {
      case 'help':
        output = `COMMAND MANUAL:
---------------
whoami     - Display operator dossier
skills     - List technical proficiencies
contact    - Establish secure comms link
ls         - List directory contents
cat <file> - Read file contents
clear      - Clear terminal output
nmap       - Network exploration tool
neofetch   - System information
matrix     - Enter the Matrix
exit       - Terminate session
(and a few classified overrides...)`;
        break;
      case 'whoami':
        output = `OPERATOR DOSSIER
----------------
NAME:       Calvin Jude D'Souza
ROLE:       Cybersecurity Researcher & Systems Architect
CLEARANCE:  Team Lead Intern @ Army Cyber Group
STATUS:     Building machines that look for proof.
LOCATION:   Earth (Usually)`;
        break;
      case 'skills':
        output = `TECHNICAL PROFICIENCIES
-----------------------
[+] CORE:      Cybersecurity, AI, Forensics, Research
[+] DOMAINS:   Blockchain Intelligence, Deepfake Detection
[+] INTERESTS: Cinephile, Automotive, F1 Telemetry
[+] STATUS:    Building investigation platforms.`;
        break;
      case 'contact':
        output = `SECURE COMMS LINK
-----------------
[+] EMAIL:    calvinja320@gmail.com
[+] PHONE:    +91-8971192706
[+] GITHUB:   github.com/Cal2-0
[+] LINKEDIN: linkedin.com/in/calvin-jude-dsouza
[+] INSTA:    @_______.cal`;
        break;
      case 'ls':
        if (args[1] === 'projects') {
          output = 'axon.md kensho.md neurometric.md';
        } else if (args[1] === '-la') {
          output = 'drwxr-xr-x 2 root root 4096 Aug 30 12:00 .\ndrwxr-xr-x 4 root root 4096 Aug 30 11:00 ..\n-rw-r--r-- 1 root root  128 Aug 30 11:30 classified.txt\n-rw-r--r-- 1 root root 1024 Aug 30 12:00 top_secret.enc\n-rwxr-xr-x 1 root root   42 Aug 30 11:15 .ghost_protocol';
        } else {
          output = 'home work writing gallery uses timeline classified.txt top_secret.enc';
        }
        break;
      case 'cat':
        if (args[1] === 'classified.txt') {
          output = 'Opening classified document...';
          setTimeout(() => {
            setIsOpen(false);
            navigate('/classified');
          }, 1000);
        } else if (args[1] === 'top_secret.enc') {
          output = 'ERROR: Decryption key required. File is AES-256 encrypted.';
        } else if (args[1] === '.ghost_protocol') {
          output = <span style={{ color: 'rgba(10, 10, 11, 0.95)' }}>You found it. The Ghost Protocol is active. Trust no one.</span>;
        } else {
          output = `cat: ${args[1] || ''}: No such file or directory`;
        }
        break;
      case 'nmap':
        output = 'Starting Nmap 7.92 ( https://nmap.org )\nScanning localhost (127.0.0.1)\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\n31337/tcp open Elite\nNmap done: 1 IP address (1 host up) scanned in 0.04 seconds';
        break;
      case 'ping':
        output = 'PING 127.0.0.1 (127.0.0.1): 56 data bytes\n64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms\n64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms\n64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.045 ms\n--- 127.0.0.1 ping statistics ---\n3 packets transmitted, 3 packets received, 0.0% packet loss';
        break;
      case 'neofetch':
        output = `
       \\         OS: BureauOS v1.0
        \\        Host: Mainframe-01
         \\       Kernel: 5.15.0-generic
          \\      Uptime: 42 days, 3 hours, 14 mins
           \\     Packages: 1337 (dpkg)
            \\    Shell: bash 5.1.16
       ____  \\   Terminal: Bureau-Term
      /    \\  \\  CPU: Quantum Core i9
     |      |  | RAM: 64TB / 128TB
      \\____/  /
           \\ /
            V
`;
        break;
      case 'matrix':
        output = 'Wake up, Neo...\nThe Matrix has you...\nFollow the white rabbit.';
        break;
      case 'ghost':
        output = <span style={{ color: 'rgba(10, 10, 11, 0.95)' }}>The phantom protocol is active. This text is invisible until selected.</span>;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'hack':
        output = "That's... that's not how this works.";
        break;
      case 'sudo':
        if (cmd.includes('rm -rf /')) {
          output = 'Nice try. ACCESS DENIED. Incident logged.';
        } else if (args[1] === 'make' && args[2] === 'me' && args[3] === 'a' && args[4] === 'sandwich') {
          output = 'Okay.';
        } else {
          output = 'User is not in the sudoers file. This incident will be reported.';
        }
        break;
      case 'rm':
        if (args[1] === '-rf' && args[2] === '/') {
          output = 'Nice try. ACCESS DENIED. Incident logged.';
        } else {
          output = 'rm: permission denied';
        }
        break;
      case 'the':
        if (args[1] === 'cake' && args[2] === 'is' && args[3] === 'a' && args[4] === 'lie') {
          output = 'Aperture Science Enrichment Center confirms this statement.';
        } else {
          output = `Command not found: ${args[0]}`;
        }
        break;
      case 'do':
        if (args[1] === 'a' && args[2] === 'barrel' && args[3] === 'roll') {
          output = 'Executing barrel roll...';
          document.body.style.transition = 'transform 1s ease-in-out';
          document.body.style.transform = 'rotate(360deg)';
          setTimeout(() => {
            document.body.style.transition = 'none';
            document.body.style.transform = 'rotate(0deg)';
          }, 1000);
        } else {
          output = `Command not found: ${args[0]}`;
        }
        break;
      case 'exit':
        setIsOpen(false);
        return;
      case '':
        return;
      default:
        output = `Command not found: ${args[0]}`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, output]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, width: '100%', height: '50vh',
      backgroundColor: 'rgba(10, 10, 11, 0.95)', borderTop: '2px solid var(--color-gold)',
      color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', padding: '20px', zIndex: 10000,
      overflowY: 'auto', backdropFilter: 'blur(10px)',
      boxShadow: '0 -20px 50px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
        <span>BUREAU TERMINAL // ROOT ACCESS</span>
        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer' }}>[ CLOSE ]</button>
      </div>
      
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: '5px', whiteSpace: 'pre-wrap' }}>{line}</div>
      ))}
      
      <form onSubmit={onSubmit} style={{ display: 'flex', marginTop: '10px' }}>
        <span style={{ marginRight: '10px', color: 'var(--color-gold)' }}>root@bureau:~$</span>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            background: 'transparent', border: 'none', color: 'var(--color-gold)', 
            fontFamily: 'var(--font-mono)', outline: 'none', flex: 1, fontSize: '1rem'
          }}
        />
      </form>
    </div>
  );
};

export default TerminalOverlay;
