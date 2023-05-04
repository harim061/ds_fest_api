import React from 'react';
import '../../css/NoticePage.css';
import styled from 'styled-components';

const NoticeImg = styled.img`
    width: 310px;
    height: 310px;
    border-radius: 10px;
    background-color: grey;
    align-self: center;
`;
function NoticeDetail() {
    const onClickToList = () => {
        window.location.href = '/notice';
    };
    return (
        <div className="insertBody">
            <div className="detailCotainer">
                <div className="notice">공지사항</div>

                <NoticeImg />
                <div className="detailC1">
                    <div>
                        <div className="detailTitle">공지사항제목</div>

                        <div className="noticeDate2">2000.4.29</div>
                    </div>
                    <div className="star">중요</div>
                </div>
                <div className="detailContent">
                    동해물과 백두산이 마르고 닳도록하느님이 보우하사 우리나라
                    만세무궁화 삼천리 화려 강산대한사람 대한으로 길이
                    보전하세남산 위에 저 소나무 철갑을 두른듯바람서리 불변함은
                    우리 기상일세무궁화 삼천리 화려 강산대한사람 대한으로 길이
                    보전하세가을 하늘 공활한데 높고 구름 없이밝은 달은 우리 가슴
                    일편단심일세무궁화 삼천리 화려 강산대한사람 대한으로 길이
                    보전하세이 기상과 이 마음으로 충성을 다하여괴로우나 즐거우나
                    나라사랑하세무궁화 삼천리 화려 강산대한사람 대한으로 길이
                    보전하세 접기동해물과 백두산이 마르고 닳도록하느님이
                    보우하사 우리나라 만세무궁화 삼천리 화려 강산대한사람
                    대한으로 길이 보전하세남산 위에 저 소나무 철갑을
                    두른듯바람서리 불변함은 우리 기상일세무궁화 삼천리 화려
                    강산대한사람 대한으로 길이 보전하세가을 하늘 공활한데 높고
                    구름 없이밝은 달은 우리 가슴 일편단심일세무궁화 삼천리 화려
                    강산대한사람 대한으로 길이 보전하세이 기상과 이 마음으로
                    충성을 다하여괴로우나 즐거우나 나라사랑하세무궁화 삼천리
                    화려 강산대한사람 대한으로 길
                </div>
                <div className="goList" onClick={onClickToList}>
                    목록으로
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;
