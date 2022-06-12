import "./apiaryList.style.css";
import Apiary from "../Apiary";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const ApiaryList = ({ apiarys }) => {
  const [sortingParams, setSortingParams] = useState("");
  const [sortingOrder, setSortingOrder] = useState(true);

  const filterListHandler = (item) => {
    const data = new Date(item.createdAt);
    return data.toLocaleDateString().includes(sortingParams);
  };
  const sortingListHandler = (a, b) => {
    if (sortingOrder) {
      return a.apiaryNumber > b.apiaryNumber ? 1 : -1;
    } else {
      return a.apiaryNumber < b.apiaryNumber ? 1 : -1;
    }
  };
  return (
    <section className="apiarys">
      <h2 className="apiarys__header">Lista pasiek</h2>
      <div className="apiarys__sort">
        <input
          className="apiarys__sort--element"
          placeholder="Wyszukaj po dacie dodania"
          onChange={(e) => setSortingParams(e.target.value)}
        />
        <button
          className="apiarys__sort--button"
          onClick={() => setSortingOrder((prev) => !prev)}
        >
          Sortuj po numerze pasiek{" "}
          {sortingOrder ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </button>
      </div>
      <ul className="apiarys__list">
        {apiarys
          .sort(sortingListHandler)
          .filter(filterListHandler)
          .map(({ _id, name, apiaryNumber, createdAt }) => (
            <li key={_id}>
              <Apiary
                name={name}
                apiaryNumber={apiaryNumber}
                createdAt={createdAt}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ApiaryList;
