
const CharacterCard = ({ name, image, title }) => (
    <div>
      <h2>{title}</h2>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
  
  export default CharacterCard;