import classes from "./cardGalery.module.scss";
import piano1 from "./assets/images/piano1.jpg";
import piano2 from "./assets/images/piano2.jpg";
import piano3 from "./assets/images/piano3.jpg";
import piano4 from "./assets/images/piano4.jpg";
import piano5 from "./assets/images/piano5.jpg";

function CardGalery() {
  const cards = [
    { src: piano1 },
    { src: piano2 },
    { src: piano3 },
    { src: piano4 },  
    { src: piano5 },
  ];
  const cardList = cards.map((card, index) => {
    card.active = cardActiveList[index];
    if (card.active) card.name = "Aesthetics Piano";

    return (
      <div
        onClick={() => {
          const newActiveList = cardActiveList.map((act, indx) => (act = false));
          newActiveList[index] = true;
          setCardActiveList(newActiveList);
        }}
        className={card.active ? "cardItem active" : "cardItem"}
        key={index}
        style={{ backgroundImage: `url(${card.src})` }}
      >
        <h3 className={card.active ? "cardHeader active" : "cardHeader"}>{card.name}</h3>
      </div>
    );
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.cardComponent}>{cardList}</div>
    </div>
  );
}

export default CardGalery;
