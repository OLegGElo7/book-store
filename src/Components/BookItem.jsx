import React from "react";
import Button from "./UI/Button/Button";
import "../style/BookItem.scss";

const BookItem = (BookItemProps) => {
  return (
    <div className="bookItem">
      <div className="bookItem__content">
        <strong>{BookItemProps.number}</strong>
        <div>
          <div>{BookItemProps.list.title}</div>
          <div>{BookItemProps.list.body}</div>
        </div>
      </div>
      <div className="bookItem__btn">
        {/* <Button style={{ marginBottom: 15 }}>Delete</Button>*/}
        <Button onClick={() => BookItemProps.remove(BookItemProps.list)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
