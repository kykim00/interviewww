import React, { useCallback, useEffect, useState } from "react";
import firebase from "../service/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export const Form = ({ auth }) => {
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("");

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  function getData() {
    const db = getDatabase();
    const starCountRef = ref(db, "frontend");
    onValue(starCountRef, (snapshot) => {
      const datas = snapshot.val();
      console.log(datas, datas.length);
      setDatas(datas);
      setCount(datas.length);
    });
  }

  function writeUserData() {
    const db = getDatabase();

    set(ref(db, `frontend/${count}`), {
      subject: subject,
      question: question,
    });
  }

  const navitate = useNavigate();
  const onLogout = useCallback(() => {
    auth.logout();
    navitate("/");
    // 여기서 수동적으로 Contact로 이동하기보다는,
  }, [auth]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header onLogout={onLogout} />
      <div>개수 : {count}</div>
      {/* {datas.map((data) => (
        <div>{data}</div>
      ))} */}
      <input type="text" onChange={onChangeSubject} />
      <input type="text" onChange={onChangeQuestion} />
      <button onClick={writeUserData}>Add question</button>
      <button onClick={getData}>get data</button>
    </div>
  );
};
