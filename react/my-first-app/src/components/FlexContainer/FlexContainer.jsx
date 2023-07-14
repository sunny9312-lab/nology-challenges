// FlexContainer/FlexContainer.jsx
import s from "./FlexContainer.module.scss";

const FlexContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default FlexContainer;