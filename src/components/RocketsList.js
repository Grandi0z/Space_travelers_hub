import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from './actions';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h2>Rockets List</h2>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
        </div>
      ))}
    </div>
  );
};

export default RocketsList;
