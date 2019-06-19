import React, { useContext } from 'react';
import styles, { ThemeProvider } from 'styled-components';
import { StoreContext } from 'services';
import { Routes } from 'pages';
import { Provider } from 'react-redux';
import { themes, GlobalStyle } from './style';

const Container = styles.div`
  height: 100%;
`;

function App() {
  const store = useContext(StoreContext);
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.default}>
        <Container>
          <GlobalStyle />
          <div id="portals" />
          <Routes />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
