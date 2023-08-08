import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketUrl = 'https://api.spacexdata.com/v4/rockets';

export const rocketList = createAsyncThunk('getRocketList', async (thunkAPI) => {
  try {
    const response = await axios.get(rocketUrl);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReserve: (state, action) => {
      const newRocketState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = newRocketState;
    },
    cancelReserve: (state, action) => {
      const newRocketState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = newRocketState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(rocketList.pending, (state) => {
        if (state.rockets.length === 0) state.isLoading = true;
      })
      .addCase(rocketList.fulfilled, (state, action) => {
        if (state.rockets.length === 0) {
          state.isLoading = false;
          state.rockets = action.payload.map((rocket) => (
            {
              id: rocket.id,
              name: rocket.name,
              description: rocket.description,
              image: rocket.flickr_images[0],
            }
          ));
        }
      })
      .addCase(rocketList.rejected, (state, action) => {
        if (state.rockets.length === 0) {
          state.isLoading = false;
          state.error = action.payload;
        }
      });
  },
});

export const { addReserve, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
