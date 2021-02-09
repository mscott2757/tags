import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america, asia } from './locations';

export const defaultTags = [
  'ishootfilm',
  'filmisnotdead',
  'filmcamera',
  'filmcommunity',
  'ibelieveinfilm',
	'analog',
	'analogue',
	'filmphotographic',
  'shootfilm',
  'onfilm',
  'analogcamera',
  'filmfeed',
  'filmphotography',
  'filmisalive',
  'analoguevibes',
];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
  ...asia,
};
