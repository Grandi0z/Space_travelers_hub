import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from './actions';
import { reserveRocket, cancelReservation } from '../redux/features/rockets/reducers';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
/* eslint-disable */
  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocket-container" key={rocket.id}>
          <div className="rocket-item-image">
            <img className="rocket-image" src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          </div>
          <div className="rocket-item">
            <h4 className="rocket-name">{rocket.name}</h4>
            {rocket.reserved && (<button type="button" className="reserved" id="reserved"> Reserved </button>)}
            <span className="rocket-description">{rocket.description}</span>
            {rocket.reserved && (<button type="button" className="cancel-button" id="cancelReserveBtn" onClick={() => dispatch(cancelReservation(rocket.id))}> Cancel Reserve </button>)}
            {!rocket.reserved && (<button type="button" className="reserve-button" id="reserveBtn" onClick={() => { dispatch(reserveRocket(rocket.id));
              }}>  Reserve Rocket  </button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsList;
