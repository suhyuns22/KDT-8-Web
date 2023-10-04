import { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    author: "",
    title: "",
    data: [],
  };

  write = () => {
    const { author, title } = this.state;
    if (author.trim() !== "" && title.trim() !== "") {
      const newData = [...this.state.data, { author, title }];
      this.setState({ data: newData, author: "", title: "" });
    }
  };

  render() {
    return (
      <>
        <div className="box1">
          <span>
            작성자 :{" "}
            <input
              type="text"
              placeholder="작성자"
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
            />
          </span>
          <span>
            제목 :{" "}
            <input
              type="text"
              placeholder="제목"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </span>
          <button onClick={this.write}>작성</button>
        </div>

        <select>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input className="searchBar" type="text" placeholder="검색어" />
        <button onClick={this.search}>검색</button>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Search;
