import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 p-3 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg shadow-lg 
                 hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;