import Footer from "./components/Footer";
import  Header from  "./components/Header";
import  Main   from "./components/Main/Main";

const App = ()=> {
  
  return(
    <div>
      <Header heading="Hello"
              anotherProp="banana" 
              subheading="goodbye" 
              fruit="orange"
              faveNumber={10} 
              isBig={true} /> 
      <Main />
      <Footer />
    </div> 
      
    
  );
}

export default App;
