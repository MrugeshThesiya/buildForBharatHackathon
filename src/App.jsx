import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import {Nav,FooterComponent} from "./Components/index";
import { HomeComponent1 } from "./Components/index";
function App() {
  return (
      <div className="App">
        <Nav />
        <main>
          <Outlet />
        </main>
        <HomeComponent1 />
        <FooterComponent />
      </div>
  );
}

export default App;
