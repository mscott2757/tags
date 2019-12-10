import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america, asia } from './locations';

export const defaultTags = [
  'ishootfilm',
  'filmisnotdead',
  'filmcamera',
  'filmcommunity',
  'filmfeed',
  'analogfeatures',
	'analog',
	'analogue',
	'filmforever',
  'grainisgood',
  'onfilm',
  'back2thebase',
  'photofilmy',
  'filmphotographic',
  'ifyouleave',
  'collectivelycreate',
];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
  ...asia,
};
