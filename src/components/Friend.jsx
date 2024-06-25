import React from "react";
import { useDispatch } from "react-redux";
import {
  acceptRequest,
  removeFriend,
  sendRequest,
} from "../features/FriendSlice/FriendSlice";

const Friend = ({ data }) => {
  const dispatch = useDispatch();

  const handleSendRequest = (id) => {
    if (data?.friendType === "request") {
      dispatch(acceptRequest({ id }));
    } else {
      dispatch(sendRequest({ id }));
    }
  };
  const handleRemoveFriend = (id) => {
    dispatch(removeFriend({ id }));
  };

  return (
    <div className="card mb-2 shadow-none text-start py-0 px-3 flex-row align-items-center">
      <img
        src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        className="card-img-top shadow-none"
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
      <div className="card-body">
        <h5 className="card-title mb-0">{data?.fullName}</h5>
        <p className="card-text">{data?.profile}</p>
      </div>
      <div className="d-flex flex-column">
        {data?.friendType !== "follower" ? (
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={() => handleSendRequest(data?.id)}
          >
            {data?.friendType === "request" ? "Accept" : "Send Request"}
          </button>
        ) : null}
        {data?.friendType === "request" ? (
          <button
            type="button"
            className="btn btn-sm btn-dark mt-1"
            onClick={() => handleRemoveFriend(data?.id)}
          >
            Cancel
          </button>
        ) : null}
        {data?.friendType === "follower" ? (
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={() => handleRemoveFriend(data?.id)}
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Friend;
