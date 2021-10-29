import styled from "styled-components";

const GamerInput = styled.div`
  flex: 1 0 120px;
  margin-bottom: 15px;
  input {
    border-radius: 3px;
    width: 100%;
    height: 40px;
    background-color: #303338;
    border: 1px solid rgb(40, 40, 40);
    padding-left: 8px;
    outline: 0;
    color: rgb(185, 187, 190);

    transition: all .2s;
  }

  input:hover {
    border: 1px solid black;
  }

  input:focus {
    border: 1px solid ${(props) => props.theme.colors.link};
  }

  label {
    outline: none;
    display: inline-block;
    color: rgb(185, 187, 190);
    font-size: 12px;
    font-weight: 700;
  }

  @media (max-width: 830px) {
    min-wdith: 412px;
  }
`;

export default GamerInput;
