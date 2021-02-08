import styled from "styled-components";

const GamerForm = styled.form`
  background-color: #36393f;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;

  min-width: 414px;

  @media (max-width: 480px) {
    min-height: 100vh;
    width: 100%;
    h3,
    h4 {
      min-width: 228px;
    }
  }

  fieldset {
    padding: 5px;
    border: none;
    align-items: center;
  }

  h3,
  h4 {
    text-align: center;
    padding: 0px;
    margin: 0px;
    width: auto;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.muted};
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    border: none;
    border-radius: 5px;
    color: #FFF;
    height: 40px;
    background-color : ${props => props.theme.colors.blue};
  }
`;

export default GamerForm;
