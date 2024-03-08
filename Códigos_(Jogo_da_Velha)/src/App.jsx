import Board from "./components/Board";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      {/* Adicionei um Timer Pausavel */}
      <Timer />
      <Board />
    </div>
  );
  
}

export default App;