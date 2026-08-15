import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america, asia } from './locations';

export const defaultTags = [];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
  ...asia,
};
