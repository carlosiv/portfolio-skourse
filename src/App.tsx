import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
