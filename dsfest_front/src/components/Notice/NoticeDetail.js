import React, { useEffect, useRef, useState } from 'react';
import '../../css/NoticePage.css';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const NoticeImg = styled.img`
    width: 310px;
    height: 310px;
    border-radius: 10px;
    background-color: grey;
    align-self: center;
`;

function NoticeDetail() {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();

    const onClickToList = () => {
        window.location.href = '/notice';
    };

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/blogs/${id}`)
            .then((response) => {
                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            if (
                (detail.body?.replace(/<br\s*\/?>/gm, '\n') || '').length <= 200
            ) {
                bodyRef.current.style.marginTop = '350px';
            } else {
                bodyRef.current.style.marginTop = '100px';
            }
        } else {
            console.log('bodyRef.current is null');
        }
    }, [detail, bodyRef]);

    const settings = {
        className: 'slickP',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="insertBody2">
            <div className="detailCotainer">
                <div className="notice">공지사항</div>
                <Slider {...settings}>
                    {(detail.images || []).map((review) => (
                        <NoticeImg src={review.image} />
                    ))}
                </Slider>

                <div className="detailC1">
                    <div>
                        <div className="detailTitle">{detail.title}</div>

                        {detail && detail.created && (
                            <div className="noticeDate2">
                                {detail.created.slice(5, 10)}
                            </div>
                        )}
                    </div>
                    {detail.pinned_order !== 0 || '' ? (
                        <div className="star">중요</div>
                    ) : (
                        <div className="noStar"></div>
                    )}
                </div>
                <div className="detailContent">{detail.body}</div>
                <div className="goList" onClick={onClickToList} ref={bodyRef}>
                    목록으로
                </div>
            </div>
        </div>
    );
}

export default NoticeDetail;
