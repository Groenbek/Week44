import logo from "./logo.svg";
import "./App.css";
import FormDemo from "./FormDemo";
import FormDemoMultible from "./FormDemoMultible";

const App = () => {
  return (
    <div className="App">
      <h1>Velkommen til forsiden</h1>
      <FormDemo />
      <FormDemoMultible />
    </div>
  );
};

export default App;
