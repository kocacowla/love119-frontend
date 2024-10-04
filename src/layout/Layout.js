// components/Layout.js
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <Container>
            {children}
            <NavBar>
                <NavItem href="/">
                    <img src="/home.png" alt="홈" />
                    <span>홈</span>
                </NavItem>
                <NavItem href="/emergency">
                    <img src="/chat.png" alt="연락솔루션" />
                    <span>연락솔루션</span>
                </NavItem>
                <NavItem href="/community">
                    <img src="/community.png" alt="커뮤니티" />
                    <span>커뮤니티</span>
                </NavItem>
                <NavItem href="/login">
                    <img src="/user.png" alt="마이페이지" />
                    <span>마이페이지</span>
                </NavItem>
            </NavBar>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px 0;
    border-top: 1px solid #ddd;
`;

const NavItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #4a4a4a;

    img {
        width: 24px;
        height: 24px;
        margin-bottom: 5px;
    }

    span {
        font-size: 12px;
    }

    &:hover {
        color: #000;
    }
`;
