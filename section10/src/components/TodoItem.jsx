import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevprops, nextprops) => {
//   // 반환값에 따라 ,props 가 바뀌는지 안 바뀌는지 판단
//   // T -> props 바뀌지 않음 -> 리렌더링 X
//   // F -> props 바뀜 -> 리렌더링 ㅇ

//   if (prevprops.id !== nextprops.id) return false;
//   if (prevprops.isDone !== nextprops.isDone) return false;
//   if (prevprops.content !== nextprops.content) return false;
//   if (prevprops.date !== nextprops.date) return false;

//   return true;
// });

export default memo(TodoItem);
