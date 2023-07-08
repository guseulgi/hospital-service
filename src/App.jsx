import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  useEffect(() => {
    // API 활용 심의 중
    async function fetchData() {
      const basicUrl = "http://apis.data.go.kr/1352000/ODMS_STAT_14";
      const result = await fetch(
        `${basicUrl}/callStat14Api?serviceKey=${
          import.meta.env.VITE_API_KEY
        }&numOfRows=10&pageNo=1&apiType=JSON&year=2019&dvsd=경기`
      );
      console.log(result.body.getReader().then((done, value) => value));
    }
    fetchData();
  }, []);

  return (
    <>
      <p>테스트 페이지</p>
    </>
  );
}

export default App;
