const AvailablePlant = props => {
  
  // Use deconstruction to avoid having to use props.id, props.name, etc
  let { id, name, color, num } = props;

  return <p id={id}>{name} - {color} - {num} available</p>;
}

export default AvailablePlant;
