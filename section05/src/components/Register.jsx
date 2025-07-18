// 간단한 회원가입
// 1. 이름, 2. 생년월일, 3. 국적, 4. 자기소개
import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //   inputRef.current.foucs();
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          onChange={onChange}
          placeholder={"이름"}
          value={input.name}
        />
      </div>

      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option>일본</option>
          <option>미국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </div>
  );
};

export default Register;
