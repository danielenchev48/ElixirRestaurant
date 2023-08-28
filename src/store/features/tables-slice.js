import { createSlice } from "@reduxjs/toolkit";

const tablesSlice = createSlice({
  name: "tables",
  initialState: {
    tables: [
      {
        id: "Table 1",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 2",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 3",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 4",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 5",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 6",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 7",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 8",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 9",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 10",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "Table 11",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: true,
      },
      {
        id: "Table 12",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: true,
      },
      {
        id: "Table 13",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: true,
      },
      {
        id: "Table 14",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: true,
      },
      {
        id: "Table 15",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: true,
      },
    ],
    barSpots: [
      {
        id: "barSpot1",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot2",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot3",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot4",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot5",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot6",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot7",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot8",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
      {
        id: "barSpot9",
        isReserved: false,
        reservationDate: null,
        reservationHour: null,
        forSmokers: false,
      },
    ],
  },
  reducers: {
    makeReservation: (state, action) => {
      const tableIndex = state.tables.findIndex(
        ({ id }) => id === action.payload
      );
      if (tableIndex > -1) {
        state.tables[tableIndex].isReserved = true;
      }
    },
    makeReservationBarSpot: (state, action) => {
      const tableIndex = state.barSpots.findIndex(
        ({ id }) => id === action.payload
      );
      if (tableIndex > -1) {
        state.barSpots[tableIndex].isReserved = true;
      }
    },
  },
});

export const tablesActions = tablesSlice.actions;
export default tablesSlice;
