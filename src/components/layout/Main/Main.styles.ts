import { cva } from '@/reactapp/styled/css';

const main = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',

    padding: 'lg',

    '& h1': {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
});

export default main;
