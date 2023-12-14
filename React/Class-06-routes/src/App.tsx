import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <footer>@Reprograma Jucás</footer>
    </>
  );
}
