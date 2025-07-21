import "./App.css";
import { Routes, Route, Link, useNavigate, data } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번일기",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번일기",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: "3번일기",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));

    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
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

      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        생성 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 1, "수정");
        }}
      >
        수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        삭제 테스트
      </button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
