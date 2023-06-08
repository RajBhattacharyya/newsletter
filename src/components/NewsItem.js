import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <Card>
          <Badge
            pill
            bg="warning"
            text="dark"
            style={{
              position: "absolute",
              zIndex: 1,
              right: 0,
              top: "-10px",
            }}
          >
            {source}
          </Badge>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <Card.Text>
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </Card.Text>
            <Button variant="dark" size="sm" href={newsUrl} target="_blank">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
}