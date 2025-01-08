//на место props придет объект с переданными в родителе
//данными по соответствующим ключам
import MyButton from "../myButton/MyButton";
function UserCard(props) 
{
//


    // функция обработчик 
    const handleClick = () => {
        alert (`Hello, ${props.name}!`)
    }


    // console.log(props)
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age} </p>
      {/* <MyButton text={"Choose hero"+ props.name}/> */}
      <MyButton func={handleClick} text={`Choose ${props.name}`}/>
    </div>
  )
}

export default UserCard;
