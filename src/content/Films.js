
const portraTags = ['kodak', 'colorfilm', 'kodakportra', 'madewithkodak'];
const fujiTags = ['ishootfujifilm', 'colorfilm', 'fujifilm'];

const films = {
  title: 'Films',
  groups: [
    {
      title: 'Kodak Portra',
      id: 'portra',
      tags: portraTags
    },
    {
      title: 'Kodak Tri-X',
      id: 'trix',
      tags: ['kodak', 'blackandwhite', 'kodaktrix', 'madewithkodak']
    },
    {
      title: 'Fuji 400H',
      id: 'fuji400h',
      tags: [...fujiTags, 'fuji400h']
    },
    {
      title: 'Fuji 160NS',
      id: 'fuji160ns',
      tags: [...fujiTags, 'fuji160ns']
    },
    {
      title: 'Fuji Natura 1600',
      id: 'natura',
      tags: [...fujiTags, 'fujinatura']
    },
    {
      title: 'Fuji Industrial 400',
      id: 'industrial400',
      tags: [...fujiTags, 'fujiindustrial400']
    },
    {
      title: 'Fuji Provia 100F',
      id: 'provia',
      tags: [...fujiTags, 'provia100f']
    },
    {
      title: 'Cinestill 800T',
      id: 'cinestill800t',
      tags: ['cinestill800t', 'colorfilm', 'cinestill', 'cinestill800']
    }
  ]
}

export default films;
