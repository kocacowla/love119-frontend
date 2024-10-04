import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const token = response.headers.get('Authorization');
                console.log('Login successful. Token:', token);
                // 토큰을 로컬 저장소 등에 저장하는 로직 추가
            } else {
                const errorText = await response.text();
                console.error('Login failed:', errorText);
                // 로그인 실패 시 처리할 로직 추가
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <LoginContainer>
            <Header>
                <LogoWrapper>
                    <img src="/logo.png" alt="응급실 로고" />
                    <Title>응급실</Title>
                </LogoWrapper>
            </Header>

            <Form>
                <Label>아이디</Label>
                <Input
                    type="text"
                    placeholder="아이디 입력"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Label>비밀번호</Label>
                <Input
                    type="password"
                    placeholder="비밀번호 입력"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <LoginButton type="button" onClick={handleLogin}>
                    로그인
                </LoginButton>

                <SignUpButton>회원가입</SignUpButton>

                <FindInfoLink>아이디 · 비밀번호 찾기</FindInfoLink>
            </Form>
        </LoginContainer>
    );
}

// Styled Components (위에서 작성한 코드와 동일)

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
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

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    align-self: flex-start;
    margin-bottom: 5px;
    font-size: 14px;
    color: #888;
`;

const Input = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;

    &::placeholder {
        color: #ccc;
    }
`;

const LoginButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #6c63ff;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5548e8;
    }
`;

const SignUpButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: white;
    color: #6c63ff;
    font-size: 18px;
    border: 2px solid #6c63ff;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #6c63ff;
        color: white;
    }
`;

const FindInfoLink = styled.a`
    font-size: 14px;
    color: #6c63ff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
