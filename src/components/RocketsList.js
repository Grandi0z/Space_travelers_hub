import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from './actions';

const RocketsList = () => {
  const [reserved, setReserved] = useState(false);
  const handleReserveClick = () => {
    setReserved(true);
  };
  const handleCancelReserveClick = () => {
    setReserved(false);
  };

  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocket-container" key={rocket.id}>
          <div className="rocket-item-image">
            <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          </div>
          <div className="rocket-item">
            {reserved ? (<span className="reserved" id="reserved"> Reserved </span>) : ''}
            <span className="rocket-name">{rocket.name}</span>
            <p className="rocket-description">{rocket.description}</p>
            {reserved ? (<button type="button" className="cancel-button" id="cancelReserveBtn" onClick={handleCancelReserveClick}> Cancel Reserve </button>) : (
              <button type="button" className="reserve-button" id="reserveBtn" onClick={handleReserveClick}> Reserve Rocket </button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsList;
