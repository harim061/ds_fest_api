import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Pagination from 'react-js-pagination';
import '../../css/NoticePage.css';

function NoticeList() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const onClickToDetail = () => {
        window.location.href = '/detail';
        // 나중에 id 값 추가
    };
    return (
        <div className="ListContainer">
            <div className="noticeCount">6개의 게시물</div>
            <Container>
                <Row>
                    <Col
                        className="col"
                        sm={6}
                        xs={6}
                        onClick={onClickToDetail}
                    >
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                    <Col className="col" sm={6} xs={6}>
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                    <Col className="col" sm={6} xs={6}>
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                    <Col className="col" sm={6} xs={6}>
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                    <Col className="col" sm={6} xs={6}>
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                    <Col className="col" sm={6} xs={6}>
                        <div className="noticeImg"></div>
                        <div className="noticeTitle">
                            <div>제목임당~</div>
                            <div></div>
                        </div>
                        <div className="bottomC">
                            <div className="noticeDate">2000.4.29</div>
                            <div className="star">중요</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Pagination
                activePage={page}
                itemsCountPerPage={6} // 한 페이지랑 보여줄 아이템 갯수
                totalItemsCount={100} // 총 아이템 갯수
                pageRangeDisplayed={5} // paginator의 페이지 범위
                prevPageText={'‹'} // "이전"을 나타낼 텍스트
                nextPageText={'›'} // "다음"을 나타낼 텍스트
                onChange={handlePageChange}
            />
        </div>
    );
}

export default NoticeList;
