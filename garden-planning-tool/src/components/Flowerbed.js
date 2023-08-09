import styled from 'styled-components';
import SelectedPlant from './SelectedPlant';
import { useState } from 'react';

const StyledFlowerbed = styled.div`
  flex-direction: column;
  padding: 16px;
  gap: 20px;
  border-color: #508015;
  border-style: solid;
  border-width: 2px 2px 2px 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const PlantGrid = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Flowerbed = props => {

  // TODO: Create a state variable, flowerbedName, initialized to "My Flowerbed"
  const [ flowerbedName, setFlowerbedName ] = useState("My Flowerbed")

  // TODO: Create a state variable, editing, initialized to false
  const [ editing, setEditing ] = useState(false);

  const plantsJSX = props.selectedPlants.map(plant => {
    return <SelectedPlant key={plant.id} plant={plant} />;
  });

  const handleNameChange = (event) => {
    // TODO: Update flowerbedName with the value from the input field
    setFlowerbedName(event.target.value);
  };

  const handleOpenForm = () => {
    // TODO: Update editing boolean
    setEditing(true);
  }

  const handleCloseForm = () => {
    // TODO: Update editing boolean
    setEditing(false);
  }

  // TODO: Add conditional rendering so that only one form shows at a time
  return (
    <StyledFlowerbed>
      {!editing && <StyledForm>
        <h4>{flowerbedName}</h4>
        <button onClick={handleOpenForm}>Edit</button>
      </StyledForm>}
      {editing && <StyledForm>
        <input value={flowerbedName} onInput={handleNameChange} />
        <button onClick={handleCloseForm}>Save</button>
      </StyledForm>}
      {props.selectedPlants.length ? (
        <PlantGrid>{plantsJSX}</PlantGrid>
      ) : (
        <p>Select a plant to get started!</p>
      )}
    </StyledFlowerbed>
  );
};

export default Flowerbed;
