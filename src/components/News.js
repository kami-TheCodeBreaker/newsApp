import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SpinLoader from "./SpinLoader";

export default class News extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      nextBtnBgColor: "",
      dataLeft: true,
    };
  }
  async loadData() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    const data = await response.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }
  checkData() {
    if (
      this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)
    )
      return true;
    if (
      this.state.page ===
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      return false;
    }
    if (this.state.page <= 1) return false;
  }
  async handleNextClick() {
    if (this.checkData()) {
      this.setState({page:this.state.page+1}, this.loadData); 
    if (
        this.state.page + 1 ===
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
        this.setState({ nextBtnBgColor: "grey", dataLeft: false });
    }
  }
  async handlePrevClick() {
    this.setState({page:this.state.page-1,dataLeft:true,nextBtnBgColor:""}, this.loadData); 

  }
  async componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <div className="newsContainer ">
        {this.state.loading && <SpinLoader />}
        <h1 className="text-3xl font-semibold text-center mt-5">
          NewsMonkey - Top Headlines
        </h1>
        <div className="max-w-full flex justify-center">
          <div className="grid  grid-cols-3 w-max-fit gap-x-10 justify-center items-center">
            {this.state.loading ||
              this.state.articles.map((element) => {
                let {
                  title,
                  description,
                  url,
                  urlToImage,
                  publishedAt,
                  author,
                  source,
                } = element;
                return (
                  <NewsItem
                    key={url}
                    title={title}
                    description={description}
                    imageUrl={urlToImage}
                    newsUrl={url}
                    publishedAt={publishedAt}
                    author={author}
                    source={source.name}
                  />
                );
              })}
          </div>
        </div>
        <div className="mx-auto btns flex justify-between w-3/4 mb-3">
          <button
            className="text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            onClick={this.handlePrevClick.bind(this)}
            disabled={this.state.page === 1}
            style={
              this.state.page === 1
                ? { backgroundColor: "grey" }
                : { backgroundColor: "" }
            }
          >
            Previous
          </button>
          <button
            className=" text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            onClick={this.handleNextClick.bind(this)}
            disabled={!this.state.dataLeft}
            style={{ backgroundColor: this.state.nextBtnBgColor }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
