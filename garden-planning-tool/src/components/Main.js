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
  const [allPlants, setAllPlants] = useState([]);

  // TODO: Create a state variable called loading and initialize to true
  const [loading, setLoading] = useState(true);

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
    setAllPlants(plants);
  };

  // TODO: Initiate the JSON fetch
  useEffect(() => {
    fetchPlants();
  }, []);

  // TODO: Listen for a change to allPlants and set loading to false once the data is available
  useEffect(() => {
    if (allPlants.length > 0) {
      setLoading(false);
    }
  }, [allPlants]);

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

  // TODO: Map over allPlants (instead of testPlants)
  let availablePlants = allPlants.map(plant => {
    // TODO: Add returnPlant and allocatePlant props to pass handlers down
    return (
      <AvailablePlant
        key={plant.id}
        plant={plant}
        returnPlant={handleReturn}
        allocatePlant={handleAllocate}
      />
    );
  });
  
  // TODO: Pass allPlants to Flowerbed instead of testPlants, filtering for only those that have allocations, then remove testPlants above

  // TODO: Display this component conditionally, only if loading is false
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
