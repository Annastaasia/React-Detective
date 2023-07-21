import style from "./blog.module.scss";
import posts from "../../components/Post/posts";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Blog() {
  return (
    <>
      <div className={`${style.container}`}>
        <header>
          <h3>Блог</h3>
          <Link to="/blog">
            Смотреть все
            <img
              src="images/biege_arrow_right.svg"
              alt="Нажмите, чтобы перейти и посмотреть все посты"
            />
          </Link>
        </header>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            breakpoints: {
              1280: {
                perPage: 3,
              },
              744: {
                perPage: 2,
              },
              480: {
                perPage: 1,
                height: 563,
              }
            },
            rewind: false,
            autoWidth: true,
            height: 630,
            pagination: false,
            arrows: false,
            type: "loop",
            gap: 24,
          }}
          className={style.custom_splide}
          aria-label="Blog Posts"
        >
          {posts.map((post) => (
            <SplideSlide
              key={post.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Post
                link={post.link}
                image={post.image}
                tag={post.tag}
                title={post.title}
                text={post.text}
                date={post.date}
              ></Post>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}