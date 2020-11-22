import React from "react";
import styled from "styled-components";
import discordLogo from "./discord_logo.png";
import qr from "./qr.png";
import GamerForm from "./styled/GamerForm";
import GamerInput from "./styled/GamerInput";
import QRStyles from "./styled/QRStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    muted: "#B9BBBE",
    blue: "#7289da",
  },
};

const Container = styled.div`
  display: flex;
  background-color: #363a3e;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  @font-face {
    font-family: catamaran;
    src: url("./Catamaran-Regular.tff");
  }
  font-family: catamaran, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  line-height: 20px;

  ${GamerInput}:first-of-type {
    margin-top: 20px;
  }

  .vert-sep {
    margin: 0 16px;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    font-size: 13px;
    font-weight: 500;
  }

  @media (min-width: 830px) {
    min-width: 784px;
  }
`;

class DiscordForm extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GamerForm>
            <fieldset>
              <h3>Welcome back!</h3>
              <h4>We're so excited to see you again!</h4>
              <GamerInput>
                <label htmlFor="ephone">EMAIL OR PHONE NUMBER</label>
                <input type="text" name="ephone" id="ephone"></input>
              </GamerInput>
              <GamerInput>
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="password"></input>
                <a>Forgot your password?</a>
              </GamerInput>
              <button type="submit">
                <div>Login</div>
              </button>
            </fieldset>
          </GamerForm>

          <div class="vert-sep"></div>

          <QRStyles>
            <div className="qrMask">
              <img src={qr}></img>
            </div>
            <h3>Log in with QR Code</h3>
            <h4>
              Scan this with the{" "}
              <span className="boldDescription">Discord mobile app</span> to log
              in instantly.
            </h4>
          </QRStyles>
        </Container>
      </ThemeProvider>
    );
  }
}

export default DiscordForm;
