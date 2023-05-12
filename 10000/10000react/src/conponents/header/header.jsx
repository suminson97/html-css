import React from "react";
import title from "../../images/title.png";
import subTitle from "../../images/txt_subtitle.png";
import "./header.css";

export default function header() {
  return (
    <header>
      <h1 className="tit-law">
        <img src={title} alt="1만시간의법칙" className="img-tit" />
      </h1>
      <img
        src={subTitle}
        alt="연습은 어제의 당신보다 당신을 더 낫게만든다."
        className="img-txt"
      />
      <p className="txt-desc">
        {" "}
        <strong className="tit-desc">1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  );
}
