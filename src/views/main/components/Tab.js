import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

export default function Tab() {
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <>
            <TabList>
                <TabItem
                    active={tabIndex === 1}
                    onClick={() => {
                        setTabIndex(1);
                    }}
                >
                    Tab1
                </TabItem>
                <TabItem
                    active={tabIndex === 2}
                    onClick={() => {
                        setTabIndex(2);
                    }}
                >
                    Tab2
                </TabItem>
            </TabList>

            <ContentWrap>
                {tabIndex === 1 && (
                    <TabContent1>
                        <div>1내용입니다</div>
                    </TabContent1>
                )}

                {tabIndex === 2 && (
                    <TabContent2>
                        <div>2내용입니다</div>
                    </TabContent2>
                )}
            </ContentWrap>
        </>
    );
}

const TabList = styled.ul`
    display: flex;
    align-items: center;
`;

const TabItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;

    ${({active}) => {
        return active ?
        `background: #555;`
        :
        `background: #ccc;`
    }}
`;

const ContentWrap = styled.div`
    display: block;
    height: 300px;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const TabContent1 = styled.div`
    height: 100%;
    background: tomato;
`;

const TabContent2 = styled.div`
    height: 100%;
    background: yellowgreen;
`;
