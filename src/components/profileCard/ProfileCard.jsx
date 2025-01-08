function ProfileCard(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>Name: {props.name} </p>
      <p>Surname: {props.surname}</p>
      <p>Age: {props.age} </p>
      <p>Occupation: {props.occupation}</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
}

export default ProfileCard;
