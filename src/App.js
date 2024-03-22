import './App.css';
import Navbar from './componets/Navbar';
// import TextForm from './componets/TextForm';
import Details from './componets/Details';





function App() {
  return (
    <>
      <Navbar title="Utiltext up" />
      {/* <div className="container">
        <TextForm heading = "Enter the text to analyze" />
      </div> */}
      <Details />
    
    </>
  );
}

export default App;
