import { useState, useEffect, useRef } from 'react';

const PASSWORD = 'Modulab';
const STORAGE_KEY = 'modulab_unlocked';

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [anim, setAnim] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAnim(true);
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      onUnlock();
    } else {
      setError('Wrong password, try again.');
      setInput('');
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#242424] transition-opacity duration-500 ${anim ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: '100vh' }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center"
        style={{ boxShadow: '0 8px 32px rgba(59,51,139,0.15)' }}
      >
        <div className="text-4xl mb-2" role="img" aria-label="lock">🔒</div>
        <h1 className="text-2xl font-bold mb-1 text-[#242424]">Modulab Access</h1>
        <p className="text-gray-600 mb-6 text-center">Enter the password to view the site.</p>
        <input
          ref={inputRef}
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bc04] mb-3"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="w-full bg-[#f8bc04] text-white font-semibold py-2 rounded hover:bg-[#e0a903] transition-colors mb-2"
        >
          Unlock
        </button>
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
        <div className="mt-6 text-xs text-gray-400">&copy; Modulab</div>
      </form>
    </div>
  );
} 