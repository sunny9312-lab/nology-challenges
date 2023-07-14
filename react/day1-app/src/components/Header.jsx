const Header = (props) => {
  console.log(props);
  const { heading, subheading, fruit} = props;
// 디스트럭쳐링 하는것 (위에것)
// 아니면 바로 따로 따로 받아줘도 된다. 
// const Header = ({ heading, subheading, fruit}) => {

  return (
    <header>
        {/* <h1>Hello World</h1> */}
        {/* <h1>{props.heading}</h1> */}
        {/* <h2>{props.subheading}</h2> */}
        {/* <p>My favourite fruit is {props.fruit}</p> */}
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <p>My hatest fruit is {fruit}</p>
    </header>
  );
};

export default Header;