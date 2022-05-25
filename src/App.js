import landscape from "./landscape.webp";

function App() {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${landscape})`, backgroundSize: `cover` }}
    ></div>
  );
}

export default App;
