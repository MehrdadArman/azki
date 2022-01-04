import { Suspense, lazy } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './configs/theme'
import FullLayOut from './layout/FullPageLayout'
import { Provider } from "react-redux";
import { store } from './redux/store'

import PageGlobalLoader from './components/loader/pageGlobalLoader'


import "./assets/scss/app.scss"


const Router = lazy(() => import('./router/Router'));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense
          fallback={
            <PageGlobalLoader />
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
