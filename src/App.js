import './App.css';
import { BrowserRouter } from 'react-router-dom';
import "../src/library/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.rtl.min.css";
import FarmManagement from './Farm_Management/Farm_Management';

function App() {
  return (
    <BrowserRouter>
      <FarmManagement/>
    </BrowserRouter>
  );
}

export default App;
