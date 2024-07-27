import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src="../../public/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#firstParallax">Home</a>
          </li>
          <li>
            <a href="#secondParallax">Tentang</a>
          </li>
          <li>
            <a href="#thirdParallax">Harga</a>
          </li>
          <li>
            <a href="#fourthParallax">Kontak</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header