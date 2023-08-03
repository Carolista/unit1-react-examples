import AvailablePlant from "./AvailablePlant";
import styles from "./Main.module.css";

const Main = () => {

  let testPlants1 = [
    {
      id: 1,
      name: "Hyacinth",
      color: "blue",
      image: "hyacinth-blue.png",
      numAvailable: 6
    },
    {
      id: 2,
      name: "Tulip",
      color: "red",
      image: "tulip-red.png",
      numAvailable: 6
    },
    {
      id: 3,
      name: "Daffodil",
      color: "yellow",
      image: "daffodil-yellow.png",
      numAvailable: 4
    },  
  ];

  let testPlants2 = [
    {
      id: 1,
      name: "Hyacinth",
      color: "blue",
      image: "hyacinth-blue.png",
      numAvailable: 2
    },
    {
      id: 2,
      name: "Tulip",
      color: "red",
      image: "tulip-red.png",
      numAvailable: 6
    },
    {
      id: 3,
      name: "Daffodil",
      color: "yellow",
      image: "daffodil-yellow.png",
      numAvailable: 12
    },  
  ];

  // TODO #1: Loop to produce multiple AvailablePlant components
  // TODOs #2 and #3: Go to AvailablePlant component and upgrade content
  // TODO #4: Add right column below with Flowerbed component that has a selectedPlants prop — test passing an empty array and then testPlants2

  return (
    <main>
      <div id={styles["left-column"]}>
        <h3>Available Plants</h3>
        <AvailablePlant plant={testPlants1[0]} />
        <AvailablePlant plant={testPlants1[1]} />
        <AvailablePlant plant={testPlants1[2]} />
      </div>
    </main>
  );
};

export default Main;
