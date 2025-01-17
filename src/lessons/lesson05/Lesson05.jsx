import { fellowship } from "./fellowship";
//import "./lesson05.css";
import HeroCard from "../../components/heroCard/HeroCard.jsx";

function Lesson05() {
  console.log(fellowship);
//console.log(fellowship[1].age)
//console.log(fellowship[1].weapons)

  return (
    <div className="container">
      <h2>React map() components 🧝🏼‍♀️ 🧚🏻‍♀️</h2>
      <div>
        {fellowship.map((hero, index) => (
// key - это уникальное значение которое просит передать react в 
//итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных 
//операциях (сортировка / удаление)

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


// return (
//   <div>
//     <h2>React map() components 🧝‍♀️</h2>
//     {fellowship.map((hero, index) => (
//         <div className="heroCard" key={index}>
//           <p>Hero: {hero.name}</p>
//           <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
//           <p>{hero.age} years old</p>
//         </div>
//     ))}

//   </div>
// );
// }
