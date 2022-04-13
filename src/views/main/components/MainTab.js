import styled from "styled-components";

export default function MainTab() {
  const tab = ['피규어', '굿즈', '패션', '잡화', '리빙'];
  const tabList = tab.map((tabs, index) => <li key={index}>{tabs}</li> );

  return<Ul>{tabList}</Ul>
}

const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & li {
    width: 100px;
    padding: 10px 20px;
    background: #ffed3f;
    border-radius: 8px 8px 0 0;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    cursor: pointer;
    color: #222222;
    transition: 0.3s;

    &:hover {
      background: #f7d508;
    }
  }
`;