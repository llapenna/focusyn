import { hstack, vstack } from '@/reactapp/styled/patterns';
import { Container } from '@/reactapp/components/layout';
import { DayChart } from '@/reactapp/components/charts/DayChart';
import { useGroupedActiveWindows } from '@/reactapp/context/ActiveWindows';

import { filter } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}
const Button = ({ children, active = false }: ButtonProps) => (
  <button className={filter({ active })}>{children}</button>
);

export const Chart = () => {
  const windows = useGroupedActiveWindows({});
  return (
    <Container>
      <div className={vstack({ gap: 'xl', alignItems: 'stretch' })}>
        <div className={hstack({ gap: 'sm' })}>
          <Button active>All</Button>
          <Button>Active</Button>
          <Button>Idle</Button>
          <Button>Focus</Button>
        </div>
        <DayChart data={windows} />
      </div>
    </Container>
  );
};
