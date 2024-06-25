import React from "react";
import { useSelector } from "react-redux";
import Friend from "./Friend";

const FriendList = ({ type }) => {
  const allFriendList = useSelector((state) => state?.friend?.allFriendList);

  return allFriendList?.filter((item) => item.friendType === type).length ? (
    allFriendList
      ?.filter((item) => item.friendType === type)
      ?.map((friend, ind) => {
        return <Friend key={ind} data={friend} />;
      })
  ) : (
    <h5>
      {type === "suggest"
        ? "No suggested friends"
        : type === "request"
        ? "No friend request"
        : "No followers"}
    </h5>
  );
};

export default FriendList;
