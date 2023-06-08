import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updateNews = async ()=>{
    props.setProgess(10)
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=1&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgess(30);
    let parsedData = await data.json();
    props.setProgess(60);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgess(100);
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsLetter`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className="text-center" style={{margin: "90px 0px 35px"}}>
          NewsLetter - Top {capitalize(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <Container my={3}>
            <Row>
              {articles.map((element) => {
                return (
                  <Col md={4} key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description? element.description: null}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://im.indiatimes.in/content/23/Jun/1_647ddd463c3f1.png"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "anonymous"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};