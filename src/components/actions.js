import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data;
});

export default fetchRockets;
