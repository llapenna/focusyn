import { Group } from '@visx/group';
import { AxisBottom as Axis } from '@visx/axis';
import { GridColumns as Grid } from '@visx/grid';
import { withTooltip } from '@visx/tooltip';

import { CHART_COUNT_THRESHOLD, INTERVAL_TIME } from '@/shared/config';
import { ChartProps } from '@/reactapp/types/chart';
import { token } from '@/reactapp/styled/tokens';

import { container as containerConfig, chart } from './config';
import { container as containerClass } from './styles';
import { minutesSinceStart } from './utils';
import { Background } from '../Background';
import { useWidth } from './useWidth';
import { Tooltip, TooltipData } from '../Tooltip';
import { Bar } from './Bar';
import { useScale } from './useScale';
import { usePanning } from './usePanning';

export const DayChart = withTooltip<ChartProps, TooltipData>(
  ({
    data,
    tooltipOpen,
    tooltipData,
    hideTooltip,
    showTooltip,
    tooltipTop,
    tooltipLeft,
  }) => {
    const { ref, width } = useWidth();
    const { handlers, pannedBounds, zoom } = usePanning();
    const xScale = useScale({ width, x: pannedBounds });

    // Remove data that doesn't get to a minute and the data out of bounds
    const filteredData = data.filter(
      (d) => d.group.count >= CHART_COUNT_THRESHOLD
    );

    return (
      <div>
        <div {...handlers} draggable className={containerClass()}>
          <svg
            width={containerConfig.size.w}
            height={containerConfig.size.h}
            ref={ref}
          >
            <Background
              width={containerConfig.size.w}
              height={chart.size.h}
              color={chart.bg}
              borderRadius={12}
            />
            <Group left={containerConfig.size.marginX}>
              {filteredData.map((d) => {
                const t = minutesSinceStart(d.timestamp);
                const x = xScale(t);

                const key = `bar-${d.owner.name}-${d.timestamp}`;

                return (
                  <Bar
                    {...{
                      zoom,
                      x,
                      chartWidth: width,
                      key,
                      window: d,
                      showTooltip,
                      hideTooltip,
                    }}
                  />
                );
              })}
            </Group>
            <Axis
              left={containerConfig.size.marginX}
              top={chart.size.h}
              scale={xScale}
              hideAxisLine={true}
              hideTicks={true}
              tickLabelProps={{ fill: token('colors.slate.300') }}
              tickValues={chart.tickValues}
              tickFormat={(v, i, a) => {
                const isLast = i === a.length - 1;
                if (isLast) return '24hs';

                const msInMin = 60 * 1000;
                // Each v represents the quantity of minutes since 00:00
                const d = new Date((v as number) * msInMin);
                const date = new Date(d.getTime() + 3 * 60 * msInMin);

                return `${date.getHours()}hs`;
              }}
            />
            <Grid
              scale={xScale}
              height={chart.size.h}
              left={containerConfig.size.marginX}
              tickValues={chart.tickValues}
              stroke={token('colors.slate.600')}
            />
          </svg>
        </div>
        <Tooltip
          isOpen={tooltipOpen}
          data={tooltipData}
          top={tooltipTop}
          left={tooltipLeft}
        />
      </div>
    );
  }
);
