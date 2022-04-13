import { M } from "./MT";

// 이거는 진짜 모든 페이지의 버튼이나 인풋들이 공통일 경우나 비슷할 경우에만 사용해주세요.
// 여기서 스타일링 하시고 필요한 파일에서 import 하시고

// const DIV = styled.div`
//   ${footBtnStyle}
//   color: #FF0000;
// `;

// 위와같이 작성하시면 됩니다. 스타일이 조금 다를 경우에는 위와같이 해당 스타일 밑에 추가로 작성하시면
// 위에서 아래로 읽히니까 아래 스타일에 맞춰 덮어쓰기되니 유용하세 잘 사용해주세요!

const footBtnStyle = `
  display: flex; align-items: center; justify-content: center;
  font-family: "NanumBarunGothicBold"; font-size: 20px; font-weight: bold; color: #fff;

  @media screen and (max-width: 500px) { font-size: ${M(20)}; }
`;

export {footBtnStyle};

