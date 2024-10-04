import React, { useState } from 'react';
import styled from 'styled-components';

export default function CommunityPost() {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: '@Huh!Eunmi',
      mbti: 'ENFJ',
      comment: '헉! 그럼 여자는요!??',
      liked: true,
    },
    {
      id: 2,
      username: '@hwaneeeee_1209',
      mbti: 'ISFP',
      comment: 'esfp나 enfj 남자한테 차이셨나요',
      liked: false,
    },
    {
      id: 3,
      username: '@Solo_girl',
      mbti: 'INFP',
      comment: '틀린 말만은 아닌데 그러면서도 잘해주는 애들 많아',
      liked: false,
    },
    {
      id: 4,
      username: '@NOTeasy',
      mbti: 'INTP',
      comment: '잇팁은 그렇게 느낄 수도',
      liked: false,
    },
  ]);

  const handleLikeComment = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, liked: !comment.liked } : comment
      )
    );
  };

  return (
    <Container>
      <Header>
        <BackButton>
          <img src="/backbtn.png"/>
        </BackButton>
        <Title>
          <img src="/logo.png"/>
          <div>응급실 커뮤니티</div>
        </Title>
      </Header>

      <PostContainer>
        <PostHeader>
          <ProfileImage src="/profile.png" alt="profile" />
          <PostInfo>
            <Username>esfp랑 enfj 남자는 믿고 걸러라 ㅋㅋㅋ</Username>
            <div className="nickname-wrapper">
              <UserId>@Mosol_A</UserId>
              <MBTITag>ISTJ</MBTITag>
            </div>

          </PostInfo>
        </PostHeader>

        <PostContent>
          하나같이 술 좋아하고 여자 좋아하고 친구 좋아함 걸모습은 번지르르하고 다정해보여서 여자들한테 인기는 많은데 만나게 돼도 실상은 속 빈 강정이다 ㅋㅋㅋ
        </PostContent>

        <PostFooter>
          <div className="time-wrapper">
            <PostTime>오후 9:37</PostTime>
            <PostTime>2024.09.26</PostTime>
            <PostStats>조회 1천회</PostStats>
          </div>
          <LikeSection>
            <HeartIcon><img src="/heart-active.png"/></HeartIcon> 348 likes
          </LikeSection>
        </PostFooter>
      </PostContainer>

      <CommentsContainer>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <CommentProfileImage src="/profile.png" alt="profile" />
            <CommentContent>
              <CommentHeader>
                <CommentUsername>{comment.username}</CommentUsername>
                <MBTITag>{comment.mbti}</MBTITag>
              </CommentHeader>
              <CommentText>{comment.comment}</CommentText>
            </CommentContent>
            <CommentActions>
              <ReplyButton><img src="/arrow.png"/>️</ReplyButton>
              <LikeButton onClick={() => handleLikeComment(comment.id)}>
                {comment.liked ? <img src="/heart-active.png"/> : <img src="/heart-disabled.png"/>}
              </LikeButton>
            </CommentActions>
          </Comment>
        ))}
      </CommentsContainer>

      <InputArea>
        <Input type="text" placeholder="그건 니 생각이고..." />
        <SendButton>⤴️</SendButton>
      </InputArea>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background: white;
  text-align: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  margin-right: 10px;
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
  margin-left: 10px;
  
  > img{
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const PostContainer = styled.div`
  background-color: white;
  //padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  .nickname-wrapper{
    display: flex;
    align-items: center;
  }
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 16px;
 
`;

const UserId = styled.div`
  font-size: 12px;
  color: gray;
  margin-right: 8px;
`;

const MBTITag = styled.div`
  background-color: #6c63ff;
  color: white;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 12px;
  margin-top: 2px;
  display: inline-block;
`;

const PostContent = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 20px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
  color: gray;
  padding: 20px;
  
  .time-wrapper{
    display: flex;
  }
`;

const PostTime = styled.div`
  margin-right: 10px;
`;

const PostStats = styled.div``;

const LikeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

const HeartIcon = styled.span`
  margin-right: 5px;
  
  > img{
    width: 20px;
  }
`;

const CommentsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const CommentProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CommentUsername = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const CommentText = styled.div`
  margin-top: 5px;
`;

const CommentActions = styled.div`
  display: flex;
  align-items: center;
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  
  > img{
    width: 18px;
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  
  > img{
    width: 18px;
    height: 18px;
  }
`;

const InputArea = styled.div`
  display: flex;
  padding: 10px;
  //background-color: white;
  //border-top: 1px solid #ddd;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  margin-right: 10px;
  font-size: 16px;
`;

const SendButton = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
`;
