import { useEffect, useState } from "react";
import Layout from "./Layout";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Write from "./pages/Post/Write";
import NotFound from "./pages/NotFound";
import PostList from "./pages/Post/PostList";
import List from "./pages/Chart/List";

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
    // fetchData();
  }, []);

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/post/list" element={<PostList />}></Route>
        <Route path="/post/write" element={<Write />}></Route>
        <Route path="/chart/list" element={<List />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
