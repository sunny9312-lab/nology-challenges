import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <>
      <CardList>
        <Card cohortName="Uruguay" startDate="29/05/2023" />
        <Card cohortName="Venezuela" startDate="20/08/2023" />
        <Card cohortName="Wales" />
      </CardList>
    </>
  );
}

export default App;
