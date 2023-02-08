import { createSlice } from "@reduxjs/toolkit";
import { ChatState } from "./../models/chat";

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      author: { name: "Daniel", avatar: "images/avatars/daniel.jpg" },
      text: "Hey!",
      date: Date.now(),
    },
    {
      id: 2,
      author: { name: "Molly", avatar: "images/avatars/molly.png" },
      text: "How are you?!",
      date: Date.now(),
    },
  ],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMenssage: (state, action) => {
        //TODO: TRABALHO DE CASA
    },
  },
});

export const {addMessage, removeMenssage} = chatSlice.actions;
export default chatSlice.reducer;