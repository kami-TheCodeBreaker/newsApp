import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import SpinLoader from "./SpinLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const loadData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    props.setProgress(60);
    setLoading(true);
    const data = await response.json();
    props.setProgress(100);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };
  const checkData = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) return true;
    if (page === Math.ceil(totalResults / props.pageSize)) {
      return false;
    }
    if (page <= 1) return false;
  };
  // const handleNextClick=async()=> {
  //   if (checkData()) {
  //     setPage(page + 1);
  //     loadData();
  //     if (
  //      page + 1 ===
  //       Math.ceil(totalResults / props.pageSize)
  //     )
  //     setNextBtnBgColor('grey');
  //     setDataLeft(false);
  //   }
  // }
  // const handlePrevClick=async()=> {
  //   setPage(page - 1);
  //   setDataLeft(true);
  //   nextBtnBgColor('');
  //   loadData();
  // }
  useEffect(() => {
    // other code
    loadData();
    props.setProgress(10);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    );
    const data = await response.json();
    setArticles(articles.concat(data.articles));
    setPage(page + 1);
  };
  return (
    <div className="newsContainer ">
      {loading && <SpinLoader />}
      <h1 className="text-3xl font-semibold text-center mt-20">
        NewsMonkey - Top Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={checkData()}
        loader={<SpinLoader />}
      >
        <div className="max-w-full flex justify-center">
          <div className="grid  grid-cols-3 w-max-fit gap-x-10 justify-center items-center">
            {articles.map((element) => {
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
};

export default News;
