import "../heroCard/HeroCard.css";
function HeroCard({ name, isDark, age, weapons, image}) {
    return (
      <div className={`heroCard ${isDark ? "villian" : "hero"}`}>
          <p>Hero: {name}</p>
            <br />
            <p>{isDark ? "Villian 🔥" : "Hero ✨"}</p>
            <br />
            <p>{age} years old</p>
            <br />
            <p> {weapons.join() != '' ? "Weapons: " + weapons.join(', ') : "" }</p>
            <p>
              <img
                src={image}
                width="100%"
                height="200px"
                alt={image}
              />
            </p>
      </div>
    );
  }
  
  export default HeroCard;