import React from 'react';
import styled from 'styled-components';
import Layout from '@/layout/Layout';
import { useRouter } from 'next/router';

export default function ResultPage() {
  const router = useRouter();
  return (
    <Layout>
      <Container>
        <Header>
          <div className="logo-wrapper">
            <img src="/logo.png" alt="로고" />
            <Title>응급실</Title>
          </div>
        </Header>

        <MBTIResult>
          <ResultTag>ISTJ</ResultTag>
        </MBTIResult>

        <ImageContainer>
          <img src="/mbti.png" alt="MBTI 결과 이미지" />
        </ImageContainer>

        <Description>태그를 가지게 되셨습니다!</Description>

        <StartButton onClick={()=>router.push("/login")}>시작하기</StartButton>
      </Container>
    </Layout>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  //justify-content: center;
  //align-items: center;
  width: 100%;
  margin-bottom: 20px;

  .logo-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
`;

const Title = styled.h1`
  font-size: 18px;
  color: #4a4a4a;
  font-weight: bold;
`;

const MBTIResult = styled.div`
  margin-bottom: 20px;
`;

const ResultTag = styled.div`
  padding: 8px 40px;
  background-color: #6c63ff;
  color: white;
  font-size: 18px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  margin: 20px 0;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  margin-bottom: 100px;
`;

const StartButton = styled.button`
  padding: 10px 100px;
  background-color: #6c63ff;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5548e8;
  }
`;
