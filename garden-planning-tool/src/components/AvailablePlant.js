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

  
  // TODO #3: Upgrade to display a card with image, chevron icons, etc. 
  // TODO #4: Add event handlers to icons (just log something for now)

  let { id, name, color, numAvailable } = props.plant;

  return <p id={id}>{name} - {color} - {numAvailable} available</p>;
}

export default AvailablePlant;
