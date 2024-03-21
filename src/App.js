import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';



function App() {
  return (
    <>
      <Navbar title="Utiltext" />
      <div className="container">
        <TextForm heading = "Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
