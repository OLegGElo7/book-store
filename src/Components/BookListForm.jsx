import React, { useState } from "react";
import Button from "./UI/Button/Button";
import InputSearch from "./UI/InputSearch/InputSearch";

const BookListForm = ({ createFormProps }) => {
  const [list, setList] = useState({ title: "", body: "" });

  const addNewList = (event) => {
    event.preventDefault();
    const newPost = {
      ...list,
      id: Date.now(),
    };
    createFormProps(newPost);
    setList({ title: "", body: "" });
  };

  return (
    <div className="form">
      <form>
        <div className="About__form-input">
          <InputSearch
            value={list.title}
            onChange={(e) => setList({ ...list, title: e.target.value })}
            type="text"
            placeholder="Заголовок книги..."
            style={{ marginBottom: 15 }}
          />
          <InputSearch
            value={list.body}
            onChange={(e) => setList({ ...list, body: e.target.value })}
            type="text"
            placeholder="Чем понравилась книга..."
          />
        </div>
        <Button onClick={addNewList}>Создать список</Button>
      </form>
    </div>
  );
};

export default BookListForm;
