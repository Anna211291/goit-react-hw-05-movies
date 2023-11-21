import styled from 'styled-components';

export const ErrorMessage = () => {
  return (
    <ErrorMessageStyle>
      'Whoops! Error! Please reload this page!'
    </ErrorMessageStyle>
  );
};

export const ErrorMessageStyle = styled.b`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-size: 24px;
  color: red;
  padding-top: 60px;
`;
