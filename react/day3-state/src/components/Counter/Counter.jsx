import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onPlusClick = (event) => {
    setCount(count + 1)
  };

  const onMinusClick = () => {
    setCount(count - 1)
  };

  console.log('Rendered the counter component');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={onPlusClick}>+</button> 
    </div>
  );
};
//    <button onClick={onPlusClick()}>+</button>  하면 않된다. function()지옥에 빠진다. 콜하고 또 콜하고.. 여기서는 한번만 렌더링 하면 되니까 괄호가 없어야 한다. 
//  <button onClick={() => setCount(count - 1)}>-</button>   이렇게 직접 function을 써주던가.. 그렇지만, 이런 경우에도 에러는 난다. 
//<button onClick={setCount(count - 1)}>-</button>  직접 setCount만 쓰면 않된다. 함수를 쓰고 그안에 써줘야 한다? 
export default Counter;
