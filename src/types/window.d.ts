import type { ActiveWindow } from '@/shared/activeWindow';

declare global {
  interface Window {
    activeWindow: {
      subscribe: ActiveWindow.Subscribe;
    };
  }
}
