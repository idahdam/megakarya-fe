import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
