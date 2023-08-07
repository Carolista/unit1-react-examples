import AvailablePlant from "./AvailablePlant";
import Flowerbed from "./Flowerbed";
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

const Main = () => {

  let testPlants1 = [
    {
      id: 1,
      name: "Hyacinth",
      color: "blue",
      image: "https://drive.google.com/uc?export=view&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I",
      numAvailable: 6
    },
    {
      id: 2,
      name: "Tulip",
      color: "red",
      image: "https://drive.google.com/uc?export=view&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo",
      numAvailable: 6
    },
    {
      id: 3,
      name: "Daffodil",
      color: "yellow",
      image: "https://drive.google.com/uc?export=view&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q",
      numAvailable: 4
    },  
  ];

  let testPlants2 = [
    {
      id: 1,
      name: "Hyacinth",
      color: "blue",
      image: "https://drive.google.com/uc?export=view&id=1wZU8kWKcTWCIEMjz-Ce7dTU8Fcb-NM9I",
      numAvailable: 2
    },
    {
      id: 2,
      name: "Tulip",
      color: "red",
      image: "https://drive.google.com/uc?export=view&id=1Vl0Ch4MQslwh9EyhnGX1RK9YZbPuHtvo",
      numAvailable: 6
    },
    {
      id: 3,
      name: "Daffodil",
      color: "yellow",
      image: "https://drive.google.com/uc?export=view&id=1BwQ_BdSgB6XGdU_OOm5iYQFXKjKEcW1Q",
      numAvailable: 12
    },  
  ];

  let availablePlants = testPlants1.map(plant => {
    return <AvailablePlant key={plant.id} plant={plant} />;
  });

  // TODO #4: Add right column below with Flowerbed component that has a selectedPlants prop — test passing an empty array and then testPlants2

  return (
    <StyledMain>
      <LeftCol>
        <h3>Available Plants</h3>
        {availablePlants}
      </LeftCol>
      <RightCol>
        <Flowerbed selectedPlants={[]} />
      </RightCol>
    </StyledMain>
  );
};

export default Main;
