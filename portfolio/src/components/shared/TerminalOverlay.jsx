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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
        output = 'Available commands: whoami, ls, cat <file>, clear, hack, sudo rm -rf /, exit';
        break;
      case 'whoami':
        output = "Calvin Jude D'Souza // Systems Architect // The Bureau";
        break;
      case 'ls':
        if (args[1] === 'projects') {
          output = 'axon.md kensho.md neurometric.md';
        } else {
          output = 'home work writing gallery uses timeline classified.txt';
        }
        break;
      case 'cat':
        if (args[1] === 'classified.txt') {
          output = 'Opening classified document...';
          setTimeout(() => {
            setIsOpen(false);
            navigate('/classified');
          }, 1000);
        } else {
          output = `cat: ${args[1] || ''}: No such file or directory`;
        }
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
        } else {
          output = 'User is not in the sudoers file. This incident will be reported.';
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
      position: 'fixed', top: 0, left: 0, width: '100%', height: '50vh',
      backgroundColor: 'rgba(10, 10, 11, 0.95)', borderBottom: '2px solid var(--color-gold)',
      color: '#00ff00', fontFamily: 'var(--font-mono)', padding: '20px', zIndex: 10000,
      overflowY: 'auto', backdropFilter: 'blur(10px)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
        <span>BUREAU TERMINAL // ROOT ACCESS</span>
        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#00ff00', cursor: 'pointer' }}>[ CLOSE ]</button>
      </div>
      
      {history.map((line, i) => (
        <div key={i} style={{ marginBottom: '5px', whiteSpace: 'pre-wrap' }}>{line}</div>
      ))}
      
      <form onSubmit={onSubmit} style={{ display: 'flex', marginTop: '10px' }}>
        <span style={{ marginRight: '10px' }}>root@bureau:~$</span>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            background: 'transparent', border: 'none', color: '#00ff00', 
            fontFamily: 'var(--font-mono)', outline: 'none', flex: 1, fontSize: '1rem'
          }}
        />
      </form>
    </div>
  );
};

export default TerminalOverlay;
