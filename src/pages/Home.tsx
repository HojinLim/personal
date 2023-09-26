import React from "react";

import {
  AppBar,
  Avatar,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import PersistentDrawerLeft from "../components/SideMenu";
import Header from "./Header";

const Home = () => {
  // const data = useAppSelector((state) => state.movies);
  // console.log(movies)
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <header>
       {/* <Header/> */}
      </header>
      <body>
        <Container>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h4">Body Content</Typography>
            <Typography>This is the body of your page.</Typography>
          </Paper>
        </Container>
      </body>
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="body2">Footer</Typography>
      </footer>
    </ThemeProvider>
  );
};

export default Home;
