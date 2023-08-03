const AvailablePlant = props => {
  
  // TODO #2: Upgrade to display a card with image, chevron icons, etc. 
  // TODO #3: Add event handlers to icons (just log something for now)

  let { id, name, color, numAvailable } = props.plant;

  return <p id={id}>{name} - {color} - {numAvailable} available</p>;
}

export default AvailablePlant;
