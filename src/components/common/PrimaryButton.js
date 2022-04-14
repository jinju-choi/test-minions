import styled from 'styled-components';

export default function PrimaryButton(props) {
    return (
        <Button type="button" onClick={props.onClick}>
            {props.text}
        </Button>
    );
}

const Button = styled.button`
    width: 180px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border-radius: 30px;
    background: #f7d508;
    font-size: 20px;
    font-weight: bold;
`;
