import { colorFilms, bwFilms } from './Films';
import locations from './Locations';
import cameras from './Cameras';

export { colorFilms, bwFilms } from './Films';
export {default as locations} from './Locations';
export {default as cameras} from './Cameras';

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
  'stayandwander',
  'magnumphotos',
  'lensculture',
  'streetclassics'
];

export const tagCategories = {
  cameras,
  colorFilms,
  bwFilms,
  locations
}

