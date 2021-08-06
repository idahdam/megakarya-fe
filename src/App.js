import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commands" component={Home} />
          <Route exact path="/releases" component={Home} />
          <Route exact path="/submit-ideas" component={Home} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
