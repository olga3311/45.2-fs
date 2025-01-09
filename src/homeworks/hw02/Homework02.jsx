import React from "react";
import ProfileCard from "../../components/profileCard/ProfileCard";
import "./Homework02.css";

function Homework02() {
  const redCat = {
    name: "Barsik",
    surname: "Red",
    age: "3",
    occupation: "Hunter",
    hobby: "Sleeping",
    image:
      "https://cdn.theatlantic.com/thumbor/viW9N1IQLbCrJ0HMtPRvXPXShkU=/0x131:2555x1568/976x549/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
  };

  const blackCat = {
    name: "Marsel",
    surname: "Black",
    age: "5",
    occupation: "Artist",
    hobby: "Swimming",
    image:
      "https://images.freeimages.com/images/large-previews/320/black-cat-on-cushion-0410-5698077.jpg?fmt=webp&h=350 ",
  };

  const whiteCat = {
    name: "Snowflake",
    surname: "White",
    age: "2",
    occupation: "Dancer",
    hobby: "Reading",
    image:
      "https://images.freeimages.com/images/large-previews/974/cat-1192444.jpg?fmt=webp&h=350 ",
  };

  function showCat(obj) {
    if (obj.name) {
      return (
        <div className="cat-card">
          <p>
            <span> Name:</span> {obj.name}
          </p>
          <p>
            <span> Surname:</span> {obj.surname}
          </p>
          <img src={obj.image} alt={obj.name} style={{ maxWidth: "300px" }} />
          <p>
            <span> Age:</span> {obj.age}
          </p>
          <p>
            <span> Occupation:</span> {obj.occupation}
          </p>
          <p>
            <span>Hobby:</span> {obj.hobby}
          </p>
        </div>
      );
    }
    return <div className="error-message"> Not valid data 😵</div>;
  }

  return (
    <div className="homework-container">
      <h1>Cats</h1>

       {showCat(redCat)}
      <br />
      <br />
      {showCat(blackCat)}
      <br />
      <br />
       {showCat(whiteCat)}
    </div>
  );
}

export default Homework02;
