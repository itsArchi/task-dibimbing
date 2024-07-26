import './FourthParallax.css';

function goto(link) {
    const urls = {
      chat: "../FourthParallax/FourthParallax.jsx", // untuk ke page 4 (contact)
    };
  
    window.location.href = urls[link];
  }
const FourthParallax = () => {
  return (
    <div id="fourthParallax" className="fourth parallax">
      <div className="contact">
        <div className="contact-info">
          <h4>Temukan Mobilmu Sekarang</h4>
          <button className="button-explore" onClick={() => goto('chat')}>
            Cari Mobil Bekas
          </button>
          <h2 className="content-title">Hubungi kami di :</h2>
          <div>
            <i className="fa-brands fa-facebook" style={{color: "#000000"}}>Mobilmurah ID</i>
            <i className="fa-brands fa-whatsapp" style={{color: "#000000"}}>+628123456789</i>
            <p>
              Call center kami akan melayani anda 24/7 dengan senang hati
              melayani semua kebutuhan anda mencari mobil yang terbaik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthParallax;
