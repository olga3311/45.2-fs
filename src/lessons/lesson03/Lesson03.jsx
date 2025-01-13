import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
  return (
    <div>
      <h2>React Props children 👨‍👩‍👦 </h2>
      <p>Props используются для передачи данных от родительских компонентов дочерним компонентам. 
        Это один из основных механизмов передачи данных в React</p>


{/* <MyButton/> */}
<UserCard name={'Bilbo '} age={45} lastname={'Baggins'}/>
<UserCard name={'Gendalf'} age={2000} lastname={'White'}/>
<UserCard name={'Gimli'} age={90} lastname={'Dwarfson'}/>
    </div>
  )
}

export default Lesson03;
