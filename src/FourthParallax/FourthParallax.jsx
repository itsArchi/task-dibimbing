import "./FourthParallax.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function goto(link) {
  const urls = {
    chat: "../FourthParallax/FourthParallax.jsx",
  };

  window.location.href = urls[link];
}

const FourthParallax = () => {
  return (
    <div id="fourthParallax" className="fourth parallax">
      <div className="contact">
        <div className="contact-info">
          <h4>Temukan Mobilmu Sekarang</h4>
          <button className="button-explore" onClick={() => goto("chat")}>
            Cari Mobil Bekas
          </button>
          <h2 className="content-title">Hubungi kami di :</h2>
          <div className="contact-icons">
            <div className="contact-item">
              <FontAwesomeIcon icon={faFacebook} /> Mobilmurah ID
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faWhatsapp} /> +628123456789
            </div>
          </div>
          <p>
            Call center kami akan melayani anda 24/7 dengan senang hati melayani
            semua kebutuhan anda mencari mobil yang terbaik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthParallax;
