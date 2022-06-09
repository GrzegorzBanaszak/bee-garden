import React from "react";
import "./addApiary.styles.css";
import { BiAddToQueue } from "react-icons/bi";
const AddApiary = () => {
  return (
    <section className="apiary__add">
      <h2>
        <BiAddToQueue /> Dodanj nową pasiekę
      </h2>
      <form>
        <div className="form__container">
          <div className="form__group">
            <label htmlFor="">Nazwa pasieki</label>
            <input type="text" name="name" />
          </div>
          <div className="form__group">
            <label htmlFor="">Numer pasieki (opcjonalnie)</label>
            <input type="text" name="number" />
          </div>
        </div>

        <button className="form__button" type="submit">
          Dodaj
        </button>
      </form>
    </section>
  );
};

export default AddApiary;
