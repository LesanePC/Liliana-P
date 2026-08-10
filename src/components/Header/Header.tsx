import { useState } from 'react';
import styles from './Header.module.scss';

const navigation = [
  {
    number: '01',
    label: 'ОБО МНЕ',
    href: '#about',
  },
  {
    number: '02',
    label: 'МОИ РАБОТЫ',
    href: '#works',
  },
  {
    number: '03',
    label: 'КАК СВЯЗАТЬСЯ',
    href: '#contacts',
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a
        href="#about"
        className={styles.logo}
        onClick={handleLinkClick}
      >
        <span className={styles.name}>ЛИЛИАНА</span>

        <span className={styles.profession}>
          ГРАФИЧЕСКИЙ ДИЗАЙНЕР · ХУДОЖНИК
        </span>
      </a>

      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isMenuOpen}
      >
        <span>{isMenuOpen ? '×' : '+'}</span>
      </button>

      <nav
        className={`${styles.navigation} ${
          isMenuOpen ? styles.open : ''
        }`}
      >
        {navigation.map((item) => (
          <a
            key={item.number}
            href={item.href}
            className={styles.link}
            onClick={handleLinkClick}
          >
            <span className={styles.number}>{item.number}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};