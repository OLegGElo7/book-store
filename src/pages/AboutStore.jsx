import React, { useState } from "react";
import "../style/AboutStore.scss";
import BookList from "../Components/BookList";
import BookListForm from "../Components/BookListForm";
import Modal from "../Components/UI/Modal/Modal";
import Button from "../Components/UI/Button/Button";

const AboutStore = () => {
  const [lists, setLists] = useState([]);
  const [modal, setModal] = useState(false);

  const createList = (newPost) => {
    setLists([...lists, newPost]);
    setModal(false);
  };

  const removeList = (list) => {
    setLists(lists.filter((itemList) => itemList.id !== list.id));
  };

  return (
    <main>
      <div className="App__wrapper">
        <div className="About__wrapper">
          <div className="About__preview">
            <div className="About__title">
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
            <Button onClick={() => setModal(true)}>123</Button>
            <Modal visible={modal} setVisible={setModal}>
              <BookListForm createFormProps={createList} />
            </Modal>
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
