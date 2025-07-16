const STORAGE_KEY = 'modulab_unlocked';

export function isUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export function resetUnlock() {
  localStorage.removeItem(STORAGE_KEY);
} 