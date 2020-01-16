import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Rooms from "./components/pages/Rooms/Rooms";
import RoomInfos from "./components/pages/Rooms/RoomInfos";
import Error from "./components/pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import Booking from "./components/pages/Booking/Booking";

import SuiteInfos from "./components/pages/Rooms/SuiteInfos";
import BookingSuite from "./components/pages/Booking/BookingSuite";
import Restaurants from "./components/pages/Restaurants/Restaurants";
import RestaurantInfos from "./components/pages/Restaurants/RestaurantInfos";
import RestaurantBooking from "./components/pages/Restaurants/RestaurantBooking/RestaurantBooking";
import Events from "./components/pages/Events/Events";
import EventInfos from "./components/pages/Events/EventInfos";
import Spas from "./components/pages/Spa/Spas";
import SpaBooking from "./components/pages/Spa/SpaBooking";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <Nav /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:id" component={RoomInfos} />} />
        <Route path="/rooms/:id/booking" component={Booking} />
        <Route exact path="/rooms/suites/:id" component={SuiteInfos} />
        <Route path="/rooms/suites/:id/booking" component={BookingSuite} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/restaurants/:id" component={RestaurantInfos} />
        <Route
          exact
          path="/restaurants/:id/booking"
          component={RestaurantBooking}
        />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={EventInfos} />
        <Route exact path="/spa" component={Spas} />
        <Route exact path="/spa/:id/booking" component={SpaBooking} />
        <Route exact component={Error} />
      </Switch>
      <Footer />
      <Footer2 />
    </Fragment>
  );
};

export default App;
