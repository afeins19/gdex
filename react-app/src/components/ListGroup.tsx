import { Fragment } from "react";

function ListGroup() {
  // dynamic mapping (since no forloop exists)
  const items = ["New York", "Paris", "London", "Tokyo"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
