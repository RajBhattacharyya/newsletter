import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>
              {description}...
            </Card.Text>
            <Button variant="dark" size='sm' href={newsUrl} target='_blank'>Read More</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


//fc36079860474865bc569ee53665374e