import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Layout from '@/layout/Layout';

export default function Index() {
  const [selectedEorI, setSelectedEorI] = useState(null);
  const [selectedSorN, setSelectedSorN] = useState(null);
  const [selectedTorF, setSelectedTorF] = useState(null);
  const [selectedPorJ, setSelectedPorJ] = useState(null);

  const router = useRouter();

  const mbtiGroups = [
    { type: 'EorI', options: ['E', 'I'] },
    { type: 'SorN', options: ['S', 'N'] },
    { type: 'TorF', options: ['T', 'F'] },
    { type: 'PorJ', options: ['P', 'J'] }
  ];

  const handleMBTIClick = (type, option) => {
    switch (type) {
      case 'EorI':
        setSelectedEorI(option);
        break;
      case 'SorN':
        setSelectedSorN(option);
        break;
      case 'TorF':
        setSelectedTorF(option);
        break;
      case 'PorJ':
        setSelectedPorJ(option);
        break;
      default:
        break;
    }
  };

  const isAllSelected = selectedEorI && selectedSorN && selectedTorF && selectedPorJ;

  const handleNextPage = () => {
    if (isAllSelected) {
      router.push('/next-page'); // 원하는 경로로 변경하세요.
    } else {
      alert('모든 MBTI 항목을 선택해주세요!');
    }
  };

  return (
    <Layout>
      <Container>
        <Header>
          <Title>
            <div className="logo-wrapper">
              <img src="/logo.png" />
              <div>응급실</div>
            </div>
            <div className="logo-icon">
              <img src="/search.png" />
              <img src="/profile.png" />
            </div>
          </Title>
          <Subtitle>
            📌 문답을 완료하고 <br /> 응급실을 시작해 보세요!
          </Subtitle>
        </Header>

        <ImageContainer>
          <img src="/mbti.png" alt="MBTI 설명 이미지" />
        </ImageContainer>

        <Question>당신의 MBTI는?</Question>

        <MBTIContainer>
          {mbtiGroups.map(({ type, options }) => (
            <MBTIGroup key={type}>
              {options.map((option) => (
                <MBTIButton
                  key={option}
                  onClick={() => handleMBTIClick(type, option)}
                  selected={
                    (type === 'EorI' && selectedEorI === option) ||
                    (type === 'SorN' && selectedSorN === option) ||
                    (type === 'TorF' && selectedTorF === option) ||
                    (type === 'PorJ' && selectedPorJ === option)
                  }
                >
                  {option}
                </MBTIButton>
              ))}
            </MBTIGroup>
          ))}
        </MBTIContainer>

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
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #4a4a4a;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 50px;
  width: 100%;

  .logo-wrapper {
    display: flex;
    align-items: center;

    > img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  .logo-icon {
    display: flex;
    align-items: center;

    > img {
      width: 24px;
      height: 24px;
      margin-left: 16px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #7a7a7a;
  text-align: center;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const Question = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const MBTIContainer = styled.div`
  display: flex; 
  align-items: center;
  gap: 20px; 
  margin-bottom: 40px;
  
`;

const MBTIGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px; 
`;

const MBTIButton = styled.button`
  padding: 20px;
  width: 60px;
  background-color: ${(props) => (props.selected ? '#FFCDD2' : '#fff')};
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: ${(props) => (props.selected ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ffe6e9;
  }
`;


