import { capitalize } from '../shared/utils';
import styled from 'styled-components';

const StyledPlant = styled.div`
  flex-direction: row;
  justify-content: space-between;
  gap: 6px;
  max-height: 62px;
`;

const ImageAndText = styled.div`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const AmountText = styled.span`
  color: #508015;
  text-transform: uppercase;
`;

const ArrowGroup = styled.div`
  align-items: center;
  font-size: 1.4rem;
  gap: 6px;
  margin-right: 6px;
`;

const LeftChevron = styled.span`
  color: #ac0542;
  cursor: pointer;
  &:hover {
    color: #c90c52;
    transform: scale(1.1);
  }
`;

const RightChevron = styled.span`
  color: #427405;
  cursor: pointer;
  &:hover {
    color: #67a11f;
    transform: scale(1.1);
  }
`;

const AvailablePlant = props => {
  let { name, color, image, numAvailable } = props.plant;

  // TODO: Update handlers to remove and allocate plants, then remove console.log

  const handleReturnPlant = () => {
    console.log(`This button will return 1 ${color} ${name}.`);
  };

  const handleAllocatePlant = () => {
    console.log(`This button will allocate 1 ${color} ${name}.`);
  };

  return (
    <StyledPlant className={`card ${numAvailable === 0 ? "unavailable" : ""}`}>
      <ImageAndText>
        <img src={image} width="50px" height="50px" alt={`${color} ${name}`} />
        <p>
          {name}, {capitalize(color)}
          <br />
          <AmountText>{numAvailable} available</AmountText>
        </p>
      </ImageAndText>
      <ArrowGroup>
        <LeftChevron
          className={'fa fa-chevron-circle-left'}
          title="Remove one plant from flowerbed"
          onClick={handleReturnPlant}></LeftChevron>
        <RightChevron
          className={'fa fa-chevron-circle-right'}
          title="Add one plant to flowerbed"
          onClick={handleAllocatePlant}></RightChevron>
      </ArrowGroup>
    </StyledPlant>
  );
};

export default AvailablePlant;
