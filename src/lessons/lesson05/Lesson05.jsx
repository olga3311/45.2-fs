import { fellowship } from "./fellowship";
//import "./lesson05.css";
import HeroCard from "../../components/heroCard/HeroCard.jsx";

function Lesson05() {
  console.log(fellowship);

  return (
    <div className="container">
      <h2>React map() components 🧝🏼‍♀️ 🧚🏻‍♀️</h2>
      <div>
        {fellowship.map((hero, index) => (
          <HeroCard
            key={index}
            name={hero.name}
            isDark={hero.isDark}
            age={hero.age}
            weapons={hero.weapons}
            image={hero.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Lesson05;
