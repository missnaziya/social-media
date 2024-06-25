import React from "react";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const loggedInUserInfo = useSelector((state) => state?.login?.data);
  const myFriendList = useSelector((state) => state?.friend?.allFriendList);
  const totalFollowers = myFriendList?.filter(
    (item) => item.friendType === "follower"
  );
  return (
    <div className="card mb-4">
      <img
        src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{loggedInUserInfo?.fullName}</h5>
        <p className="card-text">
          React JS Developer at Alphonic Network Solution Pvt. Ltd.
        </p>
        <hr />
        <h5>Followers</h5>
        <h3>{totalFollowers?.length}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
