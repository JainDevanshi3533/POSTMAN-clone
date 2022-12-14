import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <div>
      {/* wrapping with context api */}
      <DataProvider>  
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
