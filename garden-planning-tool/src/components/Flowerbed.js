import styled from 'styled-components';

const StyledFlowerbed = styled.div`
  flex-direction: column;
  padding: 16px;
  gap: 20px;
  border-color: #508015;
  border-style: solid;
  border-width: 2px 2px 2px 12px;
`;

const PlantGrid = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Flowerbed = (props) => {

  // TODO #5: Return JSX that displays either text saying no plants have been allocated or a series of SelectedPlant components
  // if (props.selectedPlants) {
  //   return <p>No plants allocated yet.</p>;
  // } else {
  //   return <p>Some plants...</p>;
  // }
  return (
    <StyledFlowerbed>
      <div>
        <h4>My Flowerbed</h4>
      </div>
      {props.selectedPlants 
        ? <p>Some flowers...</p> 
        : <p>Allocate a plant to get started!</p>
      }
    </StyledFlowerbed>
  );
}

export default Flowerbed;