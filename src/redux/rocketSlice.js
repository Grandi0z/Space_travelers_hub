import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const rocketUrl = 'https://api.spacexdata.com/v4/rockets';