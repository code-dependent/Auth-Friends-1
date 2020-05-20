import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = (props) => {
  const { setFriends } = props;
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [addFriend, setAddFriend] = useState(false);
  const changeHandle = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };
  const upload = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
        setFriend({
          name: "",
          age: "",
          email: "",
        });
      });
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setAddFriend(!addFriend);
        }}
      >
        {addFriend ? "Cancel" : "Add a Friend"}
      </button>
      {addFriend && (
        <form onSubmit={upload}>
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            name="name"
            type="text"
            value={friend.name}
            onChange={changeHandle}
          />
          <label htmlFor="age">Age:&nbsp;</label>
          <input
            name="age"
            type="text"
            value={friend.age}
            onChange={changeHandle}
          />
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            name="email"
            type="text"
            value={friend.email}
            onChange={changeHandle}
          />
          &nbsp;
          <button>Add</button>
        </form>
      )}
    </>
  );
};

export default NewFriend;
