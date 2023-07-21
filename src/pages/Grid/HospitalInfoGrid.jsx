import React from "react";

export default function HospitalInfoGrid({ data }) {
  return (
    <div>
      <h2>
        {data.year}년 {data.dvsd} 지역 병원 테이블
      </h2>
    </div>
  );
}
