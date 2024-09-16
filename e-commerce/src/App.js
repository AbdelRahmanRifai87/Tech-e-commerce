import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SubNavBar from "./components/SubNavBar/SubNavBar";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="b-black">
        <div className="container">
          <SubNavBar />
        </div>
      </div>
    </>
  );
}

export default App;
