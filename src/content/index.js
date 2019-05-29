import { colorFilms, bwFilms } from './films';
import { cameras } from './cameras';
import { america, asia } from './locations';

export const defaultTags = [
  'shootfilm',
  'everybodyfilm',
  'filmisnotdead',
  'filmcamera',
  'filmcommunity',
  'filmfeed',
  'analogfeatures',
  'analoguevibes',
  'drivebyfilm',
  'filmphotomag',
	'afilmcosmos',
	'analog',
	'analogue',
	'filmforever',
  'filmwave',
  'grainisgood',
  '35mmmagazine',
  'onfilm',
  'back2thebase',
  'photofilmy',
  'taintedmag',
];

export const groups = {
  ...cameras,
  ...colorFilms,
  ...bwFilms,
  ...america,
  ...asia,
};
