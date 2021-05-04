import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg";
import facebook from "./images/logo-facebook.svg";
import instagram from "./images/logo-instagram.svg";
import twitter from "./images/logo-twitter.svg";
import './App.css';

function App() {

  return (
    <div className="App">

<header>
      <img src={logo} alt="logo"/>
    </header>
    <main>
      <div class="main mockup">
        <img src={mockup} alt="mockup"/>
      </div>
      <div class="main writeup">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </main>
    <footer>
      <div class="icon">
        <div>
          <img
            class="facebook"
            src={facebook}
            alt="facebook"
            width="40px"
            height="40px"
          />
        </div>
        <div>
          <img
            class="twitter"
            src={twitter}
            alt="twitter"
            width="40px"
            height="40px"
          />
        </div>
        <div>
          <img
            class="instagram"
            src={instagram}
            alt="instagram"
            width="40px"
            height="40px"
          />
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
