import { Outlet } from "react-router";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem /> 
      {fetchStatus.currentlyFetching === true ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
