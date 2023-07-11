import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 50rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
`;
export const StyledCard = styled.div`
  display: flex;
  gap: 1rem;
  border: 2px solid yellow;
  border-radius: 0.5rem;
  padding: 1rem;
  min-width: 20rem;
  max-width: 40rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
  border: 2px solid yellow;
`;
export const FilterSection = styled(StyledCard)`
  flex-direction: column;
  gap: 5px;
  > * {
    height: 40px;
    width: 200px;
  }
  h2 {
    margin: 0;
  }
`;
