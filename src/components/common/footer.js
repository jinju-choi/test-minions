import styled from "styled-components";

export default function Footer() {

  return(
    <Footers>
      <Inner>
        <h1>MINIONS SHOP</h1>
        <BottomCon>
          <TextWrap>
            <p>이용약관</p>
            <p>개인정보보호방침</p>
          </TextWrap>
          <TextWrap>
            <p>instagram</p>
            <p>Blog</p>
          </TextWrap>
        </BottomCon>
      </Inner>
    </Footers> 
  )

}

const Footers = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: flex;
  align-items: center;
  background: #EEE;
`;


const Inner = styled.div`
  width: 1120px;
  margin: 0 auto;

  & h1 {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: bold;
    color: #666;
  }
`;

const BottomCon = styled.div`
  display: flex;
  align-items: center;
  justify-content:  space-between;

  &:nth-child(2) p {
    font-weight: bold;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  color: #999;

  & p {
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;