import './FirstParallax.css';
import rentCarImage from '../assets/rentcar.png';

function goto(link) {
    const urls = {
      chat: "../FourthParallax/FourthParallax.jsx", // untuk ke page 4 (contact)
    };
  
    window.location.href = urls[link];
  }
const FirstParallax = () => {
  return (
    <div id="firstParallax" className="first parallax">
      <div className="main-page">
        <div className="main-image">
          <img src={rentCarImage} alt="rentcar-background" className="main-image" />
        </div>
        <div className="main-banner">
          <h2>MOBILMURAH.ID</h2>
          <h4>est TADI PAGI</h4>
          <p className="main-banner-text">
            Tempat mobil bekas dengan kualitas terbaik dan harga yang terjangkau.
            MOBILMURHA.ID memiliki misi untuk membawa industri mobil bekas ke era digital
            dengan membangun dan mengangkat pengalaman dalam menjual dan membeli mobil.
          </p>
          <p className="main-banner-text-bottom">Cari mobil sekarang!</p>
          <div className="button-join">
            <button onClick={() => goto('chat')} className="logo-button">
              <i className="fa-solid fa-phone"></i>Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstParallax;
