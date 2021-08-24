import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DevIcon from "devicon-react-svg";
import { FaGithub } from "react-icons/fa";
import Wpgym from "./Projects/wpgym";
import Books from "./Projects/books";
import Coins from "./Projects/cyber_coins";
import Money from "./Projects/money_transfer";
import BeerBuddies from "./Projects/beer_buddies";
import Transco from "./Projects/transco_brisbane";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const devIconStyle = {
    width: "60px",
    height: "60px",
    margin: ".4em",
  };
  return (
    <div className="App">
      <Container>
        <Row style={{ paddingTop: "10%" }}>
          <Col md="6">
            <img id="profilePic" />
            <h2>Matthew Hansen</h2>
            <p style={{ marginBottom: "3em" }}>emailformatthew@email.com</p>
          </Col>
          <Col md="6">
            <h3 className="divider" id="about">
              <span>About</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              similique eaque repellat accusamus delectus nemo aperiam explicabo
              quo dolorem mollitia fugiat enim provident nihil vitae qui omnis
              voluptas, fuga ducimus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae similique eaque repellat accusamus
              delectus nemo aperiam explicabo quo dolorem mollitia fugiat enim
              provident nihil vitae qui omnis voluptas, fuga ducimus.
              adipisicing elit. Beatae similique eaque repellat accusamus
              delectus nemo aperiam explicabo quo dolorem mollitia fugiat enim
              provident nihil vitae qui omnis voluptas, fuga ducimus.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="divider">
              <span>Skills</span>
            </h3>
            <div>
              <DevIcon icon="html5" style={devIconStyle} fill="#F06529" />
              <DevIcon icon="css3" style={devIconStyle} fill="#264de4" />
              <DevIcon icon="javascript" style={devIconStyle} fill="#F0DB4F" />
              <DevIcon icon="bootstrap" style={devIconStyle} fill="#602C50" />
              <DevIcon icon="react" style={devIconStyle} fill="#61DBFB" />
              <DevIcon icon="nodejs" style={devIconStyle} fill="#3C873A" />
              <DevIcon icon="svelte" style={devIconStyle} fill="#aa1e1e" />
              <DevIcon icon="mysql" style={devIconStyle} fill="#00758F" />
              <DevIcon icon="php" style={devIconStyle} fill="#8993be" />
              <DevIcon icon="wordpress" style={devIconStyle} fill="#00749C" />
              <DevIcon icon="drupal" style={devIconStyle} fill="#0077c0" />
              <DevIcon icon="heroku" style={devIconStyle} fill="purple" />
              <DevIcon icon="jest" style={devIconStyle} fill="" />
              <DevIcon icon="github" style={devIconStyle} fill="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "2em" }}>
            <h3 className="divider">
              <span>Projects</span>
            </h3>
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>Cyber Coins</h3>
            </u>
            <p>
              Cyber Coins is a front-end only application that uses fetch
              requests to retrieve data from a cryptocurrency api supplied by{" "}
              <a href="https://www.coingecko.com/en/api">CoinGecko</a>. This
              application has a refresh option and a searchbar that filters
              results. Mobile first apllication.
            </p>
            <p>
              Technologies: Svelte, Tailwind CSS.{"   "}
              <a href="https://github.com/King-cobra711/CyberCoins">
                <FaGithub className="gitlink" />
              </a>
            </p>
            <p className="mobileGit">
              <a href="https://github.com/King-cobra711/CyberCoins">
                GitHub <FaGithub className="gitlinkmob" />
              </a>
            </p>
          </Col>
          <Col className="pics" md="6">
            <Coins />
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>Money Transfer</h3>
            </u>
            <p>
              Money Transfer is an application that acts as two bank accounts
              and enables the user to move/tranfer money between accounts.
              Nodejs is used for the backend and all calculations are done there
              to simulate a database. Both front and backend are validated.
              Transaction history is also available.
            </p>
            <p>
              Technologies: React, Nodejs, Bootstrap.{"   "}
              <a href="https://github.com/King-cobra711/MoneyMover">
                <FaGithub className="gitlink" />
              </a>
            </p>
            <p className="mobileGit">
              <a href="https://github.com/King-cobra711/MoneyMover">
                GitHub <FaGithub className="gitlinkmob" />
              </a>
            </p>
          </Col>
          <Col md="6">
            <Money />
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>Beer Buddies</h3>
            </u>
            <p>
              Beer Buddies is a moble only memory card game. It's a fullstack
              application with front and backend validation. Users are able to
              level up and customise their bio. Some users have admin status
              which allowes them extra privilages.
            </p>
            <p>
              Technologies: React, Nodejs, MaterialUI.{"   "}
              <a href="https://github.com/King-cobra711/Beer_Buddies_Fullstack">
                <FaGithub className="gitlink" />
              </a>
            </p>
            <p className="mobileGit">
              <a href="https://github.com/King-cobra711/Beer_Buddies_Fullstack">
                GitHub <FaGithub className="gitlinkmob" />
              </a>
            </p>
          </Col>
          <Col md="6">
            <BeerBuddies />
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>Gym Franchise</h3>
            </u>
            <p>
              This was an assessment piece for tafe that required me to make a
              website for a gym franchise. The site has a main page, links to 3
              local gyms and trainers for that gym and also includes a contact
              form. This was my first ever attempt at a wordpress site.
            </p>
            <p>Technologies: Wordpress.</p>
          </Col>
          <Col md="6">
            <Wpgym />
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>TranscoBrisabne</h3>
            </u>
            <p>
              This was an assessment piece for tafe that required me to make a
              website for a shipping company. Wordpress was used to make this
              website along with a custom form (JS) that when filled out
              genereted cost estimate for the customer. This quotation form was
              an intergral part of the site and saved the client from taking
              calls and calculating themselves.
            </p>
            <p>
              Technologies: Wordpress, Javascript.{"   "}
              <a href="https://github.com/King-cobra711/TranscoBrisbane">
                <FaGithub className="gitlink" />
              </a>
            </p>
            <p className="mobileGit">
              <a href="https://github.com/King-cobra711/TranscoBrisbane">
                GitHub <FaGithub className="gitlinkmob" />
              </a>
            </p>
          </Col>
          <Col md="6">
            <Transco />
          </Col>
        </Row>
        <Row className="proj">
          <Col className="desc" md="6">
            <u>
              <h3>Books Assignment</h3>
            </u>
            <p>
              This was an assesment piece for tafe that required me to create a
              site that cataloged a list of books based on their popularity.
              Book information was stored in database. Php was used as a backend
              language. Site allowed for different user login and privilages.
              This was one of my first attempts at a website.
            </p>
            <p>Technologies: Html5, CSS, PHP, MAMP, SQL</p>
          </Col>
          <Col md="6">
            <Books />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
