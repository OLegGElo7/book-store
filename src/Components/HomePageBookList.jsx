import React from "react";
import HomePageBook from "./HomePageBook";
import "../style/HomePageBookList.scss";

const HomePageBookList = ({ booksProps }) => {
  return (
    <div className="BookList">
      {booksProps != undefined ? (
        booksProps.map((book) => (
          <HomePageBook bookPropsList={book} key={book.id} />
        ))
      ) : (
        <div className="BookList__undefined">
          <p>There is no such book!</p>
          {/*ВЕРНУТЬСЯ, ТЕКСТ В 1 СТОЛБЦЕ ГРИДА ЗАСТРЯЛ */}
        </div>
      )}
    </div>
  );
};

export default HomePageBookList;
