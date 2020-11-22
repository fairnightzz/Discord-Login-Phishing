import "./App.css";
import backgroundImg from "./background.jpg";
import DiscordForm from "./DiscordForm";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    muted: "#B9BBBE",
    blue: "#7289da",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <DiscordForm />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
