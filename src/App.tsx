import BillProvider from "./contexts/billContext";
import Routes from "./routes/Routes";
import "./styles/global.css";

function App() {
  return (
    <BillProvider>
      <Routes />
    </BillProvider>
  );
}

export default App;
