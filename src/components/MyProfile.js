import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const { rockets } = useSelector((store) => store.rockets);
  const selectJoinedMission = missions.filter((mission) => mission.joined);
  const selectReservedMission = rockets.filter((mission) => mission.reserved);
  console.log(selectReservedMission);
  return (
    <div className="my-profile">
      <div className="my-profile-item">
        <h2>My Rockets</h2>
        {selectReservedMission.length && (
          <Table striped bordered="true" hover>
            <tbody>
              {selectReservedMission.map((rocket) => (
                <tr key={rocket.rocket_id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
      <div className="my-profile-item">
        <h2>My Missions</h2>
        {selectJoinedMission.length && (
          <Table striped bordered="true" hover>
            <tbody>
              {selectJoinedMission.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
