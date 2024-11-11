import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchBike = createAsyncThunk(
  "sliceBike/fetchBike",
  async () => {
    const listBike = await axios.get("https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes");
    return listBike.data;
  }
);

const sliceRedux = createSlice({
  name: "sliceBike",
  initialState: {
    dataBike: [],
  },
  reducers: {
    loadBikes: (state, action)=> {
      console.log("payload: ", action.payload)
      state.dataBike = action.payload;
    },
    addBike: (state, action) => {
      state.dataBike.push(action.payload);
    },
    editBike: (state, action) => {
      const index = state.dataBike.findIndex(bike => bike.id === action.payload.id);
      if (index !== -1) {
        state.dataBike[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBike.fulfilled, (state, action) => {
      state.dataBike = action.payload;
    });
  },
});

export const { addBike, editBike, loadBikes } = sliceRedux.actions;
export default sliceRedux.reducer;
