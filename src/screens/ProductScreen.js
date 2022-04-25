import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductScreen() {
 
  let product_id = useParams();
  console.log("product",product_id)

  const product = products.find((p) => p._id === product_id.id);
  return <div>{product.name}</div>;
}

export default ProductScreen;
