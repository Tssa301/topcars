import { ReactComponent as CarHeader } from 'assets/images/car-header.svg';
import ButtonHome from 'components/Button/buttonhome';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>The perfect car for you!</h1>
          <p>
            Discover our cars and take another step towards realizing your dream.
          </p>
        </div>
        <div className="home-image-container">
          <CarHeader />
        </div>
      </div>
      <div className="home-button-container base-card">
        <Link to="/products">
        <ButtonHome />
        </Link>
        <div className="button-content-container">
          <p>Start browsing now</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
