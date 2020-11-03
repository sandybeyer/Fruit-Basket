import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDeck, Card } from "react-bootstrap";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="./fruitBsaket.jpg" />
            <Card.Body>
              <Card.Title>Fruit . Basket</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/FullBasket">$80 Fruit Basket</Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./snackBasket.jpg" />
            <Card.Body>
              <Card.Title>Snack . Basket</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/FullBasket">$80 Snack Basket</Card.Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./cheeseBasket.jpg" />
            <Card.Body>
              <Card.Title>Cheese . Basket</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="/FullBasket">$80 Wine Basket</Card.Link>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Home;
