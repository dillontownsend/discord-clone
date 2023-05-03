import { signOut } from "next-auth/react";
import React from "react";

const Index = () => {
  return (
    <>
      <div>hello from index</div>
      <button onClick={() => void signOut()}>sign out</button>
    </>
  );
};

export default Index;
