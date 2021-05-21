import "./App.css";
import ListaComics from "./components/listaComics/listaComics";
import Header from "./components/header/header";

export default function App() {
  return (
    <div>
      <Header />
      <ListaComics />
    </div>
  );
}