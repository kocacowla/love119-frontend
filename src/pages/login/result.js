import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function LoginResult() {
  const router = useRouter();

  const handleGoToMain = () => {
    router.push('/main');
  };

  return (
    <CompleteContainer>
      <Header>
        <LogoWrapper>
          <img src="/logo.png" alt="응급실 로고" />
          <Title>응급실</Title>
        </LogoWrapper>
      </Header>

      <Message>가입이 완료되었습니다</Message>

      <GoToMainButton onClick={handleGoToMain}>
        메인으로
      </GoToMainButton>
    </CompleteContainer>
  );
}

// Styled Components
const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Message = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
`;

const GoToMainButton = styled.button`
  padding: 15px 40px;
  background-color: #6c63ff;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #5548e8;
  }
`;
