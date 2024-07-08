import { Box, Toolbar } from "@mui/material";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} component="div">
      <Navbar />
      <Toolbar />
      <Form />
    </Box>
  );
}

export default App;
