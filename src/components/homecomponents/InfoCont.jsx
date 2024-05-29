import { useNavigate } from 'react-router-dom';
import "../../css/homecss/home.css";

const InfoCont = () => {
  const navigate = useNavigate();

  function handleBookNow() {
    // alert("Booked");
    navigate('/transportmodespage');  // Navigate to Transport Modes page
  }

  return (
    <section className="info-container flex">
      <div className="sub-info-container flex">
        <div className="info">
          <span id="typed"></span>
          <h1>Let Transitease be your passport to everywhere!</h1>
          <p>Secure your ride, climb in, and let's wander!</p>
          <div className="inputWithIcon">
            <input type="text" placeholder="Current Location" required />
            <ion-icon name="location"></ion-icon>
          </div>
          <div className="inputWithIcon">
            <input type="text" placeholder="Destination" required />
            <ion-icon name="navigate"></ion-icon>
          </div>
          <div className="book-div">
            <button className="book-now" onClick={handleBookNow}>
              Okay
            </button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://img.freepik.com/premium-vector/world-globe-road-tape_648765-6769.jpg?w=740"
            alt="crossroads"
          />
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default InfoCont;
