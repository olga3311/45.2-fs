import "react";

import style from "./homework01.module.css";

function Homework01() {
  return (
    <>
      <div className={style.Homework01}>
        <div className={style.h1_hello}>
          <h1> Привет! </h1>
          <h2> Меня зовут Ольга </h2>
          <p>Я живу в Мюнхене и люблю путешествовать</p>
        </div>
      </div>
      <br />

      <img
        src=" https://i0.wp.com/www.german-way.com/wp-content/uploads/2013/03/Mun-Frauenk800.jpg?ssl=1"
        alt="" 
      />
    </>
  );
}

export default Homework01;
