import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-grid-system';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import '../../css/NoticePage.css';

function NoticeList() {
    const [page, setPage] = useState(1);
    const [notice, setNotice] = useState([]);
    const handlePageChange = (page) => {
        setPage(page);
    };

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

    //공지 숫자만큼 페이지네이션 버튼 마진 주기 위한 코드

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            if (notice.length <= 2) {
                containerRef.current.style.marginBottom = '350px';
            } else if (notice.length <= 4) {
                containerRef.current.style.marginBottom = '180px';
            } else {
                containerRef.current.style.marginBottom = '50px';
            }
        } else {
            console.log('containerRef.current is null');
        }
    }, [notice, containerRef]);

    const onClickToDetail = (id) => {
        window.location.href = `/detail/${id}`;
        // 나중에 id 값 추가
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
                                {notice.map((review) => (
                                    <div
                                        className="col"
                                        onClick={() =>
                                            onClickToDetail(review.id)
                                        }
                                    >
                                        <img
                                            src={review.images[0].image}
                                            className="noticeImg"
                                        />
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
                                {notice.map((review) => (
                                    <div
                                        className="col"
                                        sm={6}
                                        xs={6}
                                        onClick={() =>
                                            onClickToDetail(review.id)
                                        }
                                    >
                                        <img
                                            src={review.images[0].image}
                                            className="noticeImg"
                                        />
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
            <Pagination
                activePage={page}
                itemsCountPerPage={6} // 한 페이지랑 보여줄 아이템 갯수
                totalItemsCount={notice.length + 1} // 총 아이템 갯수
                pageRangeDisplayed={5} // paginator의 페이지 범위
                prevPageText={'‹'} // "이전"을 나타낼 텍스트
                nextPageText={'›'} // "다음"을 나타낼 텍스트
                onChange={handlePageChange}
            />
        </div>
    );
}

export default NoticeList;
