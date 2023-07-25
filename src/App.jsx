import { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Post/Write";
import NotFound from "./pages/NotFound";
import PostList from "./pages/Post/List";
import ChartList from "./pages/Chart/List";
import PostMain from "./pages/Post/index";
import ChartMain from "./pages/Chart/index";
import GridMain from "./pages/Grid/index";
import Pie from "./pages/Chart/Pie";
import Line from "./pages/Chart/Line";
import DefaultGrid from "./pages/Grid/DefaultGrid";
import CustomLineChart from "./rechart/CustomLineChart";
import GridEx from "./reactdatagrid/GridEx";
import LineChartEx from "./pages/reactchartjs2/LineChartEx";
import "./App.css";
import { BarChartEx } from "./pages/reactchartjs2/BarChartEx";
import GridEx2 from "./reactdatagrid/GridEx2";
import GridFlag from "./reactdatagrid/GridFlag";
import HospitalInfoGrid from "./pages/Grid/HospitalInfoGrid";

function App() {
  const hospitalInfoRef = useRef([]);
  const [hospitalInfo, setHospitalInfo] = useState([]);
  const location = ["서울", "경기", "강원", "부산", "전남", "경북", "경남", "전북", "충북", "충남"];
  // const selectYear = ["2014", "2015", "2016", "2017", "2018", "2019"];
  const selectYear = "2019";

  useEffect(() => {
    async function fetchData() {
      const basicUrl = "http://apis.data.go.kr/1352000/ODMS_STAT_14";
      for (let i = 0; i < location.length; i++) {
        await fetch(
          `${basicUrl}/callStat14Api?serviceKey=${
            import.meta.env.VITE_API_KEY
          }&numOfRows=10&pageNo=1&apiType=JSON&year=${selectYear}&dvsd=${location[i]}`
        )
          .then((data) => data.json())
          .then((res) => {
            // setHospitalInfo([res.items[0]]); // 읽어온 병원 정보를 저장
            hospitalInfoRef.current.push(res.items[0]);
          });

        if (i === location.length - 1) {
          // 정보를 읽어오는 시간이 너무 길음
          console.log("?");
          setHospitalInfo(hospitalInfoRef.current);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/post" element={<PostMain />}>
          <Route path="/post/list" element={<PostList />}></Route>
          <Route path="/post/write" element={<Write />}></Route>
        </Route>

        <Route path="/chart" element={<ChartMain />}>
          <Route path="/chart/list" element={<ChartList />}></Route>
          {/* <Route path="/chart/list/pie" element={<Pie />}></Route> */}
          {/* <Route path="/chart/list/line" element={<Line />}></Route> */}
          <Route path="/chart/list/line" element={<CustomLineChart />}></Route>
          <Route path="/chart/list/line2" element={<LineChartEx />}></Route>
          <Route path="/chart/list/bar" element={<BarChartEx />}></Route>
        </Route>

        <Route path="/grid" element={<GridMain />}>
          <Route path="/grid/default" element={<DefaultGrid />}></Route>
          <Route path="/grid/reactdatagrid" element={<GridEx2 />}></Route>
          <Route path="/grid/flagGrid" element={<GridFlag />}></Route>
          <Route path="/grid/hospitalInfo" element={<HospitalInfoGrid data={hospitalInfo} />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
