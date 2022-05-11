import React, { useState } from "react";
import styled from 'styled-components';

const ListData = [{
  title : "공지사항 제목입니다",
  kinds: "공지",
  date: "2022.09.25",
  content: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
  show: false
},
{
  title : "이벤트 제목입니다",
  kinds: "이벤트",
  date: "2022.09.25",
  content: "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
  show: false
},
];

export default function NoticeList(){
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Container>
        <h2>공지사항</h2>
        <List>
        {
          ListData.map((item, index)=>{
            return(
              <ListItem key={index} onClick={()=>{setIsShow(item.show = !item.show)}}>
                <TitleBox>
                  <h3>{item.kinds} {item.title}</h3>
                  <p>{item.date}</p>
                </TitleBox>

                {item.show &&
                  <NoticeContent>
                    <p>{item.content}</p>
                  </NoticeContent>
                }
              </ListItem>
            )
          })
        }
        </List>


      </Container>
    </>
  )
}


const Container = styled.div`
  padding: 50px 0;
  & h2 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
  }
`;

const List = styled.ul`

`;

const ListItem = styled.li`

`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid #333;
  cursor: pointer;
`;


const NoticeContent = styled.div`
  padding: 30px;
  background-color: #eee;
`;