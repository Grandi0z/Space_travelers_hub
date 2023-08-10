import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);
  const selectJoinedMission = missions.filter((mission) => mission.joined);
  return (
    <div>
      <>
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

      </>
    </div>
  );
};

export default MyProfile;
