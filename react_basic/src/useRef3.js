import { useState, useRef } from "react";

export default function UseRefBoard() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState([]);

  const writerRef = useRef();
  const titleRef = useRef();

  const onChange = (e) => {
    setWriter(e.target.value);
  };

  const checkInputValue = () => {
    if (writer.trim().length === 0) {
      writerRef.current.focus();
      return false;
    }
    if (title.trim().length === 0) {
      titleRef.current.focus();
      return false;
    }
    return true;
  };

  const addComment = () => {
    if (!checkInputValue()) return;
    const newComment = {
      writer: writer,
      title: title,
    };
    setComments([...comments, newComment]);
    setWriter("");
    setTitle("");

    /* if (writerRef.current.value === "") {
      writerRef.current.focus();
    } else if (titleRef.current.value === "") {
      titleRef.current.focus();
    } else {
      const newComment = {
        writer: writer,
        title: title,
      };
      setComments([...comments, newComment]);
      setWriter("");
      setTitle("");
    }*/
  };
  return (
    <>
      <fieldset>
        <form>
          <label htmlFor="writer">작성자: </label>
          <input
            type="text"
            id="writer"
            value={writer}
            ref={writerRef}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            value={title}
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="button" onClick={addComment}>
            작성
          </button>
        </form>
      </fieldset>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* [{writer, titer}, {writer, titer}, {writer, titer}] */}
          {comments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
