import React from "react";
import BookItem from "./BookItem";
import "../style/BookList.scss";

const BookList = ({ lists, remove }) => {
  return (
    <div className="book__list">
      {lists.map((list, index) => (
        <BookItem
          remove={remove}
          number={index + 1}
          list={list}
          key={list.id}
        />
      ))}
    </div>
  );
};

export default BookList;
