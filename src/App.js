import "./App.css"
import Header from "./Components/home/header/Header"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePages from "./Components/pageContent/HomePages";
import Footer from "./Components/home/Footer";
import Pages from "./Components/pages/Pages";
import Blog from "./Components/home/work/blog/Blog";
import Portfolio from "./Components/home/portfolio/Portfolio";
import Shop from "./Components/home/shop/Shop";
import Contact from "./Components/home/contact/Contact";

function App() {
  return(
    <>
    <Router>
    <Header/>
    <Switch>
      <Route  path="/" exact component={HomePages}/>
      <Route  path="/pages" exact component={Pages}/>
      <Route  path="/blog" exact component={Blog}/>
      <Route  path="/portfolio" exact component={Portfolio}/>
      <Route  path="/shop" exact component={Shop}/>
      <Route  path="/contact" exact component={Contact}/>


    </Switch>
    <Footer />
    </Router>

    </>
  )
}

export default App
