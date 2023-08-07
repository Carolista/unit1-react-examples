import styled from 'styled-components';

const StyledPlantCard = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 162px;
`;

const BigNum = styled.span`
  color: #508015;
  font-size: 40px;
  font-weight: 700;
`;

const SelectedPlant = props => {
  let { name, color, image, numAllocated } = props.plant;

  return (
    <StyledPlantCard className="card">
      <img src={image} width="150px" height="150px" alt={`${color} ${name}`} />
      <BigNum>{numAllocated}</BigNum>
    </StyledPlantCard>
  );
};

export default SelectedPlant;
