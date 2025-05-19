import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.css';
import { AuthContext } from '../../context/AuthContext';

export default function NavigationMenu({ onClose }) {
  const menuRef = useRef(null);
  const { isAuth } = useContext(AuthContext);

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
          <Link to="/main" className={styles['menu-link']} onClick={onClose}>
            Главная
          </Link>
        </li>
        <li>
          <Link to="" className={styles['menu-link']} onClick={onClose}>
            Каталог стажировок
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to="" className={styles['menu-link']} onClick={onClose}>
              Чат-бот
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
