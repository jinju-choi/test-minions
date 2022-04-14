import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useHistory} from 'react-router-dom/cjs/react-router-dom.min';

// css
import styled from 'styled-components';

// img
import PrdImg from '../../../assets/img/minions1.jpg';
import PrdImg2 from '../../../assets/img/minions2.jpg';
import PrdImg3 from '../../../assets/img/minions3.jpg';
import PrdImg4 from '../../../assets/img/minions4.jpg';
import PrdImg5 from '../../../assets/img/minions5.jpg';
import PrdImg6 from '../../../assets/img/minions6.jpg';

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
        return history.push('/product/ProductDetailPage');
    };

    const tab = ['피규어', '굿즈', '패션', '잡화', '리빙'];
    // const tabList = tab.map((tabs, index) => <li key={index}>{tabs}</li>);

    const [tabIndex, setTabIndex] = useState(1);

    return (
        <>
            {/* <Tab>{tabList}</Tab> */}
            <Tab>
                {
                    tab.map((item, index) => {
                        return (
                            <li key={index} active={tabIndex === {index} +1} onClick={()=>{setTabIndex({index} +1)}}>{item}</li>
                        )
                    })
                }
            </Tab>

            <ContentWrap>
                <PrdList>
                    {ProList.map((el, index) => {
                        return (
                            <Li
                                key={index}
                                onClick={() => {
                                    PrdDetailPage();
                                }}
                            >
                                <ImgWrap>
                                    <img src={el.img} alt={el.title} />
                                </ImgWrap>
                                <Title>{el.title}</Title>
                                <Price>{el.price}원</Price>
                                <p>미니언즈 캐릭터 {el.title} 피규어 입니다</p>
                            </Li>
                        );
                    })}
                </PrdList>
                <Content2>
                    <p>굿즈</p>
                </Content2>
            </ContentWrap>
            
        </>
    );
}

// 스타일

const Tab = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    & li {
        width: 100px;
        padding: 10px 20px;
        border-radius: 8px 8px 0 0;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        color: #222222;
        transition: 0.3s;

        &:hover {
            background: #f7d508;
        }

        ${({active}) => {
            return active ?
            `background: #f7d508;`
            :
            `background: #ffed3f`
        }}
    }
`;

const ContentWrap = styled.div`
    display: block;
`;

const Content2 = styled.div`
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: yellowgreen;
`;

const PrdList = styled.ul`
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

    &:hover img {
        transform: scale(1.1);
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 16px;
    overflow: hidden;

    
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: all .5s;
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
