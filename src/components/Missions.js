import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/features/mission/missionsSlice';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.joined ? 'Active member' : 'NOT A MEMBER'}</td>
              <td>
                {mission.joined && (
                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                >
                  Leave Mission
                </Button>
                )}
                {!mission.joined && (
                <Button
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
