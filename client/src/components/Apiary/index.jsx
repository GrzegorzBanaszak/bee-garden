import "./apiary.styles.css";
const Apiary = ({ name, apiaryNumber, createdAt }) => {
  const date = new Date(createdAt);
  return (
    <div className="apiary">
      <div className="apiary__element">
        <h4>Nazwa pasieki</h4>
        <span>{name}</span>
      </div>
      <div className="apiary__element">
        <h4>Numer pasieki</h4>
        <span>{apiaryNumber}</span>
      </div>
      <div className="apiary__element">
        <h4>Data utworzenia</h4>
        <span>{date.toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Apiary;
