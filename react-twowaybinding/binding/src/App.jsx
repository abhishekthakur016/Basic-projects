import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, username]);
    setUsername("");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-10 bg-gray-300 border-4 border-black rounded-3xl p-5 w-160">

        <form onSubmit={submitHandler}>
          <input
            className="bg-white rounded py-1 border-2 px-2 w-100"
            type="text"
            placeholder="Enter your name"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="ml-4 bg-blue-500 px-3 py-1 text-white rounded-xl font-bold w-30 border-2">
            Submit
          </button>
        </form>

        <h1 className="text-3xl font-extralight text-white mt-6">Details....</h1>

        {allUsers.map((user, index) => (
          <h1 key={index} className="text-xl font-extralight  bg-white mt-2 inline-block w-100">
            {user}
          </h1>
        ))}

      </div>
    </div>
  );
}

export default App;
