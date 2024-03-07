import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: 'events',
    'initialState': {
        list: [
            {
                name: 'FE team sync',
                participants: 'Maria, Bob, Alex',
                day: 'mon',
                time: '14'
              },
              {
                name: 'Daily standup',
                participants: 'Maria, Bob, Alex',
                day: 'fri',
                time: '10'
              },
              {
                name: 'Test',
                participants: 'Maria, Bob, Alex',
                day: 'mon',
                time: '12'
              },
              {
                name: 'Test 2',
                participants: 'Maria, Bob, Alex',
                day: 'fri',
                time: '18'
              },
        ]
    },
    reducers: {
        loadEvents: (state) => {},
        deleteEvent: (state, action) => {
          state.list = state.list.filter((item) => item.name !== action.payload)
        },
        addEvent: (state, action) => {
          state.list.push(action.payload)
        }
    }
})

export const {loadEvents, deleteEvent, addEvent} = eventSlice.actions;
export default eventSlice.reducer;