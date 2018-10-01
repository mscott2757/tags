import { colorFilms, bwFilms } from './Films';
import { cameras } from './Cameras';
import { america } from './Locations';

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

export const categories = {
  cameras,
  colorFilms,
  bwFilms,
  america,
}

export const flatGroups = {
  ...cameras.groups,
  ...colorFilms.groups,
  ...bwFilms.groups,
  ...america.groups,
}

console.log(flatGroups);
