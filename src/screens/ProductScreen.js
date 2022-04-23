import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductScreen(props) {
 
  let params = useParams();
  console.log(JSON.stringify(params))

  
  //const product = products.find((p) => p._id === params.id);
  return <div>product</div>;
}

export default ProductScreen;
