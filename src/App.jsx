import "./App.scss";
import Card from "./componets/card/Card";
import Futer from "./componets/futer/Futer";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import Prodacts from "./componets/prodact/Prodacts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Prodacts />
      <Card />
      <Futer />
    </>
  );
}

export default App;
