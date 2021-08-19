import "./index.css";
import { Link } from "react-router-dom";
const Aboutpage = () => {
  return (
    <div className="about">
      <div className="about__info">
        <p>Tv Show Search App - React</p>
        <div>
          <p>Content:</p>
          <ul>
            <li>Axios AJAX Request</li>
            <li>
              TVMAZE API <a href="https://www.tvmaze.com/api"></a>
              <Link>TVMAZE API</Link>
            </li>
            <li>React Router</li>
            <li>React Context API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
