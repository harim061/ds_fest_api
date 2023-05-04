import React from 'react';
import eposter from '../../img/take3.png';
import '../../css/EventPage.css';

function EventPoster() {
    return (
        <div className="sectionbody1">
            <img
                src={eposter}
                className="posterimg"
                alt="take3 포스터 입니다"
            />
            <div className="detailsection">
                <div className="subtitle1">낭만에 대하여</div>
                <div className="detailtext1">
                    <p>2023 근화제 Take :의</p>
                    <p>마지막 날을 장식할, 낭만!</p>
                    <p>낭만에 대하여는 덕성여자대학교 학우분들의</p>
                    <p>‘낭만’을 공유하는 이벤트입니다.</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
}

export default EventPoster;
