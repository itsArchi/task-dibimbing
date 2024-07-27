import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // pastikan Anda mengimpor CSS Swiper
import "./SecondParallax.css";

function goto(link) {
  const urls = {
    toyota: "https://toyota.astra.co.id/",
    daihatsu: "https://daihatsu.co.id/",
    hyundai: "https://hyundai.com/",
    mitsubishi: "https://mitsubishi-motors.co.id/",
    suzuki: "https://suzuki.co.id/",
    mazda: "https://mazda.co.id/",
    find: "#thirdParallax",
    chat: "#fourthParallax",
  };

  window.location.href = urls[link];
}

const SecondParallax = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      speed: 600,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    });
  }, []);

  return (
    <div id="secondParallax" className="second parallax">
      <div className="content">
        <div>
          <h2 className="content-title">Tentang MOBILMURAH.ID</h2>
          <p>
            Sejak tadi pagi dibuat dan dikembangkan, MOBILMURAH.ID merupakan
            perusahaan penjualan mobil bekas. Dengan berbagai macam merk dan
            tipe mobil, kami akan membantu anda menemukan mobil yang sesuai
            dengan kebutuhan anda.
            <br />
            <br />
            MOBILMURAH.ID menyediakan mobil bekas terbaik dengan harga
            terjangkau. Eksplorasi dan temukan mobil terbaikmu di MOBILMURAH.ID.
          </p>
          <button className="button-explore" onClick={() => goto("find")}>
            Cari Mobil Bekas
          </button>
        </div>
        <div className="carousel">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-slide--one">
                <div>
                  <h2>Toyota</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("toyota")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--two">
                <div>
                  <h2>Daihatsu</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("daihatsu")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--three">
                <div>
                  <h2>Hyundai</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("hyundai")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--four">
                <div>
                  <h2>Mitsubishi</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("mitsubishi")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--five">
                <div>
                  <h2>Suzuki</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("suzuki")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
              <div className="swiper-slide swiper-slide--six">
                <div>
                  <h2>Mazda</h2>
                  <button
                    className="swiper-button"
                    onClick={() => goto("mazda")}
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondParallax;
