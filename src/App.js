import "./App.css";
import { Main } from "./Main/Main";
import { NavBar } from "./Nav/NavBar";
import { SideBar } from "./SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="App--parent">
        <SideBar></SideBar>
        <NavBar></NavBar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
