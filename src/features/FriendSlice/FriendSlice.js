import { createSlice } from "@reduxjs/toolkit";

const friendListData = [
  {
    id: 1001,
    fullName: "Vinay Rohilla",
    profile: "ReactJS Designer",
    friendType: "suggest",
  },
  {
    id: 1002,
    fullName: "Suryanshu Gupta",
    profile: "Quality Analyst",
    friendType: "suggest",
  },
  {
    id: 1003,
    fullName: "Harshit Dixit",
    profile: "Android Developer",
    friendType: "suggest",
  },
  {
    id: 1004,
    fullName: "Rahul Sharma",
    profile: "Quality Analyst",
    friendType: "suggest",
  },
  {
    id: 1005,
    fullName: "Aman Jaiswal",
    profile: "PHP Developer",
    friendType: "suggest",
  },
  {
    id: 1006,
    fullName: "Ramveer Jat",
    profile: "MEAN Stack Developer",
    friendType: "suggest",
  },
  {
    id: 1007,
    fullName: "Amit Saraswat",
    profile: "ReactJS Developer",
    friendType: "suggest",
  },
];
localStorage.setItem("allFriendList", JSON.stringify(friendListData));
const allFriendListData = JSON.parse(localStorage.getItem("allFriendList"));

const initialState = {
  allFriendList: allFriendListData || [],
};

const FriendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    sendRequest: (state, { payload }) => {
      state.allFriendList = state?.allFriendList?.map((item) => {
        if (item?.id === payload?.id) {
          item.friendType = "request";
        }
        return item;
      });
      localStorage.setItem(
        "allFriendList",
        JSON.stringify(state.allFriendList)
      );
    },
    acceptRequest: (state, { payload }) => {
      state.allFriendList = state?.allFriendList?.map((item) => {
        if (item?.id === payload?.id) {
          item.friendType = "follower";
        }
        return item;
      });
      localStorage.setItem(
        "allFriendList",
        JSON.stringify(state.allFriendList)
      );
    },
    removeFriend: (state, { payload }) => {
      state.allFriendList = state?.allFriendList?.map((item) => {
        if (item?.id === payload?.id) {
          item.friendType = "suggest";
        }
        return item;
      });
      localStorage.setItem(
        "allFriendList",
        JSON.stringify(state.allFriendList)
      );
    },
  },
});

export const { sendRequest, acceptRequest, removeFriend } = FriendSlice.actions;
export default FriendSlice.reducer;
