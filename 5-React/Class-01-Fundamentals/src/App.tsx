import imageReact from "./assets/react.svg";

// named exports
export function App() {
  return (
    <>
      <h1>Class 01 Fundamentals</h1>
      <p>Syntax TSX = JS + XML/HTML</p>
      <img src="vite.svg" />
      <img src={imageReact} />
    </>
  );
}
