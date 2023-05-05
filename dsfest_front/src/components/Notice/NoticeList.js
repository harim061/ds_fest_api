import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-grid-system';
import axios from 'axios';
import '../../css/NoticePage.css';
import default_img from '../../img/default_image.jpg';

import Pagination from 'react-js-pagination';

function NoticeList() {
    const [notice, setNotice] = useState([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/blog/')
            .then((response) => {
                setNotice(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    //pagination 구현
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const items = notice.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6);

    //공지 숫자만큼 페이지네이션 버튼 마진 주기 위한 코드

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            if (items.length <= 2) {
                containerRef.current.style.marginBottom = '350px';
            } else if (items.length <= 4) {
                containerRef.current.style.marginBottom = '180px';
            } else {
                containerRef.current.style.marginBottom = '50px';
            }
        } else {
            console.log('containerRef.current is null');
        }
    }, [items, containerRef]);

    // detail로 이동
    const onClickToDetail = (id) => {
        window.location.href = `/detail/${id}`;
    };
    return (
        <div className="ListContainer">
            {notice.length === 0 ? (
                <></>
            ) : (
                <div className="noticeCount">{notice.length}개의 공지</div>
            )}

            <Container>
                {notice.length === 0 ? (
                    <div className="noNotice" ref={containerRef}>
                        아직 작성된 공지가 없습니다.
                    </div>
                ) : (
                    <>
                        {notice.length === 1 ? (
                            <div ref={containerRef} className="row">
                                {items.map((review) => (
                                    <div
                                        key={items.id}
                                        className="col"
                                        onClick={() =>
                                            onClickToDetail(review.id)
                                        }
                                    >
                                        {review.images.length !== 0 ? (
                                            <img
                                                src={review.images[0].image}
                                                className="noticeImg"
                                            />
                                        ) : (
                                            <img
                                                src={default_img}
                                                className="noticeImg"
                                            ></img>
                                        )}

                                        <div className="noticeTitle">
                                            <div>{review.title}</div>
                                            <div className="invTitle">
                                                {review.title}
                                            </div>
                                        </div>
                                        <div className="bottomC">
                                            <div className="noticeDate">
                                                {review.created.slice(5, 10)}
                                            </div>
                                            {review.pinned_order !== 0 || '' ? (
                                                <div className="star">중요</div>
                                            ) : (
                                                <div className="noStar"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="row" ref={containerRef}>
                                {items.map((review) => (
                                    <div
                                        key={items.id}
                                        className="col"
                                        sm={6}
                                        xs={6}
                                        onClick={() =>
                                            onClickToDetail(review.id)
                                        }
                                    >
                                        {review.images.length !== 0 ? (
                                            <img
                                                src={review.images[0].image}
                                                className="noticeImg"
                                            />
                                        ) : (
                                            <img
                                                src={default_img}
                                                className="noticeImg"
                                            ></img>
                                        )}
                                        <div className="noticeTitle">
                                            <div>{review.title}</div>
                                        </div>
                                        <div className="bottomC">
                                            <div className="noticeDate">
                                                {review.created.slice(5, 10)}
                                            </div>

                                            {review.pinned_order !== 0 || '' ? (
                                                <div className="star">중요</div>
                                            ) : (
                                                <div className="noStar"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </Container>
            {notice.length === 0 ? (
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={notice.length + 1}
                    pageRangeDisplayed={5}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={handlePageChange}
                />
            ) : (
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={notice.length}
                    pageRangeDisplayed={5}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={handlePageChange}
                />
            )}
        </div>
    );
}

export default NoticeList;
