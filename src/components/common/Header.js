//react
import { Link, useHistory } from 'react-router-dom';

//css
import styled from 'styled-components';

export default function Header() {
    const history = useHistory();
    const goMainPage = () => {
        history.push('/');
    };

    return (
        <>
            <Headers>
                <Inner>
                    <h1
                        onClick={() => {
                            goMainPage();
                        }}
                    >
                        MINIONS SHOP
                    </h1>
                    {/* <NavLIst>
                        <Nav>
                            <h2>Best상품</h2>
                            <ul>
                                <li>Best상품</li>
                                <li>Best상품</li>
                                <li>Best상품</li>
                            </ul>
                        </Nav>
                        <Nav>
                            <h2>고객센터</h2>
                            <ul>
                                <li>고객센터</li>
                                <li>고객센터</li>
                                <li>고객센터</li>
                            </ul>
                        </Nav>
                    </NavLIst> */}
                </Inner>
            </Headers>
        </>
    );
}

const Headers = styled.header`
    width: 100%;
    padding: 20px;
    background: #ffed3f;
    box-sizing: border-box;
    text-align: center;

    & h1 {
        display: inline-block;
        font-size: 30px;
        font-weight: bold;
        color: #000;
        cursor: pointer;
    }

    & ul {
        position: absolute;
        right: 0;
        top: 50%;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
    }

    & li {
        margin-right: 20px;
        font-weight: bold;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }
    }
`;

const Inner = styled.div`
    position: relative;
    width: 1120px;
    margin: 0 auto;
`;

const NavLIst = styled.div`

`;