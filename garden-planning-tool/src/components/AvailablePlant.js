import styles from "./AvailablePlant.module.css";
import { capitalize } from "../shared/utils";

const AvailablePlant = props => {

  let { id, name, color, image, numAvailable } = props.plant;

  const handleReturnPlant = () => {
    console.log(`Returning 1 ${color} ${name}.`)

  };

  const handleAllocatePlant = () => {
    console.log(`Allocating 1 ${color} ${name}.`)
  };

  return (
    <div id={id} className={`card ${styles["available-plant"]}`}>
      <div className={styles["image-and-text"]}>
        <img
          src={image}
          width="50px"
          height="50px"
          alt={`${color} ${name}`}
        />
        <p>
          {name}, {capitalize(color)}<br /> 
          <span className={styles["amount-text"]}>
            {numAvailable} available
          </span>
        </p>
      </div>
      <div className={styles.arrows}>
        <span
          className={`fa fa-chevron-circle-left ${styles["chevron-left"]}`}
          title="Remove one plant from flowerbed"
          onClick={handleReturnPlant}
        ></span>
        <span
          className={`fa fa-chevron-circle-right ${styles["chevron-right"]}`}
          title="Add one plant to flowerbed"
          onClick={handleAllocatePlant}
        ></span>
      </div>
    </div>
  );
}

export default AvailablePlant;
