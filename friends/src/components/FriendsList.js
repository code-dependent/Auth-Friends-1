import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriend from "./NewFriendForm";
import "../assets/styles/FriendsList.css";

const FriendsList = (props) => {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        // console.log(res.data);
        setFriends(res.data);
        // console.log(friends);
      });
  }, []);
  // console.log(friends);
  return (
    <div>
      <NewFriend setFriends={setFriends} />
      {!friends ? (
        <p>...fetching friends</p>
      ) : (
        <div className="card-container">
          {friends.map((friend) => (
            <div className="friend-card">
              <h1>{friend.name}</h1>
              <h2>{friend.age}</h2>
              <h2>{friend.email}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
