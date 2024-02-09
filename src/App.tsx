import { useEffect, useState } from 'react';

import '@/reactapp/utils/colors';
import '@/reactapp/utils/clamp';

import activeWindow from '@/reactapp/services/activeWindow';
import { Main } from '@/reactapp/components/layout';

import { ActiveWindow } from '@/shared/types/activeWindow';
import Overview from './pages/Overview';
import { ActiveWindowsProvider } from '@/reactapp/context/ActiveWindows';

function App() {
  const [count, setCount] = useState<ActiveWindow.Result[]>([]);

  useEffect(() => {
    subscribe((_, window) => {
      if (window)
        setCount((state) => {
          return [...state, window];
        });
      void window;
    });

    return unsubscribe;
  }, []);

  return (
    <ActiveWindowsProvider value={grouped}>
      <Main>
        <Overview />
      </Main>
    </ActiveWindowsProvider>
  );
}

export default App;
