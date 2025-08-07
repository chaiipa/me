import React from "react";
import "./App.css";

const portfolio = [
  {
    title: "Личный сайт",
    desc: "Мой персональный сайт на React с плавными анимациями.",
    link: "https://chaiipa.github.io/me"
  },
  {
    title: "GitHub",
    desc: "Все мои проекты и код.",
    link: "https://github.com/chaiipa"
  }
];

function App() {
  return (
    <div>
      <div className="header">Портфолио chaiipa</div>
      {portfolio.map((item, idx) => (
        <div className="card" style={{ animationDelay: `${0.8 + idx * 0.4}s` }} key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">Смотреть</a>
        </div>
      ))}
    </div>
  );
}

export default App;