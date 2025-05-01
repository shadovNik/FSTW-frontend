import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ textAlign: 'center', padding: '50px', fontFamily: 'Exo 2', color: 'white' }}>
        <h1>404 - Страница не найдена</h1>
        <p>
          Попробуйте вернуться на <Link to="/main">главную страницу</Link>.
        </p>
      </main>
    </>
  );
}
