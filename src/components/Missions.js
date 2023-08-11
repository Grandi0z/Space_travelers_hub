import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/features/mission/missionsSlice';
import styles from '../styles/missions.module.css';

const Missions = () => {
  const [isFetched, setIsFetched] = useState(false);
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFetched(true);
    if (isFetched) {
      dispatch(fetchMissions());
    }
    return () => setIsFetched(false);
  }, [dispatch, isFetched]);
  let content;
  if (isLoading) {
    content = <div>Is loading...</div>;
  } else if (error) {
    content = <div>Something went wrong</div>;
  } else if (missions.length) {
    content = (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Unname</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className={styles.td1}>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className={styles.td34}>
                <span className={mission.joined ? styles.activeMember : styles.notAMember}>
                  {mission.joined ? 'Active member' : 'NOT A MEMBER'}
                </span>
              </td>
              <td className={styles.td34}>
                {mission.joined && (
                <Button
                  className={styles.button}
                  variant="outline-danger"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                >
                  Leave Mission
                </Button>
                )}
                {!mission.joined && (
                <Button
                  className={styles.button}
                  variant="outline-secondary"
                  onClick={() => dispatch(joinMission(mission.mission_id))}
                >
                  Join Mission
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    content = <div>No mission yet</div>;
  }

  return <>{content}</>;
};

export default Missions;
