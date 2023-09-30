import MemeData from "./MemeData";
import "./Meme.css";
import { useState } from "react";
export const Meme = () => {
  const [ranImage, setRanImage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const meme = MemeData.data.memes;
  const randomNum = Math.floor(Math.random() * meme.length) + 1;
  const randomURL = meme[randomNum].url;

  function randomMeme() {
    setRanImage(randomURL);
    setSearchValue("");
  }
  function handleSearch() {
    setRanImage("");
    const result = meme.filter((one) => one.name.includes(searchValue));
    if (result) {
      result.map((image) => {
        setSearchValue(
          <img className="memeContainer" key={image.id} src={image.url} />
        );
      });
    }
    if (result == "") {
      setSearchValue(<h1>Not found! :(</h1>);
    }

    // setSearchValue(result);
  }

  return (
    <div>
      <div className="navParent">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegCo9oDcj4TGZdmDlGIRIDyLbLAQk3V0r_oZnkrM&s"
          alt="logo"
        />
        <p className="navText">Meme Template Hub!</p>
      </div>

      <div className="secondBox">
        <input
          type="text"
          placeholder="Search something. Ex- girl,sad or fall etc"
          onChange={(e) => setSearchValue(e.target.value)}
          className="inputText"
        />
        <div>
          <button onClick={handleSearch} className="searchBtn">
            Search
          </button>

          <button onClick={randomMeme} className="findButton">
            Get Random Meme IMG
          </button>
        </div>
      </div>
      <div className="imgContainer">
        {searchValue}
        <img className="memeContainer" src={ranImage} alt="" />
      </div>
    </div>
  );
};
