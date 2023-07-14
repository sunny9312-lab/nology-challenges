import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = 
  let posts = '강남 고기 맛집';
  let styleSelec = { color : 'blue', fontSize : '30px'};

  function 함수(){
    return 100
  }
  return (
    
    <div className="App">
      <div className="black-nav">
        <div style = { styleSelec }>개발 blog</div>
        <div style = { {color:'blue', fontSize : '30px' }}>개발 blog</div>
        {/* <div className={ posts }>개발 blog</div> */}
      </div>
      {/* <img src = {logo} /> */}
      <h4> {posts }</h4>
      <h4> {함수() }</h4>


    </div>
  );
}

export default App;
