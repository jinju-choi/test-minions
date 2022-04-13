import styled from "styled-components";

export default function MainSlide() {
  return(
    <SlideContainer>슬라이드 영역</SlideContainer>
  )
}

const SlideContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 80px;
  background: #ccc;
`;