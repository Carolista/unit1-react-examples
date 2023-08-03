const AvailablePlant = props => {
  
  // Use deconstruction to avoid having to use props.id, props.name, etc
  let { id, name, color, numAvailable } = props.plant;

  return <p id={id}>{name} - {color} - {numAvailable} available</p>;
}

export default AvailablePlant;
