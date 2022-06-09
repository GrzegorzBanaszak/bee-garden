import "./App.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ApiaryList from "./components/ApiaryList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [apiarys, setApiarys] = useState([]);

  useEffect(() => {
    const getAllApiarys = async () => {
      const res = await axios.get("/api/apiary");
      if (res.data) {
        setApiarys(res.data);
      }
    };

    getAllApiarys();
  }, []);
  return (
    <div className="app__container">
      <header className="app__header">
        <h2>Bee garden</h2> <AiOutlinePlusCircle />
      </header>
      <main className="app__main">
        <ApiaryList apiarys={apiarys} />
      </main>
    </div>
  );
}

export default App;
