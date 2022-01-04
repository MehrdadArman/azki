import { Suspense, lazy } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './configs/theme'
import FullLayOut from './layout/FullPageLayout'
import { Provider } from "react-redux";
import { store } from './redux/store'
import CircularProgress from '@mui/material/CircularProgress';


import "./assets/scss/app.scss"


const Router = lazy(() => import('./router/Router'));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense
          fallback={
            <div style={{justifyContent:'center',minHeight:'100vh',width:'100%'}}>
              <CircularProgress color="primary" />
            </div>
          }
        >
          <ThemeProvider theme={theme}>
            <FullLayOut>
              <Router />
            </FullLayOut>
          </ThemeProvider>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
