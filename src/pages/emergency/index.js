import React, { useState } from 'react';
import styled from 'styled-components';

export default function ChatPage() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { text: '은미에게 "뭐해?"라고 연락이 왔는데 뭐라고 할 지 추천해줘', fromUser: true },
    {
      text: '은미에게 답장을 보낼 때는 이렇게 해볼 수 있어요:\n1. "그냥 쉬고 있어~ 너는?"\n2. "일하고 있었어! 넌 뭐해?"\n3. "드라마 보고 있었어, 너는 뭐 하고 있어?"\n4. "방금 밥 먹었어! 너는?"',
      fromUser: false,
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = { text: inputValue, fromUser: true };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <ChatContainer>
      <Header>
        <BackButton>
          <img src="/backbtn.png"/>
        </BackButton>
        <Title>
          <img src="/logo.png"/>
          응급실
        </Title>
        <ProfileIcon/>
      </Header>

      <ChatContent>
        {messages.map((message, index) => (
          <MessageBubble key={index} fromUser={message.fromUser}>
            {message.text.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </MessageBubble>
        ))}
      </ChatContent>

      <InputArea>
        <InputContainer>
          <ImageIcon>
            <img src="/img-upload.png"/>
          </ImageIcon>
          <Input
            type="text"
            placeholder="메시지 입력..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <SendButton onClick={handleSendMessage}></SendButton>
        </InputContainer>

      </InputArea>
    </ChatContainer>
  );
}

// Styled Components
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

`;

const BackButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  
  > img{
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  
  > img{
    margin-top: 2px;
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
`;

const ProfileIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const ChatContent = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const MessageBubble = styled.div`
  align-self: ${(props) => (props.fromUser ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.fromUser ? '#6c63ff' : '#e0e0e0')};
  color: ${(props) => (props.fromUser ? 'white' : 'black')};
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 80%;
  white-space: pre-line;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 25px;
  padding: 5px 10px;
  margin-right: 10px;
`;

const ImageIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  
  >img{
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
`;

const SendButton = styled.button`
  background-color: #6c63ff;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

