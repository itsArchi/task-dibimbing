import './ThirdParallax.css';

import stargazerImage from '../assets/car-list/stargazer.png';
import avanzaImage from '../assets/car-list/avanza.png';
import xl7Image from '../assets/car-list/xl7.png';
import cx5Image from '../assets/car-list/cx5.png';
import zenixImage from '../assets/car-list/zenix.png';
import xeniaImage from '../assets/car-list/xenia.png';
import ertigaImage from '../assets/car-list/ertiga.png';
import calyaImage from '../assets/car-list/calya.png';
import cretaImage from '../assets/car-list/creta.png';
import sigraImage from '../assets/car-list/sigra.png';

function goto(link) {
    const urls = {
      find: "#thirdParallax",
      chat: "#fourthParallax",
    };
  
    window.location.href = urls[link];
  }
  
const ThirdParallax = () => {
  return (
    <div id="thirdParallax" className="third parallax">
      <div className="container-price">
        <div className="pricing-tag">Stock mobil saat ini di MOBILMURAH.ID</div>
        <div className="car-list">
          <div className="car-item">
            <img src={stargazerImage} alt="stargazer" />
            <h3>Stargazer</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 232.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={avanzaImage} alt="avanza" />
            <h3>Avanza</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 150.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={xl7Image} alt="xl7" />
            <h3>XL7</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 190.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={cx5Image} alt="cx5" />
            <h3>CX5</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 320.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={zenixImage} alt="zenix" />
            <h3>Innova Zenix</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 458.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={xeniaImage} alt="xenia" />
            <h3>Xenia</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 131.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={ertigaImage} alt="ertiga" />
            <h3>Ertiga</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 145.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={calyaImage} alt="calya" />
            <h3>Calya</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 110.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={cretaImage} alt="creta" />
            <h3>Creta</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 210.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
          <div className="car-item">
            <img src={sigraImage} alt="sigra" />
            <h3>Sigra</h3>
            <p>Harga Mulai</p>
            <p className="price">Rp. 120.000.000</p>
            <button onClick={() => goto("chat")}>Pesan Sekarang</button>
          </div>
        </div>
        <h2>dan Masih Banyak yang Lainnya</h2>
        <button onClick={() => goto("chat")}>Pesan Sekarang</button>
      </div>
    </div>
  );
};

export default ThirdParallax;
