import AvailablePlant from './AvailablePlant';
import styles from './Main.module.css';
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

  // TODO #1: Use styled components instead of CSS module

  // TODO #2: Loop to produce multiple AvailablePlant components

  // TODO #3: Upgrade content in AvailablePlant
  // TODO #4: Add event handlers in Available Plant
  // TODO #5: Add right column below with Flowerbed component that has a selectedPlants prop
  // TODO #6: Add conditional content to Flowerbed component — test passing an empty array and then testPlants2
  // TODO #7: Add content for SelectedPlant component

  return (
    <main>
      <div id={styles['left-column']}>
        <h3>Available Plants</h3>
        <AvailablePlant plant={testPlants[0]} />
        <AvailablePlant plant={testPlants[1]} />
        <AvailablePlant plant={testPlants[2]} />
      </div>
    </main>
  );
};

export default Main;
