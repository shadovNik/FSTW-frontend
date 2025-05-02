import { Link } from 'react-router-dom';
import './PersonalCabinet.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { loadData } from './GetData';

export default function PersonalCabinet() {
  loadData();

  return (
    <>
      <Header
        linksContent={
          <>
            <button type='button' className='logoutButton'>
              Выход
            </button>
          </>
        }
      />
      <main className='main pers-cabinet'>
        <div className='main-content pers-cabinet'>
          <div className='pers-info'>
            <div className='person'>
              <div className='person-info'>
                <p className='person-name' id='FLname'>Бумага Владислав</p>
                <p className='person-name' id='middleName'>Папкович</p>
              </div>
            </div>
            <div className='person-about'>
              <div className='person-about item'>
                <p className='item-name'>Email</p>
                <p className='item-description'>abc@def.gh</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>Телефон</p>
                <p className='item-description' id='phoneNumber'>+79876543210</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>Дата рождения</p>
                <p className='item-description' id='dateOfBirth'>01.01.1991</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>Пол</p>
                <p className='item-description' id='gender'>Мужской</p>
              </div>
            </div>
            <div className='person-about'>
              <div className='person-about item'>
                <p className='item-name'>VK</p>
                <p className='item-description' id='vk'>Ссылка на вк</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>Telegram</p>
                <p className='item-description' id='telegram'>@kikiki</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>GitHub</p>
                <p className='item-description' id='gitHub'>Ссылка на гит</p>
              </div>
              <div className='person-about item'>
                <p className='item-name'>LinkedIn</p>
                <p className='item-description' id='linkedin'>Ссылка на линку</p>
              </div>
            </div>
            <div className='skills'>
              <p className='head skills'>Навыки</p>
              <div className='skillsBlock'>
                <p className='skillsInfo' id='skills'>Тест хиххихихихи</p>
              </div>
            </div>
          </div>

          <div className='resumes'>
            <p className='head resumes'>Мои резюме</p>
            <div className='resumes-list'>
              {/* <p className='empty-list'>К сожалению, ваш список еще пуст..</p> */}
              <div className='resume full'>
                <p className='resume-header'>IT-специалист</p>
                <a  className='resume-href'>
                  <p className='resume-more'>Подробнее</p>
                </a>
              </div>
            </div>
            <div className='resumes-buttons'>
              <button type='button' className='resume-button create'>Создать резюме</button>
              <button type='button' className='resume-button upload'>Загрузить резюме</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
