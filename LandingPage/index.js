import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

const aboutBobers = [
  { name: "История и биология:", about: 'Узнайте о том, какие бобры, где обитают и какие ресурсы используют.' },
  { name: "Экологическая роль:", about: 'Погружение в то, как бобры влияют на водные и сухопутные экосистемы своим поведением.' },
  { name: "Поведение и социальная структура:", about: 'Описание образа жизни бобров, их строений и семейных отношений.' }
];

const list = ['Угрозы и вызовы', 'Программы охраны','Как вы можете помочь'];

const n=2;

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" />
      <h1>Добро пожаловать на сайт о бобрах!</h1>
    </header>
  );
}

function About(props) {
  return (
    <div className="about-section">
      <h2>{props.name}</h2>
      <ul>
        <li>{props.about}</li>
      </ul>
    </div>
  );
}

function Button(props) {

  return (
  <input className="button" type="button" value={props.val} />
  )
 }
 

 const Content = (props) => {
  const [visibleP, setVisibleCount] = React.useState(props.n);

  const showMore = () => {
    setVisibleCount(prev => prev + props.n);
  };

  const visibleItems = props.items.slice(0, visibleP);
  const getMoreItems = visibleP < props.items.length;

  return (
    <div>
      {visibleItems.map((item, index) => (
        <p key={index}>
          {item}
        </p>
      ))}
      {getMoreItems && <button onClick={showMore}>Показать еще</button>}
    </div>
  );
};


 

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="about-container">
        {aboutBobers.map((item, index) => (
          <About key={index} name={item.name} about={item.about} />
        ))}
      </div>
      <div className="button">
        <Button val="Окунуться в мир бобров" />
      </div>

      <div>
        <h1>Защита и сохранение</h1>
        <Content items={list} n={n} />
      </div>

      <footer className="footer">
        <p>© 2024 Сайт о бобрах</p>
      </footer>
    </div>
  );
}



   root.render(<LandingPage />)
   
   




