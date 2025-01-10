import "react";

import style from "./homework01.module.css";

function Homework01() {
  return (
    <>
       <h1>Hometask01</h1>
       <br />
      <div className={style.Homework01}>
     
        <div className={style.h2_hello}>
          <h2> Привет! </h2>
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
