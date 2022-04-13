// css
import styled from "styled-components";

// img
import PrdImg1 from '../../assets/img/minions1.jpg'
import Footer from "../../components/common/footer";
import Header from "../../components/common/Header";

export default function ProductDetailPage() {

    return (
      <>
        <Header/>
        <Container>
          <Inner>

            <Title>상품 상세</Title>
            <PrdInfoTop>
              <ImgWrap>
                <img src={PrdImg1} alt="" />
              </ImgWrap>
              <TextWrap>
                <h2><span>상품 명:</span> 요원 팀</h2>
                <p><span>price:</span> 100,000원</p>
              
                <SelectWrap>
                    <select name="" id="">
                        <option value="">XL</option>
                        <option value="">L</option>
                        <option value="">M</option>
                        <option value="">S</option>
                    </select>
                </SelectWrap>
                
              </TextWrap>
            </PrdInfoTop>

            <PrdInfoBtm>
              <p>상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명</p>
            </PrdInfoBtm>

          </Inner>
        </Container>
        <Footer/>
      </>
    );
}

const Container = styled.div`
  width: 100%;
  padding: 100px 0;
`;
  

const Inner = styled.div`
  width: 1120px;
  margin: 0 auto;
`;

const Title = styled.h2`
    margin-bottom: 70px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: #f7d508;
`;

const PrdInfoTop = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
`;

const PrdInfoBtm = styled.div`
    height: 500px;
  padding: 50px;
  border-top: 1px solid #f7d508;
  border-bottom: 1px solid #f7d508;
`;

const ImgWrap = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 30px;
  border-radius: 8px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`

  & h2 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
  }

  & p {
        margin-bottom: 20px;
        font-size: 25px;
    & span {
      font-weight: bold;
    }
  }
`;

const SelectWrap = styled.div`
    width: 300px;

    & select {
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }

`;