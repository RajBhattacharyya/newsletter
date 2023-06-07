import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&category=${this.props.category}&country=${this.props.country}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&category=${
      this.props.category
    }&country=${this.props.country}&page=${this.state.page - 1}&pageSize=${
      this.props.pageSize
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&category=${
      this.props.category
    }&country=${this.props.country}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <Container my={3}>
          <h1 className="my-3 text-center">
            NewsLetter - Top {this.props.category} headlines
          </h1>
          {this.state.loading && <Spinner />}
          <Row>
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <Col md={4} key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
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
        <Container className="d-flex justify-content-between">
          <Button
            variant="dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </Button>
          <Button
            variant="dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </Button>
        </Container>
      </>
    );
  }
}
