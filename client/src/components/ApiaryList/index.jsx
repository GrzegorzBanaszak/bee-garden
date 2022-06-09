import "./apiaryList.style.css";
import Apiary from "../Apiary";
const ApiaryList = ({ apiarys }) => {
  return (
    <section className="apiarys">
      <h2 className="apiarys__header">Lista pasiek</h2>
      <ul className="apiarys__list">
        {apiarys.map(({ _id, name, apiaryNumber, createdAt }) => (
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
