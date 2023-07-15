import { useEffect, useState } from "react";
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
      // console.log(result.body.getReader().then((done, value) => value));
    }
    // fetchData();
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
        </Route>

        <Route path="/grid" element={<GridMain />}>
          <Route path="/grid/default" element={<DefaultGrid />}></Route>
          <Route path="/grid/reactdatagrid" element={<GridEx />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
