import React, { useState } from "react";
import { Table, Container, Dropdown, Form } from "react-bootstrap";

const Checkout = (props) => {
  const [sortOption, setSortOption] = useState("default");
  const [filterOption, setFilterOption] = useState("title");
  const [filterValue, setFilterValue] = useState("");

  const handleSortChange = (eventKey) => {
    setSortOption(eventKey);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  let products = props.products;

  if (filterValue) {
    products = products.filter((product) => {
      return product[filterOption]
        .toLowerCase()
        .includes(filterValue.toLowerCase());
    });
  }

  switch (sortOption) {
    case "priceAsc":
      products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "priceDesc":
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "titleAsc":
      products.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleDesc":
      products.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "memoryAsc":
      products.sort((a, b) => parseFloat(a.memory) - parseFloat(b.memory));
      break;
    case "memoryDesc":
      products.sort((a, b) => parseFloat(b.memory) - parseFloat(a.memory));

      break;
    default:
      break;
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <Form.Label className="mr-2 mb-0">Filter by:</Form.Label>
          <Form.Control
            as="select"
            value={filterOption}
            onChange={handleFilterOptionChange}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="memory">Memory</option>
          </Form.Control>
        </div>
        <Form.Control
          type="text"
          value={filterValue}
          placeholder={`Filter by ${filterOption}...`}
          onChange={handleFilterValueChange}
        />
      </div>
      <div className="d-flex justify-content-end mb-3">
        <Dropdown onSelect={handleSortChange}>
          <Dropdown.Toggle variant="secondary">
            Sort by {sortOption === "default" ? "Default" : sortOption}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="default">Default</Dropdown.Item>
            <Dropdown.Item eventKey="priceAsc">
              Price: Low to High
            </Dropdown.Item>
            <Dropdown.Item eventKey="priceDesc">
              Price: High to Low
            </Dropdown.Item>
            <Dropdown.Item eventKey="titleDesc">Title: A to Z</Dropdown.Item>
            <Dropdown.Item eventKey="titleAsc">Title: Z to A</Dropdown.Item>
            <Dropdown.Item eventKey="memoryAsc">
              Memory: Low to High
            </Dropdown.Item>
            <Dropdown.Item eventKey="memoryDesc">
              Memory: High to Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Released On</th>
            <th>Memory</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.releasedOn}</td>
              <td>{product.memory} GB</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Checkout;
