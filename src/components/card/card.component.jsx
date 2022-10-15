import "./card.styles.css";

const Card = ({ monster }) => {
  return (
    <div>
      <img
        alt="nooooo"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
    </div>
  );
};

export default Card;
