import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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

    const tabData = ['피규어', '굿즈', '패션', '잡화', '리빙'];
    // const tabList = tab.map((tabs, index) => <li key={index}>{tabs}</li>);

    const [tabIndex, setTabIndex] = useState([0]);
    // const [tabIdx, setTabIdx] = useState(0);

    return (
        <>
            {/* <Tab>{tabList}</Tab> */}
            <Tab>
                {tabData.map((item, index) => {
                    return (
                        <TabLi
                            key={index}
                            active={tabIndex === index}
                            onClick={() => {
                                setTabIndex(index);
                            }}
                        >
                            {item}
                        </TabLi>
                    );
                })}
            </Tab>

            <ContentWrap>
                {   tabIndex === 0 &&
                    <PrdList>
                        {ProList.map((el, index) => {
                            const {img, title, price} = el;

                            return (
                                <Li
                                    key={index}
                                    onClick={() => {
                                        PrdDetailPage();
                                    }}
                                >
                                    <ImgWrap>
                                        <img src={img} alt={title} />
                                    </ImgWrap>
                                    <Title>{title}</Title>
                                    <Price>{price}원</Price>
                                    <p>
                                        미니언즈 캐릭터 {title} 피규어 입니다
                                    </p>
                                </Li>
                            );
                        })}
                    </PrdList>
                }
                { tabIndex === 1 &&
                <Content>
                    <p>굿즈</p>
                </Content>
                }
                { tabIndex === 2 &&
                <Content>
                    <p>패션</p>
                </Content>
                }   
            </ContentWrap>
        </>
    );
}

// 스타일

const Tab = styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const TabLi = styled.li`
    width: 100px;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: #222222;
    transition: 0.3s;
    /* &:hover {
        background: red;
    } */
    /* background: ${props => props.active ? '#ffcc16' : '#ffed3f'}; */
    ${({ selected }) => {
        return selected ? `background: #ffcc16;` : `background: #ffed3f;`
    }}
`

const ContentWrap = styled.div`
    display: block;
`;

const Content = styled.div`
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: yellowgreen;
    font-size: 50px;
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

        transition: all 0.5s;
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
