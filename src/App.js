import React from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUsers />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
