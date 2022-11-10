import React, { useState } from 'react';
import './MainKhj.scss';

export default function MainKhj() {
  const [commentArray, setCommentArray] = useState([]); //새로운 초기값 빈배열
  const [commentValue, setCommentValue] = useState('');

  const saveComment = e => {
    setCommentValue(e.target.value);
  };
  // const newComment = () => {
  //   const newArray = [...commentArray];{
  //   //새로운 배열을 복사하고 복사한 배열에다가 value값을 계속 push 해줘서 넣음.
  //   //넣은 것들을 댓글창에다가 하나씩 넣어준다.
  //   //map으로 넣는법은?

  //   newArray.push(commentValue);
  //   setCommentArray(newArray);
  // };

  // const inputComment = () => {
  //   newArray.map((comment, idx) => {
  //     return <div key={idx}>{comment}</div>;
  //   })
  // }

  const inputComment = () => {
    setCommentArray([...commentArray, commentValue]);
    setCommentValue('');
  };

  // const commentDelete = targetId => {
  //   // const newComment = commentArray.filter(e => e.id !== targetId);
  //   setCommentArray(commentArray.filter(Comment()=>{
  //     return Comment.targetId !== targetId;
  //   }));
  // };

  /*{ {commentArray.map((comment, idx) => (
                <div className="ment1" key={idx}>
                  {comment}
                  <button className="commentDelete" >x</button>
                  <button className="commentChange" >o</button>
                </div> }*/

  return (
    <div className="Maincontainer">
      <div className="navbox">
        <nav className="navigation">
          <div className="leftbox">
            <img
              className="logo"
              src="/images/Kimhojoon/instagram (1).png"
              alt="로고이미지"
            />
            <h1 className="Mainwestagram">Westagram</h1>
          </div>
          <div className="centerbox">
            <input className="searchbar" type="text" placeholder="검색" />
          </div>
          <div className="rightbox">
            <img
              className="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
            <img
              className="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
            <img
              className="profile"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
            />
          </div>
        </nav>
      </div>

      <div id="Maincontainer" className="mainpage">
        <section className="mainfeed">
          <div className="feed">
            <div className="id">
              <div className="profileimg1">
                <img
                  className="realimg1"
                  src="/images/Kimhojoon/profile.jpg"
                  alt="프로필 이미지"
                />
              </div>
              <div className="myname">hzoxjcnv</div>
              <div className="point3">icon</div>
            </div>
            <div className="feedimg1">
              <img
                className="feedimg2"
                src="/images/Kimhojoon/IMG_2165.jpg"
                alt="피드 이미지"
              />
            </div>
            <div className="iconbox">
              <div className="iconleft">
                <div className="hearticon icon">
                  <img
                    className="hearticon real"
                    src="/images/Kimhojoon/feedheart.png"
                    alt=""
                  />
                </div>
                <div className="commenticon icon">
                  <img
                    className="commenticon real"
                    src="/images/Kimhojoon/comment.png"
                    alt=""
                  />
                </div>
                <div className="sendicon icon">
                  <img
                    className="sendicon real"
                    src="/images/Kimhojoon/send (3).png"
                    alt=""
                  />
                </div>
              </div>
              <div className="saveicon icon">
                <img
                  className="saveicon real"
                  src="/images/Kimhojoon/bookmark.png"
                  alt=""
                />
              </div>
            </div>
            <div className="feedment">
              <div className="commentimg">
                <img
                  className="profileimg2"
                  src="/images/Kimhojoon/IMG_2165.jpg"
                  alt="프로필 이미지"
                />
              </div>
              <p>hzoxjcnv님 외 10명이 좋아합니다.</p>
            </div>
            <div className="mentcontainer">
              <div className="ment1">
                hzoxjcnv 위워크에서 진행한 탁구 클래스
              </div>
              <div className="ment2">
                hzoxjcnv 위워크에서 진행한 탁구 클래스
              </div>
              {commentArray.map((comment, idx) => (
                <div className="ment1" key={idx}>
                  {comment}
                  <button
                    data-index={idx}
                    onClick={e => {
                      console.log(e.target.dataset.index);
                    }}
                  >
                    x
                  </button>
                  <button>o</button>
                </div>
              ))}
            </div>
            <div className="comment">
              <input
                className="commentinput"
                type="text"
                placeholder="댓글달기..."
                onChange={saveComment}
                value={commentValue}
              />

              <button
                className="commentbtn"
                disabled={commentValue.length > 0 ? false : true}
                onClick={inputComment}
              >
                게시
              </button>
            </div>
          </div>
        </section>
        <section className="rightfeed">
          <div className="idtext">
            <div className="myprofile">
              <img
                className="myprofilereal"
                src="/images/Kimhojoon/profile.jpg"
                alt="프로필 이미지"
              />
            </div>
            <div className="idname">
              hzoxjcnv
              <br />
              김호준
            </div>
          </div>
          <div className="story">
            <div className="storytext">
              <div className="storytext">스토리</div>
              <div className="allview">모두 보기</div>
            </div>
            <div className="storybox">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="myid">hzoxjcnv</div>
            </div>
            <div className="storybox">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="myid">hzoxjcnv</div>
            </div>
            <div className="storybox">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="myid">hzoxjcnv</div>
            </div>
            <div className="storybox">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="myid">hzoxjcnv</div>
            </div>
          </div>
          <div className="recommend">
            <div className="recommendtext">
              <div>회원님을 위한 추천</div>

              <div>모두 보기</div>
            </div>
            <div className="recommendlist">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="recommendid">hzoxjcnv</div>
              <div className="follow">팔로우</div>
            </div>
            <div className="recommendlist">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="recommendid">hzoxjcnv</div>
              <div className="follow">팔로우</div>
            </div>
            <div className="recommendlist">
              <div className="storyimg">
                <img
                  className="storyreal"
                  src="/images/Kimhojoon/profile.jpg"
                  alt=""
                />
              </div>
              <div className="recommendid">hzoxjcnv</div>
              <div className="follow">
                <a>팔로우</a>
              </div>
            </div>
          </div>
          <div className="footer">2022 INSTAGRAM hzoxjcnv</div>
        </section>
      </div>
    </div>
  );
}
