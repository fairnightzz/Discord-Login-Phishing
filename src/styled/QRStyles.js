import styled from "styled-components";

const QRStyles = styled.div`
  text-align: center;
  background-image: url("./qr.png");
  padding: 50px 0px 32px 10px;
  height: 100%;

  h3 {
    font-weight: 600;
    font-size: 24px;
    margin: 30px 15px;
    margin: 20px 10px 0px 10px;
  }
  h4 {
    max-width: 240px;
    margin: 10px 0px 0px 0px;
    font-weight: 300;
    color: ${props => props.theme.colors.muted};
  }

  .qrMask {
    border-radius: 5px;
    background: #fff;
    display: inline-block;
    padding: 6px;
  }

  .overlay {
    position: absolute;
    top: 50%;
    right: 50%;
  }

  .boldDescription {
    font-weight: 700;
  }

  img {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

export default QRStyles;
