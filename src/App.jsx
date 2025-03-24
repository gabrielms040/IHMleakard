import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section1 from "./assets/Section1";
import Section2 from "./assets/Section2";
import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState(""); // Define o estado do nome de usuário

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section1 setUsername={setUsername} />} /> {/* Passa setUsername para Section1 */}
        <Route path="/section2" element={<Section2 username={username} />} /> {/* Passa username para Section2 */}
      </Routes>
    </Router>
  );
}

export default App;
