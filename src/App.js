import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="watch-app" className=" bg-gradient-to-r from-sky-500 to-indigo-500">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
