import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { seoService } from "./services/seoService";
import { Home } from "./pages/Home/Home";
// import { css } from "@emotion/react";
import Portfolio from "./pages/Portfolio/Portfolio";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  let [loading, setLoading] = useState(true);
  const [seo, setSeo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await seoService.getAllSeo();
      setSeo(response.data);
    };
    fetchData().then(() => setLoading(false));
  }, []);

  if (loading === true) return null;
  return (
    <>
      <Router>
        <Navbar />
        <Helmet>
          ‍<title>{seo.Title ? seo.Title : "Taruna Mega Karya"}</title>
          <meta name="robots" content="index, follow"></meta>
          <meta
            name="description"
            content={
              seo.description
                ? seo.description
                : "Trading company between worldwide and Indonesia. Export from Indonesia to worldwide and Import from worldwide to Indonesia"
            }
          ></meta>
          <link rel="canonical" href="https://tmtrade.id"></link>
          <meta
            name="keywords"
            content={
              seo.keywords
                ? seo.keywords.map((item) => `${item.keyword}`)
                : null
            }
          />
        </Helmet>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
