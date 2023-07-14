import React from "react";
import { useState } from "react";

const SearchBar = ({setFilterValue}) => {
    // const SearchBar = ({handleSubmit}) => {  조금더 지네릭하게
  const [searchValue, setSearchValue] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    //리프레쉬 되어도 값 없어지지 않게
    console.log("Form submitted");
    console.log("search value was : " + searchValue);
    // handleSubmit(searchValue);  조금더 지네릭하게 이름지어준다
    setFilterValue(searchValue);
    setSearchValue('');

  };

  const onInputChange = (event) => {
    setSearchValue(event.target.value);
    console.log("event.target.value", event.target.value);
  };

  return (
    <form onSubmit={formSubmit}>
      {/* <form onSubmit={(e) => e.preventDefault()}> */}
      <input type="text" value={searchValue} onChange={onInputChange} />
      <button>Search</button>
      {/* <button onClick={(e) => e.preventDefault()}>Search</button> */}
    </form>
  );
};
//<button onClick={(e) => e.preventDefault()}>Search</button> 이렇게 해도 되고,
//<form onSubmit={(e) => e.preventDefault()}> 이렇게 해도 되고..
//여기에서 처럼, formSubmit함수를 만들어서 써도 되고..
//화면에서 refresh 되지 않고, state값 가지고 있으려고.. 카운터 숫자 막 올리고, 검색창에 글자 입력하면 저절로 화면이 리프레쉬가 됨. 그래서 그것 막으려고..event preventDefault함.
export default SearchBar;
