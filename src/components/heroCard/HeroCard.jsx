import "../heroCard/HeroCard.css";
function HeroCard({ name, isDark, age, weapons, image}) {
    return (
      <div className={`heroCard ${isDark ? "villian" : "hero"}`}>
          <p>Hero: {name}</p>
             <img
                src={image}
               
                height={200}
                alt={image}
              />
            <p>{isDark ? "Villian 🔥" : "Hero ✨"}</p>
            <p>{age} years old</p>
            <p> {weapons.join() != '' ? "Weapons: " + weapons.join(', ') : "" }</p>
            {/* { hero.weapons[0] ? 
             <p> {hero.weapons.map(el => " " +el )}</p>
            ) : <p>No weapons</p>
            } */}
            
            
      </div>
    );
  }
  
  export default HeroCard;