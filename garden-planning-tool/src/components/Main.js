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
  
  const [allPlants, setAllPlants] = useState([]);

  const [loading, setLoading] = useState(true);

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

    setAllPlants(plants);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  useEffect(() => {
    if (allPlants.length > 0) {
      setLoading(false);
    }
  }, [allPlants]);

  const handleReturn = thePlant => {
    if (thePlant.numAllocated > 0) {
      setAllPlants(
        // Create a new array with same objects except the one that is being updated
        allPlants.map(aPlant => {
          return aPlant.id !== thePlant.id
            ? aPlant
            : {
                ...aPlant,
                numAvailable: aPlant.numAvailable + 1,
                numAllocated: aPlant.numAllocated - 1,
              };
        })
      );
    }
  };

  const handleAllocate = thePlant => {
    if (thePlant.numAvailable > 0) {
      setAllPlants(
        // Create a new array with same objects except the one that is being updated
        allPlants.map(aPlant => {
          return aPlant.id !== thePlant.id
            ? aPlant
            : {
                ...aPlant,
                numAvailable: aPlant.numAvailable - 1,
                numAllocated: aPlant.numAllocated + 1,
              };
        })
      );
    }
  };

  let availablePlants = allPlants.map(plant => {
    return (
      <AvailablePlant
        key={plant.id}
        plant={plant}
        returnPlant={handleReturn}
        allocatePlant={handleAllocate}
      />
    );
  });
  
  return (
    !loading && (
      <StyledMain>
        <LeftCol>
          <h3>Available Plants</h3>
          {availablePlants}
        </LeftCol>
        <RightCol>
          <Flowerbed
            selectedPlants={allPlants.filter(plant => plant.numAllocated > 0)}
          />
        </RightCol>
      </StyledMain>
    )
  );
};

export default Main;
