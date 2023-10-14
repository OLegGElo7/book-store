import React from "react";
import "../style/HomePage.scss";
import InputSearch from "./UI/InputSearch/InputSearch";
import ButtonInput from "./UI/ButtonInput/ButtonInput";
import axios from "axios";

const HomePage = () => {
  async function googleBooks() {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCmK-uV0Te3m8ZoENQz67PsS1cHnu32Fqc"
    );
    console.log(response.data);
  }

  return (
    <main>
      <div className="App__wrapper">
        <div className="HomePage__wrapper">
          <div className="HomePage__navigation">
            <div className="HomePage__initialСontent">
              <h1>Search for books</h1>
              <div className="HomePage__search">
                <InputSearch
                  type="text"
                  placeholder="What are you looking for ? "
                />
                <ButtonInput onClick={googleBooks} />
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
                  <select>
                    <option>relevance</option>
                    <option>newest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="HomePage__img">
              <img src="\img\HomePage\Animation.svg" alt="HomePage" />
            </div>
          </div>
          <div className="HomePage__foundBooks">
            <div>Found (кол-во) results</div>
          </div>
          <div className="HomePage__books"></div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
