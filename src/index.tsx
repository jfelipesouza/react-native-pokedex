import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBarComponent } from "./components/statusbar";
import Routes from "./screens/routes";
import { light } from "./theme";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);
  return (
    <ThemeProvider theme={theme}>
      <StatusBarComponent
        color={"transparent"}
        visible={false}
        barStyle={"light-content"}
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
