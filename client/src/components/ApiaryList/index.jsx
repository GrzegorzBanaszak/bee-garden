import "./apiaryList.style.css";
import Apiary from "../Apiary";
import { useState } from "react";

const defSortingParams = {
  value: "",
  sortBy: "createdAt",
};

const ApiaryList = ({ apiarys }) => {
  const [sortingParams, setSortingParams] = useState(defSortingParams);

  const filterListHandelr = (item) => {
    if (sortingParams.sortBy === "createdAt") {
      const data = new Date(item.createdAt);
      return data.toLocaleDateString().includes(sortingParams.value);
    }

    if (sortingParams.sortBy === "apiaryNumber") {
      return item.apiaryNumber.toString().includes(sortingParams.value);
    }
  };
  return (
    <section className="apiarys">
      <h2 className="apiarys__header">Lista pasiek</h2>
      <div className="apiarys__sort">
        <input
          className="apiarys__sort--element"
          placeholder="Szukaj"
          onChange={(e) =>
            setSortingParams((prev) => ({ ...prev, value: e.target.value }))
          }
        />
        <select
          className="apiarys__sort--element"
          onChange={(e) =>
            setSortingParams({ value: "", sortBy: e.target.value })
          }
        >
          <option value="createdAt">Data utworzenia</option>
          <option value="apiaryNumber">Numer pasieki</option>
        </select>
      </div>
      <ul className="apiarys__list">
        {apiarys
          .filter(filterListHandelr)
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
