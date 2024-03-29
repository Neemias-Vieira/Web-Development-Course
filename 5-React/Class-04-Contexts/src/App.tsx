import { useState } from "react";
import { Button } from "./components/Button";
import { UserCard } from "./components/UserCard";
import { UserContext } from "./contexts/UserContext";

export function App() {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      <h1>Class 04 Contexts</h1>
      <UserCard />
      <Button />
    </UserContext.Provider>
  );
}
