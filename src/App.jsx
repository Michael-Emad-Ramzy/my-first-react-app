
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


function App() {


  return (
    //this empty tags is built-in functon in react insted of adding an extra dev 
    // (and so we can add a <fregmant> </fregmant> Tag and import it first with useState) 
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
