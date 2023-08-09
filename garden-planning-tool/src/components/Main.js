import { useEffect, useState } from 'react';
import { alphabetize } from '../shared/utils';
import AvailablePlant from './AvailablePlant';
import Flowerbed from './Flowerbed';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0 100px;
`;

const LeftCol = styled.div`
  flex-direction: column;
  width: 300px;
  padding: 20px;
`;

const RightCol = styled.div`
  flex-direction: column;
  width: calc(100% - 300px);
  padding: 20px;
`;

const Main = props => {
  
  // TODO: Create a state variable called allPlants and initialize to an empty array

  // TODO: Create a state variable called loading and initialize to true

  // This function will fetch JSON and convert it to an array of JS objects to replace testPlants
  const fetchPlants = async () => {
    let response = await fetch(
      'https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt'
    );
    let data = await response.json();

    let plants = data.map(obj => {
      return {
        id: obj.id,
        name: obj.name,
        color: obj.color,
        image: obj.image,
        numAvailable: obj.numAvailable,
        numAllocated: 0,
      };
    });

    alphabetize(plants, 'name');

    // TODO: Update the value of allPlants with plants here

  };

  // TODO: Initiate the JSON fetch
  useEffect(() => {

  }, []);

  // TODO: Listen for a change to allPlants and set loading to false once the data is available
  useEffect(() => {

  }, []);

  let testPlants = [
    {
      id: 1,
      name: 'Hyacinth',
      color: 'blue',
      image:
        'https://drive.google.com/uc?export=view&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I',
      numAvailable: 6,
      numAllocated: 2,
    },
    {
      id: 2,
      name: 'Tulip',
      color: 'red',
      image:
        'https://drive.google.com/uc?export=view&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo',
      numAvailable: 6,
      numAllocated: 6,
    },
    {
      id: 3,
      name: 'Daffodil',
      color: 'yellow',
      image:
        'https://drive.google.com/uc?export=view&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q',
      numAvailable: 4,
      numAllocated: 12,
    },
  ];

  // TODO: Create handlers, handleReturn and handleAllocate, that update numAvailable and numAllocated (if within range)
  const handleReturn = thePlant => {

  };

  const handleAllocate = thePlant => {

  };

  // TODO: Map over allPlants (instead of testPlants)
  let availablePlants = testPlants.map(plant => {
    // TODO: Add returnPlant and allocatePlant props to pass handlers down
    return (
      <AvailablePlant
        key={plant.id}
        plant={plant}
      />
    );
  });
  
  // TODO: Pass allPlants to Flowerbed instead of testPlants, filtering for only those that have allocations, then remove testPlants above

  // TODO: Display this component conditionally, only if loading is false
  return (
    <StyledMain>
      <LeftCol>
        <h3>Available Plants</h3>
        {availablePlants}
      </LeftCol>
      <RightCol>
        <Flowerbed
          selectedPlants={testPlants}
        />
      </RightCol>
    </StyledMain>
  );
};

export default Main;
