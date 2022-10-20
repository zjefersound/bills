import BillProvider from "./contexts/billContext";
import { Home } from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <BillProvider>
      <Home/>
    </BillProvider>
  );
}

export default App;
