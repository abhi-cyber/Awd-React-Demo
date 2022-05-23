import './App.css';
import Navbar from './Components/navbar';
import Tutill from './Components/Tutill';

function App() {
  return (
    <>
    <Navbar title = "ChitkaraU" />
    <div className="container">
	    <Tutill />
    </div>
    </>
  );
};

export default App;  