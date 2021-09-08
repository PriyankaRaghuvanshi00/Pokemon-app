import './App.css';
import Header from "./component/header/header";
import Body from "./component/body/body"
import { Route } from "react-router-dom";
import About from "./component/details/details"

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Body} {...props}/>
      <Route path="/about/:id" exact component={About} {...props}/>
    </div>
  );
}

export default App;
