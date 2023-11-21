import styled from 'styled-components';

export const MovieCardStyle = styled.div`
  display: flex;
  gap: 40px;
  padding: 30px;
`;

export const MovieCardTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 16px;
  font-weight: 500;
`;

export const MovieCardTextList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-weight: 800;
  }
`;
