import React, { useState } from "react";
import "../style/AboutStore.scss";
import BookList from "./BookList";
import InputSearch from "./UI/InputSearch/InputSearch";
import Button from "./UI/Button/Button";
import BookListForm from "./BookListForm";
import axios from "axios";

const AboutStore = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Запиши заголовок книги",
      body: "Запиши почему понравилась книга",
    },
    {
      id: 2,
      title: "Запиши заголовок книги 2",
      body: "Запиши почему понравилась книга 2",
    },
    {
      id: 3,
      title: "Запиши заголовок книги 3",
      body: "Запиши почему понравилась книга 3",
    },
  ]);

  const createList = (newPost) => {
    setLists([...lists, newPost]);
  };

  const removeList = (list) => {
    setLists(lists.filter((itemList) => itemList.id !== list.id));
  };

  return (
    <main>
      <div className="App__wrapper">
        <div className="About__wrapper">
          <div className="About__preview">
            <div>
              <h1>New Releases This Week</h1>
              <p>
                It's time to update your reading list with some of the latest
                and greatest releases in the literary world. From heart-pumping
                thrillers to captivating memoirs, this week's new releases offer
                something for everyone
              </p>
            </div>
            <img src="\img\HomePage\Animation.svg" alt="HomePage"></img>
          </div>
          <div className="About__bookNotes">
            <h2>Book notes</h2>
            <BookListForm createFormProps={createList} />
            {lists.length !== 0 ? (
              <BookList remove={removeList} lists={lists} />
            ) : (
              <p> Посты не найдены! </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutStore;
