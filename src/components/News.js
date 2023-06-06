import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
  };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&country=in&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&country=in&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1
    })
  }
  handleNextClick = async ()=>{
    console.log("next")
    if(this.state.page + 1 <= Math.ceil(this.state.totalResults/20)){
      let url = `https://newsapi.org/v2/top-headlines?apiKey=fc36079860474865bc569ee53665374e&country=in&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json()
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1
      })
    }
  }

  render() {
    return (
      <>
        <Container my={3}>
      <h1 className='my-3'>NewsLetter - Top Headlines</h1>
      <Row>
        {this.state.articles.map((element)=>{
          return(
            <Col md={4} key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://im.indiatimes.in/content/2023/Jun/1_647ddd463c3f1.png"} newsUrl={element.url} />
            </Col>
          )
        })}
      </Row>
      </Container>
      <Container className='d-flex justify-content-between'>
        <Button variant='dark' disabled={this.state.page<=1} onClick={this.handlePrevClick}> &larr; Previous</Button>
        <Button variant='dark' onClick={this.handleNextClick} >Next &rarr; </Button>
      </Container>
      </>
      
    )
  }
}
