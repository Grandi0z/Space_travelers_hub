const missionsData = [
  {
    id: 'mission1',
    missionName: 'Mission 1',
    description: 'Mission 1 description',
  },
  {
    id: 'mission2',
    missionName: 'Mission 2',
    description: 'Mission 2 description',
  },
];

const rockets = {
  rockets: [
    {
      id: 'rocket1',
      rocketName: 'Rocket 1',
      description: 'Rocket 1 description',
      imageRocket: 'rocket1.jpg',
    },
    {
      id: 'rocket1',
      rocketName: 'Rocket 1',
      description: 'Rocket 1 description',
      imageRocket: 'rocket1.jpg',
    },
  ],
};

const get = (url) => {
  if (url === 'https://api.spacexdata.com/v4/rockets') {
    return Promise.resolve({
      data: rockets,
    });
  }

  if (url === 'https://api.spacexdata.com/v3/missions') {
    return Promise.resolve({
      data: missionsData,
    });
  }

  return Promise.resolve({
    data: {},
  });
};

export default { get };
