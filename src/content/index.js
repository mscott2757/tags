import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america, asia } from './locations';

export const defaultTags = [
  'film',
  'ishootfilm',
  'everybodyfilm',
  'filmisnotdead',
  'buyfilmnotmegapixels',
  'filmphotography',
  'analogphotography',
  'analogfeatures',
  'analoguepeople',
  'streetphotography',
  'streetclassics',
	'filmphotographic',
	'theanalogclub',
	'grainisgood',
	'filmforever',
  'somewheremagazine',
  'onfilm',
  'back2thebase',
  'photofilmy',
];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
  ...asia,
};
