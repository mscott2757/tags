
const portraTags = ['portra', 'kodakportra', 'kodak'];
const fujiTags = ['ishootfujifilm'];

export const colorFilms = {
  portra: {
    title: 'Kodak Portra',
    tags: portraTags
  },
  fuji400h: {
    title: 'Fuji 400H',
    tags: [...fujiTags, 'fuji400h']
  },
  fuji160ns: {
    title: 'Fuji 160NS',
    tags: [...fujiTags, 'fuji160ns']
  },
  natura: {
    title: 'Fuji Natura 1600',
    tags: [...fujiTags, 'fujinatura']
  },
  industrial400: {
    title: 'Fuji Industrial 400',
    tags: [...fujiTags, 'fujiindustrial400']
  },
  cinestill800: {
    title: 'Cinestill 800T',
    tags: ['cinestill800t', 'colorfilm', 'cinestill', 'cinestill800']
  }
};

export const bwFilms = {
  hp5: {
    title: 'Ilford HP5',
    tags: ['ilford', 'blackandwhite', 'ilfordhp5', 'ilfordphoto']
  },
  trix: {
    title: 'Kodak Tri-X',
    tags: ['kodak', 'blackandwhite', 'kodaktrix', 'madewithkodak']
  },
};
