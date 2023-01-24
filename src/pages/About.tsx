import React from "react";
import AboutImage from "../img/01.png";
function About() {
  return (
    <div className="h-screen bg-secondary flex justify-center">
      <div className="columns-2 gap-28 h-screen flex items-center">
        <div className="w-fit items-center">
          <div>
            <img src={AboutImage} width="750px" />
          </div>
        </div>
        <div className="w-fit">
          <div className="mb-16">
            <h1 className="text-3xl font-bold mb-5">샘플 신청하기</h1>
            <p className="mb-2">
              1. 회원가입 없이도 아래의 샘플 신청하기 버튼을 눌러 신청할 수
              있습니다. <br /> 필요한 사항 - 사업자 등록증 사본, 업체명, 성함,
              주소, 연락처 등 <br />* 첨부하신 사업자 등록증의 업종과 업태를
              확인 후, <br />
              카페 형태로 운영되는 사업자에 한해 샘플을 보내드립니다.
            </p>
            <p>
              2. 신청하신 샘플은 매주 화요일, 금요일에 일괄 발송합니다.
              <br />- 올드독, 잘 되어 가시나, 서울시네마 총 세종류의 블렌드와
              <br />
              디카페인 싱글오리진을 각 200g 단위로 발송합니다.
              <br />
              *추가 원두는 전화문의 부탁드립니다.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-5">기타 납품 문의</h1>
            <p className="mb-2">1. 홈페이지 문의 : WHOLESALE - NOTICE / Q&A</p>
            <p>
              2. 전화 문의 : 010-4504-1799 (평일 09:00 ~ 18:00 / 주말,공휴일
              휴무)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
