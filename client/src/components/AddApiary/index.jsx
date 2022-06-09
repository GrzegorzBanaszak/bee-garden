import { useState } from "react";
import "./addApiary.styles.css";
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
const defFormValues = {
  name: "",
  number: "",
};
const AddApiary = ({ setApiarys, setDisplayAddApiary }) => {
  const [formValues, setFormValues] = useState(defFormValues);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/apiary",
        formValues
      );
      if (res.status === 201) {
        setApiarys((prev) => [...prev, res.data]);
        setDisplayAddApiary(false);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <section className="apiary__add">
      <h2>
        <BiAddToQueue /> Dodanj nową pasiekę
      </h2>
      <form onSubmit={handelFormSubmit}>
        <div className="form__container">
          <div className="form__group">
            <label htmlFor="">Nazwa pasieki</label>
            <input type="text" name="name" id="name" onChange={handleChange} />
          </div>
          <div className="form__group">
            <label htmlFor="">Numer pasieki (opcjonalnie max 5 cyfr)</label>
            <input
              type="number"
              name="number"
              id="number"
              onChange={handleChange}
            />
          </div>
        </div>
        {errorMessage && <p className="form__error">{errorMessage}</p>}
        <button className="form__button" type="submit">
          Dodaj
        </button>
      </form>
    </section>
  );
};

export default AddApiary;
