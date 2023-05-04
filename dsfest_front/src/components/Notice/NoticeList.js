import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import '../../css/NoticePage.css';

function NoticeList() {
    const [page, setPage] = useState(1);
    const [notice, setNotice] = useState([]);
    const [containerRef, setContainerRef] = useState(null);
    const [marginTop, setMarginTop] = useState(50);
    const handlePageChange = (page) => {
        setPage(page);
    };

    useEffect(() => {
        axios
            .get('http://localhost:8000/review/')
            .then((response) => {
                setNotice(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);

    useEffect(() => {
        if (notice.length <= 4) {
            setMarginTop(200);
            console.log('200');
        } else {
            setMarginTop(50);
            console.log('50');
        }
    }, [notice]);

    const onClickToDetail = () => {
        window.location.href = '/detail';
        // 나중에 id 값 추가
    };
    return (
        <div className="ListContainer">
            <div className="noticeCount">{notice.length}개의 공지</div>

            <Container>
                {notice.length == 1 ? (
                    <Row>
                        {notice.map((review) => (
                            <Col
                                className="col"
                                sm={6}
                                xs={6}
                                onClick={onClickToDetail}
                            >
                                <div className="noticeImg"></div>
                                <div className="noticeTitle">
                                    <div>{review.content}</div>
                                    <div></div>
                                </div>
                                <div className="bottomC">
                                    <div className="noticeDate">2000.4.29</div>
                                    <div className="star">중요</div>
                                </div>
                            </Col>
                        ))}
                        <Col
                            className="col2"
                            sm={6}
                            xs={6}
                            onClick={onClickToDetail}
                        >
                            <div className="noticeImg"></div>
                            <div className="noticeTitle">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="bottomC">
                                <div className="noticeDate">2000.4.29</div>
                                <div className="star">중요</div>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        {notice.map((review) => (
                            <Col
                                className="col"
                                sm={6}
                                xs={6}
                                onClick={onClickToDetail}
                            >
                                <div className="noticeImg"></div>
                                <div className="noticeTitle">
                                    <div>{review.content}</div>
                                </div>
                                <div className="bottomC">
                                    <div className="noticeDate">2000.4.29</div>
                                    <div className="star">중요</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <Pagination
                style={{ marginTop: `${marginTop}px` }}
                ref={containerRef}
                className="pagination2"
                activePage={page}
                itemsCountPerPage={6} // 한 페이지랑 보여줄 아이템 갯수
                totalItemsCount={notice.length} // 총 아이템 갯수
                pageRangeDisplayed={5} // paginator의 페이지 범위
                prevPageText={'‹'} // "이전"을 나타낼 텍스트
                nextPageText={'›'} // "다음"을 나타낼 텍스트
                onChange={handlePageChange}
            />
        </div>
    );
}

export default NoticeList;
