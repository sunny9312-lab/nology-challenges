import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, content }) => {
  const [contentShown, setcontentShown] = useState(false); //여기에서 false는 boolean값이라서 따옴표 없이 작성했다.
  const [isOutlined, setIsOutlined] = useState(true);

  const toggleContent = () => {
    setcontentShown(!contentShown);
  };

  const toggleOutline = () => {
    setIsOutlined(!isOutlined);
  };

  const cardClasses = isOutlined
    ? [styles.card, styles.outlined]
    : [styles.card];

  return (
    <div className={cardClasses.join(" ")}>
      {/* 위에 조건에 따라, styles.card 가 올지 styles.outlined가 함께올지결정  */}
      <h2>{title}</h2>
      <button onClick={toggleOutline}>
        {isOutlined ? "Remove " : "Add "}Outline
      </button>
      <button onClick={toggleContent}>{contentShown ? "Hide" : "Show"}</button>
      {/* <button onClick={() => toggleContent()}>{contentShown ? "Hide":"Show"}</button> */}
      {contentShown && <p>{content}</p>}
    </div>
  );
};

export default Card;
