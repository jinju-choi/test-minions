//react
import { Link,useHistory } from "react-router-dom";

//css
import styled from "styled-components"


export default function Header() {

  const history = useHistory();
  const goMainPage = () => {
    history.push("/");
  }

  return (
        <>
            <Headers>
              <h1 onClick={() => {goMainPage()}}>MINIONS SHOP</h1>
            </Headers>
        </>
  );
}

const Headers = styled.header`
  width: 100%;
  padding: 20px;
  background: #ffed3f;
  box-sizing: border-box;

  & h1 {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-align: center;
    cursor: pointer;
  }
`;