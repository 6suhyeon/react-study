import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 생성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 New 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={
          <Button
            text={"<"}
            onClick={() => {
              console.log("< 클릭");
            }}
          />
        }
        rightChild={
          <Button
            text={">"}
            onClick={() => {
              console.log("> 클릭");
            }}
          />
        }
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
