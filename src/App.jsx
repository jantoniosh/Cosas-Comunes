import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme/AppTheme";
import { AppRouter } from "./router/AppRouter";
import "./App.scss";

function App() {

  return (
    <>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </>
  );
}

export default App;
