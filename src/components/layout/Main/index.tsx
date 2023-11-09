import type { FC, ReactNode } from 'react';
import main from './Main.styles';

interface Props {
  children: ReactNode;
}
const Main: FC<Props> = ({ children }) => {
  return (
    <main className={main()}>
      <h1>Focusyn</h1>
      {children}
    </main>
  );
};

export default Main;
