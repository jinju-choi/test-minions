//react
import { Link, useHistory } from 'react-router-dom';

import MainList from './MainList';
import MainSlide from './MainSlide';
import Tab from './Tab';
import NoticeList from './NoticeList';

//css
import styled from 'styled-components';
import { useEffect } from 'react';

export default function MainContent() {
    return (
        <Container>
            <MainSlide />
            <MainList />
            <Tab />
            <NoticeList />
        </Container>
    );
}

const Container = styled.div`
    width: 1120px;
    margin: 0 auto;
    padding: 100px 0;
    box-sizing: border-box;
`;
