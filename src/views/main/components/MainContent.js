//react
import { Link,useHistory } from "react-router-dom";

import MainList from "./MainList";
import MainTab from "./MainTab";
import MainSlide from "./MainSlide";

//css
import styled from "styled-components"


export default function MainContent() {
  return (
        <Container>
          <MainSlide/>
          <MainTab/>
          <MainList/>
        </Container>
  );
}

const Container = styled.div`
    width: 1120px;
    margin: 0 auto;
    padding: 100px 0;
    box-sizing: border-box;
`;