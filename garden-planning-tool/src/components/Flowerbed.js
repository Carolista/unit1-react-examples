import styled from 'styled-components';
import SelectedPlant from './SelectedPlant';

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

const Flowerbed = props => {
  const plantsJSX = props.selectedPlants.map(plant => {
    return <SelectedPlant key={plant.id} plant={plant} />;
  });

  return (
    <StyledFlowerbed>
      <div>
        <h4>My Flowerbed</h4>
      </div>
      {props.selectedPlants.length ? (
        <PlantGrid>{plantsJSX}</PlantGrid>
      ) : (
        <p>Allocate a plant to get started!</p>
      )}
    </StyledFlowerbed>
  );
};

export default Flowerbed;
