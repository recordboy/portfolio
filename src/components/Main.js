import React, {useState, useEffect} from "react";
import './Main.scss';

const Main = () => {

  return (
    <div>
      <div className="gnb">상단 GNB 영역</div>

      <div className="main">
        <h2 className="title">향수</h2>
        <nav className="lnb">
          <ul className="lnb_inner">
            <li><a href="#">향수</a></li>
            <li><a href="#">향수 모두 보기</a></li>
            <li><a href="#">미라세티</a></li>
            <li><a href="#">카르스트</a></li>
            <li><a href="#">에레미아</a></li>
            <li><a href="#">로즈</a></li>
            <li><a href="#">휠</a></li>
            <li><a href="#">마라케시</a></li>
          </ul>
          <button type="button" className="btn">필터</button>
        </nav>

        <div className="content type01">
          <div className="info">
            <div className="title">로즈</div>
            <div className="text">로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인 생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한 향이 특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일, 그리고 열정에서 영감을 받았습니다.
            </div>
            <a href="#" className="link">로즈(2)</a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type02">
          <div className="info">
            <div className="title">로즈</div>
            <div className="text">로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인 생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한 향이 특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일, 그리고 열정에서 영감을 받았습니다.
            </div>
            <a href="#" className="link">로즈(2)</a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type03">
          <div className="info">
            <div className="title">로즈</div>
            <div className="text">로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인 생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한 향이 특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일, 그리고 열정에서 영감을 받았습니다.
            </div>
            <a href="#" className="link">로즈(2)</a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type04">
          <div className="info">
            <div className="title">로즈</div>
            <div className="text">로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인 생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한 향이 특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일, 그리고 열정에서 영감을 받았습니다.
            </div>
            <a href="#" className="link">로즈(2)</a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img">이미지 영역</div>
                <div className="title">로즈앙상블</div>
                <div className="price">2,500원</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;