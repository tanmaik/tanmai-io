import landscape from "./landscape.webp";

function App() {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${landscape})`, backgroundSize: `cover` }}
    >
      <h2 className="text-white">Hello</h2>
    </div>
  );
}

export default App;
