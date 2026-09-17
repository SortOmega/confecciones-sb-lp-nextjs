import './style.scss';

export function NavigationBar() {

  return (
    <nav className={`navigation-bar text-xs md:text-base lg:text-xl border-b-2 crystalScrolled backdrop-blur-xs box-shadow border-b-[#87878733]`}>
      <ul>
        <li>
          <a href="#hero-section">Home</a>
        </li>
        <li>
          <a href="#value-proposition-section">Servicios</a>
        </li>
        {/* <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}
