import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/EventPage.css';

function EventCom() {
    const [nangmans, setNangmans] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/review/')
            .then((response) => {
                setNangmans(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, []);
    return (
        <div className="sectionbody3">
            <div className="detailsection">
                <div className="subtitle1">덕우들의 낭만</div>
            </div>
            <div className="commentsection">
                <div className="writeinfo">
                    <div className="writername">나덕우</div>
                    <div className="writedate">2023.5.19.</div>
                </div>
                <div className="comment">
                    소설의 주인공. 왼손잡이이고 얼금뱅이다. 한 평생 장돌뱅이로
                    살았으나 변변한 재산도 여자도 없는 늙은이로 아직도
                    장돌뱅이로 떠돈다. 젊은 시절에는 돈을 조금 벌기도 했지만
                    노름으로 죄다 잃고 가족이라곤 늙은 나귀 한 마리뿐이라 이
                    나귀를 극진히 아낀다. 이 나귀도 노름으로 팔아치우려다가
                    그만두고 후일 노름빚 때문에 도망할 때 나귀를 데리고 가면서
                    너를 안 팔아 다행이라고 울기까지 했다고 한다. 나귀도 허
                    생원을 극진히 따르는데, 아이들이 짖궂은 장난을 치며 나귀를
                    괴롭히자 허생
                </div>
                <div className="line3"></div>
                <div className="writeinfo">
                    <div className="writername">나덕우</div>
                    <div className="writedate">2023.5.19.</div>
                </div>
                <div className="comment">
                    소설의 주인공. 왼손잡이이고 얼금뱅이다. 한 평생 장돌뱅이로
                    살았으나 변변한 재산도 여자도 없는 늙은이로 아직도
                    장돌뱅이로 떠돈다. 젊은 시절에는 돈을 조금 벌기도 했지만
                    노름으로 죄다 잃고 가족이라곤
                </div>
                <div className="line3"></div>
                <ul>
                    {nangmans.map((review) => (
                        <div className="comment" nakey={review.id}>
                            <li>{review.content}</li>
                            <div className="line3"></div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventCom;
