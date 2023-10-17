import React from "react";
import "../style/HomePageBook.scss";

const HomePageBook = (bookProps) => {
  return (
    <div className="book">
      <div className="book__img">
        <img
          src={
            bookProps.bookPropsList.volumeInfo.imageLinks &&
            bookProps.bookPropsList.volumeInfo.imageLinks.smallThumbnail
          }
        ></img>
      </div>
      <div className="book__title">
        <p>{bookProps.bookPropsList.volumeInfo.authors}</p>
        <h3>{bookProps.bookPropsList.volumeInfo.title}</h3>
        <b>{bookProps.bookPropsList.volumeInfo.categories}</b>
      </div>
    </div>
  );
};

export default HomePageBook;
