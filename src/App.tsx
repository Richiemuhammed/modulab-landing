import LandingPage from './pages/LandingPage';
import PasswordGate from './components/PasswordGate';
import { useState } from 'react';
import { isUnlocked } from './components/ui/passwordGateUtils';

const showSite = import.meta.env.VITE_SHOW_SITE === 'true';

function App() {
  const [unlocked, setUnlocked] = useState(isUnlocked());

  if (!showSite && !unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }
  return <LandingPage />;
}

export default App;