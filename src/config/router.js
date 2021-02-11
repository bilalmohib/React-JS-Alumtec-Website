import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutUsPage from '../Components/AboutUsPage.jsx'
import Home from '../Components/Home.jsx'
import ProductsPage from '../Components/ProductsPage.jsx'
import Health from '../Components/Health.jsx'
import CareersPage from '../Components/CareersPage.jsx'
import Login from "../Components/Login.jsx"
import Admin from "../Components/Admin.jsx"
import ContactUsPage from '../Components/ContactUsPage.jsx'
import ServicesPage from "../Components/ServicesPage.jsx"

class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                      <Route exact path="/" component={Home} />

                      <Route exact path="/about" component={AboutUsPage} />

                      <Route exact path="/products" component={ProductsPage} />

                      <Route exact path="/health" component={Health} />

                      <Route exact path="/career" component={CareersPage} />

                      <Route exact path="/login" component={Login} />

                      <Route exact path="/admin" component={Admin} />

                      <Route exact path="/contact" component={ContactUsPage} />

                      <Route exact path="/services" component={ServicesPage} />

                  </Router>

        )
    }
}
export default AppRouter;