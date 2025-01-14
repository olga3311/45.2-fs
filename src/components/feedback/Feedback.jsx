import "./Feedback.css";
import "../myButton/MyButton";
import { useState } from "react";
import MyButton from "../myButton/MyButton";

function Feedback() {
  const [like, setLike] = useState(0);
  const handleLikes = () => setLike(like + 1);

  const [dislike, setDislike] = useState(0);
  const handleDislikes = () => setDislike(dislike - 1);


 const [result, setResult] = useState(0);
  const handleResult = () => {setLike(0);
    setDislike(0);
  }


  return (
    <div className="feedback">
      <h1>Feedback</h1>
      <br />
       <div className="feedback-buttons">
      <div className="like">
        <span className="likes-count">{like}</span>
        <MyButton text="Like" func={handleLikes} />
      </div>

      <div className="reset">
      <MyButton text="Reset" func={handleResult} />
      </div>

      <div className="dislike">
        <span className="dislikes-count">{dislike}</span>
        <MyButton text="Dislike" func={handleDislikes} />
      </div>
      </div>
    </div>
  );
}

export default Feedback;
