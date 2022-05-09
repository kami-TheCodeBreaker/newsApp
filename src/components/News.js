import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SpinLoader from "./SpinLoader";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static propTypes = {};

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      nextBtnBgColor: "",
      dataLeft: true,
    };
    props.setProgress(20);
  }
  async loadData() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.props.setProgress(60);
    this.setState({ loading: true });
    const data = await response.json();
    this.props.setProgress(100);
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
      this.setState({ page: this.state.page + 1 }, this.loadData);
      if (
        this.state.page + 1 ===
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
        this.setState({ nextBtnBgColor: "grey", dataLeft: false });
    }
  }
  async handlePrevClick() {
    this.setState(
      { page: this.state.page - 1, dataLeft: true, nextBtnBgColor: "" },
      this.loadData
    );
  }
  async componentDidMount() {
    this.loadData();
  }
  fetchMoreData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );
    const data = await response.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <div className="newsContainer ">
        {this.state.loading && <SpinLoader />}
        <h1 className="text-3xl font-semibold text-center mt-5">
          NewsMonkey - Top Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.checkData()}
          loader={<SpinLoader />}
        >
          <div className="max-w-full flex justify-center">
            <div className="grid  grid-cols-3 w-max-fit gap-x-10 justify-center items-center">
              {this.state.articles.map((element) => {
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
        </InfiniteScroll>
      </div>
    );
  }
}
