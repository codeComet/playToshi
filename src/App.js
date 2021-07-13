import "./App.css";
import { Button, Pagination } from "react-bootstrap";
import Gallery from "./Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import Artists from "./Artists";
import Auctions from "./Auctions";
import Footer from "./Footer";
import NavbarTop from "./NavbarTop";
import Wallet from "./Wallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <NavbarTop />

        {/* Router  */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/items" component={Items} />
          <Route path="/user" component={User} />
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="header">
      <h1>Featured</h1>
      <div className="img-gallery">
        <Gallery img="./images/art7.jpg" />
        <Gallery img="./images/art2.jpg" />
        <Gallery img="./images/art3.jpg" />
        <Gallery img="./images/art4.jpg" />
        <Gallery img="./images/art5.jpg" />
        <Gallery img="./images/art6.jpg" />
      </div>
    </div>
    <Artists />;
    <div className="header">
      <h1>Live Auctions</h1>
      <div className="img-gallery">
        <Auctions
          image="./images/art5.jpg"
          time="3hr 47min left"
          user="Bored Elon"
          product="Digital Art"
          avatar="./images/user2.jpg"
          price="1.07 BNB"
        />
        <Auctions
          image="./images/art8.jpg"
          time="3hr 47min left"
          user="Bored Elon"
          product="Digital Art"
          avatar="./images/user4.jpg"
          price="2.07 BNB"
        />
        <Auctions
          image="./images/art5.jpg"
          time="3hr 47min left"
          user="Bored Elon"
          product="Digital Art"
          avatar="./images/user3.jpg"
          price="3.07 BNB"
        />
        <Auctions
          image="./images/art8.jpg"
          time="3hr 47min left"
          user="Bored Elon"
          product="Digital Art"
          avatar="./images/user7.jpg"
          price="4.07 BNB"
        />
      </div>
      <div className="buttonContainer">
        <Button variant="success" className="loadMoreBtn">
          Load More
        </Button>{" "}
      </div>
    </div>
    ;
    <div className="header">
      <h1>Explore</h1>
      <div className="row1">
        <div className="img-gallery">
          <Auctions
            image="./images/art5.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user2.jpg"
            price="1.07 BNB"
          />
          <Auctions
            image="./images/art8.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user4.jpg"
            price="2.07 BNB"
          />
          <Auctions
            image="./images/art5.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user3.jpg"
            price="3.07 BNB"
          />
          <Auctions
            image="./images/art8.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user7.jpg"
            price="4.07 BNB"
          />
          <Auctions
            image="./images/art5.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user2.jpg"
            price="1.07 BNB"
          />
          <Auctions
            image="./images/art8.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user4.jpg"
            price="2.07 BNB"
          />
          <Auctions
            image="./images/art5.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user3.jpg"
            price="3.07 BNB"
          />
          <Auctions
            image="./images/art8.jpg"
            time="3hr 47min left"
            user="Bored Elon"
            product="Digital Art"
            avatar="./images/user7.jpg"
            price="4.07 BNB"
          />
        </div>
      </div>

      <div className="pagination">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
        </Pagination>
      </div>
    </div>
    ;
  </div>
);

export default App;
