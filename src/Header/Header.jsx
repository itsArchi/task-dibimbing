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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Tentang</a>
          </li>
          <li>
            <a href="">Harga</a>
          </li>
          <li>
            <a href="../Contact/Contact.jsx">Kontak</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header