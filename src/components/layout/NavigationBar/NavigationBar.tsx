import './style.scss';
import { navigationLinks } from './links';

export function NavigationBar() {

  return (
    <nav className={`navigation-bar text-xs md:text-base lg:text-xl border-b-2 crystalScrolled backdrop-blur-xs box-shadow border-b-[#87878733]`}>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
