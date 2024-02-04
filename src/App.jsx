import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import {Nav,Container,FooterComponent} from "./Components/index";
function App() {
  return (
      <div className="App">
        <Nav />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
      </div>
  );
}

export default App;
