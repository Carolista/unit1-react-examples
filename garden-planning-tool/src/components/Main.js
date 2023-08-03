import AvailablePlant from "./AvailablePlant";
import styles from "./Main.module.css";

const Main = () => {

  let testPlants = [
    {
      id: 1,
      name: "Hyacinth",
      color: "blue",
      image: "hyacinth-blue.png",
      numAvailable: 8
    },
    {
      id: 2,
      name: "Tulip",
      color: "red",
      image: "tulip-red.png",
      numAvailable: 12
    },
    {
      id: 3,
      name: "Daffodil",
      color: "yellow",
      image: "daffodil-yellow.png",
      numAvailable: 16
    },  
  ];

  return (
    <main>
      <div id={styles["left-column"]}>
        <h3>Available Plants</h3>
        <AvailablePlant 
          id={testPlants[0].id}
          name={testPlants[0].name}
          color={testPlants[0].color}
          num={testPlants[0].numAvailable}
        />
        <AvailablePlant 
          id={testPlants[1].id}
          name={testPlants[1].name}
          color={testPlants[1].color}
          num={testPlants[1].numAvailable}
        />
        <AvailablePlant 
          id={testPlants[2].id}
          name={testPlants[2].name}
          color={testPlants[2].color}
          num={testPlants[2].numAvailable}
        />
      </div>
    </main>
  );
};

export default Main;
