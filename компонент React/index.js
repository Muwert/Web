import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import list from './data.js';

const n=5;

const root = ReactDOM.createRoot(document.getElementById('root'));


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


const App = () => {
  return (
    <div>
      <h1>Список абзацев</h1>
      <Content items={list} n={n} />
    </div>
  );
};

root.render(<App />)
 
