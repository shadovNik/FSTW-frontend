import { useEffect, useRef } from 'react';
import styles from './NavigationMenu.module.css';

export default function NavigationMenu({ onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className={styles.menu} ref={menuRef}>
      <ul className={styles['menu-links']}>
        <li>
          <a href="/" className={styles['menu-link']} onClick={onClose}>
            Главная
          </a>
        </li>
        <li>
          <a href="" className={styles['menu-link']} onClick={onClose}>
            Каталог стажировок
          </a>
        </li>
        <li>
          <a href="" className={styles['menu-link']} onClick={onClose}>
            Чат-бот
          </a>
        </li>
        <li>
          <a href="" className={styles['menu-link']} onClick={onClose}>
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}
