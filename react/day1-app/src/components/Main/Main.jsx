import Card from "../Card/Card";
import FlexWrap from "../FlexWrap/FlexWrap";
import styles from "./Main.module.scss";

const Main = (props) => {
    
    let title = 'Gallery';
    const cards = [<Card/>,<Card/>,<Card/>];
    // const h2styles =  {color:"red", fontSize : "20px"};
    const flexStyles = { display: "flex", 
                        flexDirection: "row",
                         flexWrap: "wrap", };
  return (
    <main className= {styles.main}>
     {/* <section style={flexStyles}> */}
        <h2 className={styles.heading}>{title}</h2>
        {/* <h2 style={h2styles}>{title}</h2> */}
        {/* <h2 style={ {color:"red", fontSize: "20px"}}>{title}</h2> */}
        {/* <section className={styles.gallery}> */}
        <FlexWrap>
        {/* 이렇게 해놓으면, 다른 곳에서도 flex wrap을 필요할때마다 쓸수 있다.  */}
           {/* <Card />  */}
           {/* <Card heading="first card" content="some content goes here" hasButton={true}/>  */}
           <Card heading="first card"
                 content="some content goes here"
                 hasButton={true}/> 
           <Card heading="second card"
                 content="this text is completely different"
                 hasButton/> 
           <Card heading="third card"
                 content="this text is lolo"
                 hasButton={false}/>
           {cards}
        </FlexWrap>   
        {/* </section> */}
        
    </main>    
    //  </section> 
  );
}

export default Main