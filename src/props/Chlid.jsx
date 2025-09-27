import Props from "./Props.jsx";
import pic1 from "../assets/fixitfastback.jpg";
import pic2 from "../assets/thailandimage.jpg";

const App = () => {
  const cards = [
    { img: pic1, title: "Fixitfast", pera: "hello this is paragraph for fixitfast", btn: "Click" },
    { img: pic2, title: "Thailand Trip", pera: "this is paragraph for thailand", btn: "Explore" },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <Props
          key={index}
          img={card.img}
          title={card.title}
          pera={card.pera}
          btn={card.btn}
        />
      ))}
    </>
  );
};

export default App;
