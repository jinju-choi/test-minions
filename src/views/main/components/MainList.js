import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// css
import styled from "styled-components"

// img
import PrdImg from "../../../assets/img/minions1.jpg";
import PrdImg2 from "../../../assets/img/minions2.jpg";
import PrdImg3 from "../../../assets/img/minions3.jpg";
import PrdImg4 from "../../../assets/img/minions4.jpg";
import PrdImg5 from "../../../assets/img/minions5.jpg";
import PrdImg6 from "../../../assets/img/minions6.jpg";

const ProList = [
  {
    img: PrdImg,
    title: '요원 팀',
    price: '100,000',
  },
  {
    img: PrdImg2,
    title: '공룡 칼',
    price: '120,000',
  },
  {
    img: PrdImg3,
    title: '나무보트 밥',
    price: '150,000',
  },
  {
    img: PrdImg4,
    title: '유니콘 스튜어트',
    price: '150,000',
  },
  {
    img: PrdImg5,
    title: '수상자전거 제리',
    price: '150,000',
  },
  {
    img: PrdImg6,
    title: '오픈카 케빈',
    price: '150,000',
  },

];

export default function MainList() {

  // 페이지 이동
  const history = useHistory();
  const PrdDetailPage = () => {
    return history.push("/product/ProductDetailPage")
  }

  return(
    <>
      {/* <Ul>
        <Li>
          <ImgWrap><img src={PrdImg} alt="" /></ImgWrap>
          <Title>미니언즈 피규어</Title>
          <p>미니언즈 캐릭터 팀 입니다</p>
          <Price><span>price:</span> 100,000원</Price>
        </Li>
      </Ul> */}

      <Ul>
          {
            ProList.map((el,index) => {
              return(
                <Li key={index} onClick={()=> {PrdDetailPage()}}>
                  <ImgWrap>
                    <img src={el.img} alt="" />
                  </ImgWrap>
                  <Title>{el.title}</Title>
                  <Price>{el.price}원</Price>
                  <p>미니언즈 캐릭터 {el.title} 피규어 입니다</p>
                </Li>
              )
            })
          }
      </Ul>
    </>
  )
}


// 스타일
const Ul = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Li = styled.li`
  width: 32.5%;
  margin-bottom: 60px;
  cursor: pointer;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 16px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 25px;
  font-weight: bold;
`;

const Price = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  color: #000;
  & span {
    font-weight: bold;
  }
  + p {
    font-size: 17px;
    color: #555;
  }
`;