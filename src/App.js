import TenantImprovement from "./pages/TenantImprovement";
import './index.css'
import Layout from "./components/shared/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { primaryColor, secondaryColor, textPrimaryColor, textSecondaryColor } from "./utils/styles/colors";
import { pink } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter'],
    },
    palette: {
      "primaryColor": '#0f1217',
      "secondaryColor": '#CDA950',
    },
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 900,
    //     tab: 1100,
    //     lg: 1200,
    //     xl: 1534
    //   }
    // }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <TenantImprovement />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
