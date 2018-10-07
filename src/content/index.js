import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america } from './locations';

export const defaultTags = [
  'film',
  'ishootfilm',
  'shootfilm',
  'filmcommunity',
  'filmisnotdead',
  'buyfilmnotmegapixels',
  'filmphotography',
  'filmfeed',
  'analogphotography',
  'analogfeatures',
  'postthepeople',
  'streetphotography',
  'filmcamera',
  'staybrokeshootfilm',
  'magnumphotos',
  'streetclassics',
	'filmphotographic',
	'theanalogclub',
	'grainisgood',
	'kodak_photo',
	'filmforever',
];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
};
