import "./index.css";
// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import {Nav,Navbar,FooterComponent} from "./Components/index";
function App() {
  return (
      <div className="App bg-gray-200 flex justify-between flex-col min-h-screen" >
        <Navbar />
        <main>
          <Outlet />
        </main>
        <FooterComponent />
      </div>
  );
}

export default App;
