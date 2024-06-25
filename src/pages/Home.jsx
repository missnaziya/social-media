import React from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import FriendList from "../components/FriendList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5">
            <h5>Suggestions</h5>
            <p>Friends</p>
            <FriendList type="suggest" />
          </div>
          <div className="col-lg-4">
            <h5>Friend's List</h5>
            <p>Request</p>
            <FriendList type="request" />
            <p>Followers</p>
            <FriendList type="follower" />
          </div>
          <div className="col-lg-3">
            <h5>Profile</h5>
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
