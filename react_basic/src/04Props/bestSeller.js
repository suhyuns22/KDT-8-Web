import "./App.css";
import book from "./book.jpeg";

function BestSeller(props) {
  return (
    <div className="bookbg">
      <h1 className="bestTitle">이번주 베스트셀러</h1>
      <img className="bookimg" src={book}></img>
      <div className="booktitle">{props.title} </div>
      <div className="booksub">저자: {props.author}</div>
      <div className="booksub">판매가: {props.price}</div>
      <div className="booksub">구분: {props.type}</div>
    </div>
  );
}

export default BestSeller;
