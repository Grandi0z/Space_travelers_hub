import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'missions';
const initialState = {
  missions: [],
  isLoading: false,
  error: '',
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const missionsSlice = createSlice({
  name,
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { missions } = state;
      const newMissions = missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: true };
      });
      state.missions = newMissions;
    },
    leaveMission: (state, action) => {
      const { missions } = state;
      const newMissions = missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: false };
      });
      state.missions = newMissions;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const missions = action.payload;
        const newMissions = missions.map((mission) => ({ ...mission, joined: false }));
        state.missions = newMissions;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission } = missionsSlice.actions;
