import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="a">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="">
          <img src={rocket.flickr_images[0]} alt={rocket.name} className="b" />
          <div>
            <h2>{rocket.rocket_name}</h2>
            <p>
              {rocket.reserved && <span className="c">Reserved</span>}
              {' '}
              {rocket.description}
            </p>
            {/* Render the reservation button or cancel reservation button */}
            {/* based on the reserved status */}
            {rocket.reserved ? (
              <button type="button" onClick={() => handleCancelReservation(rocket.id)} className="v">Cancel Reservation</button>
            ) : (
              <button type="button" onClick={() => handleReserveRocket(rocket.id)} className="bb">Reserve Rocket</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
