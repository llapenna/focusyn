import { scaleLinear } from '@visx/scale';
import { useMemo } from 'react';
import { chart } from './config';

interface Props {
  width: number;
  x?: [number, number];
  clamp?: boolean;
}
/**
 * Generates a linear scale function to convert minutes to pixels and memoizes it
 * @param width Width of the chart
 * @param x Domain of the x axis (in minutes)
 * @returns A linear scale function to convert minutes to pixels
 */
export const useScale = ({
  width,
  x = [0, chart.maxBarQty],
  clamp = true,
}: Props) => {
  const [xMin, xMax] = x;

  const scale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [xMin, xMax],
        range: [0, chart.size.w(width)],
        clamp,
      }),
    [width, xMax, xMin, clamp]
  );

  return scale;
};
