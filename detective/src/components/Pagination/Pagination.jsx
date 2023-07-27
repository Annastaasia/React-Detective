import React, { useState } from "react";
import Review from "../ReviewCard/ReviewCard";
import style from "./pagination.module.scss";
import ArrowLeft from "../../assets/images/white_arrow_left.svg";
import ArrowRight from "../../assets/images/white_arrow_right.svg";
import ArrowDown from "../../assets/images/biege_arrow_down.svg";
import Post from "../Post/Post";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numEachPage, setNumEachPage] = useState(12);

  const data = props.array;

  const totalPages = Math.ceil(data.length / numEachPage);

  const handleClick = (page) => {
    window.scrollTo({ top: 0 });
    setNumEachPage(12);
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * numEachPage;
  let endIndex = startIndex + numEachPage;
  const currentCards = data.slice(startIndex, endIndex);

  let endNum = numEachPage;
  const liveload = () => {
    endNum = numEachPage + 12;
    setNumEachPage(endNum);
  };

  return (
    <>
      <div className={props.wrapper}>
        {currentCards.map((card, index) =>
          card.stars ? (
            <Review
              key={index}
              isLink={false}
              review={card.review}
              name={card.name}
              stars={card.stars}
              date={card.date}
              text={card.text}
            ></Review>
          ) : (
            <Post
              key={index}
              link={card.link}
              image={card.image}
              tag={card.tag}
              title={card.title}
              text={card.text}
              date={card.date}
            ></Post>
          )
        )}
      </div>
      <div className={style.pagination_wrapper}>
        <button
          className={
            endNum === data.length || currentPage === 6
              ? style.button_show_more_disabled
              : style.button_show_more
          }
          disabled={endNum === data.length || currentPage === 6 ? true : false}
          onClick={() => liveload()}
        >
          Показать еще 12
          <img src={ArrowDown} alt=""></img>
        </button>
        <div className={style.numbers}>
          {currentPage >= 1 && (
            <button
              disabled={currentPage === 1 ? true : false}
              className={
                currentPage === 1 ? style.arrow_disabled : style.numbers_arrows
              }
              onClick={() => handleClick(currentPage - 1)}
            >
              <img src={ArrowLeft} alt="" />
            </button>
          )}
          <span
            className={currentPage === 1 ? style.selected_page_number : ""}
            onClick={() => handleClick(1)}
          >
            1
          </span>
          <span
            className={currentPage === 2 ? style.selected_page_number : ""}
            onClick={() => handleClick(2)}
          >
            2
          </span>
          <span
            className={currentPage === 3 ? style.selected_page_number : ""}
            onClick={() => handleClick(3)}
          >
            3
          </span>
          <span
            className={currentPage === 4 ? style.selected_page_number : ""}
            onClick={() => handleClick(4)}
          >
            4
          </span>
          <span
            className={currentPage === 5 ? style.selected_page_number : ""}
            onClick={() => handleClick(5)}
          >
            5
          </span>
          <span
            className={currentPage === 6 ? style.selected_page_number : ""}
            onClick={() => handleClick(6)}
          >
            6
          </span>
          {currentPage <= totalPages && (
            <button
              onClick={() => handleClick(currentPage + 1)}
              className={
                currentPage === 6 ? style.arrow_disabled : style.numbers_arrows
              }
              disabled={currentPage === 6 ? true : false}
            >
              <img src={ArrowRight} alt="" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
