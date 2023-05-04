import React from 'react';
import '../css/NoticePage.css';
import NoticeList from '../components/Notice/NoticeList';

function NoticePage() {
    return (
        <div className="insertBody">
            <div className="eventtitle">공지사항</div>
            <NoticeList />
        </div>
    );
}

export default NoticePage;
