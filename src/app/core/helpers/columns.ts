import { breakpoints } from '@core/helpers';

export const getColumns = (width: number) => {
  if (width >= breakpoints.lg) {
    return 6;
  }

  if (width >= breakpoints.md) {
    return 4;
  }

  return 1;
};
