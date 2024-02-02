import { cva } from '@/reactapp/styled/css';
import { container as containerConfig } from './config';

const outlineWidth = 2;

export const container = cva({
  base: {
    cursor: 'e-resize',
  },
});
export const bar = cva({
  base: {
    cursor: 'pointer',
    // TODO: make the hover effect nicer
    '&:hover': {
      transform: `translateY(-${containerConfig.size.margin - outlineWidth}px)`,
      // total height - outline * 3 (top, bottom and translate)
      height: containerConfig.size.h - outlineWidth * 3,
      outline: `${outlineWidth}px solid #F00`,
    },
  },
});
