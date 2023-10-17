import React, { useEffect, useState } from "react";
import "../style/HomePage.scss";
import InputSearch from "../Components/UI/InputSearch/InputSearch";
import ButtonInput from "../Components/UI/ButtonInput/ButtonInput";
import axios from "axios";
import HomePageBookList from "../Components/HomePageBookList";
import SortSelect from "../Components/UI/Select/SortSelect";
import Loading from "../Components/UI/Loading/Loading";
import postService from "../API/PostService";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [isBooksLoading, setIsBooksLoading] = useState(false);

  async function fetctBooks(event) {
    event.preventDefault();
    setIsBooksLoading(true);
    const books = await postService.googleBooks(search);
    setBooks(books);
    setSearch(search);
    setIsBooksLoading(false);
  }

  return (
    <main>
      <div className="App__wrapper">
        <div className="HomePage__wrapper">
          <div className="HomePage__navigation">
            <div className="HomePage__initialСontent">
              <h1>Search for books</h1>
              <div className="HomePage__search">
                <form>
                  <InputSearch
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="What are you looking for ? "
                  />
                  <ButtonInput onClick={fetctBooks} />
                </form>
              </div>
              <div className="HomePage__filtr">
                <div className="HomePage__categories">
                  <p>Categories</p>
                  <select>
                    <option>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                  </select>
                </div>
                <div className="HomePage__sort">
                  <p>Sorting by</p>

                  <SortSelect
                    defaultValue="sorting by"
                    optionsProps={[{ name: " relevance" }, { name: "newest" }]}
                  />
                </div>
              </div>
            </div>
            <div className="HomePage__img">
              <img src="\img\HomePage\Animation.svg" alt="HomePage" />
            </div>
          </div>
          <div className="HomePage__foundBooks">
            {/*ВЕРНУТЬСЯ, НЕ РАБОТАЕТ, ЕСЛИ ДЛИННА НЕ ОПРЕДЕЛЕНА */}
            {books.length === undefined ? (
              <div>Found 0 result</div>
            ) : (
              <div>Found {books.length} result</div>
            )}
          </div>
          <div className="HomePage__books">
            {isBooksLoading ? (
              <div className="HomePage__loading">
                <Loading />
              </div>
            ) : (
              <HomePageBookList booksProps={books} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
