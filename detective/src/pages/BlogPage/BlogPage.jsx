import style from "./blogpage.module.scss";
import Pagination from "../../components/Pagination/Pagination";
import posts from "../../components/Post/posts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function BlogPage() {
  return (
    <>
      <main className={style.page_container}>
        <section className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>Блог</h3>
        </section>
        <Pagination array={posts} wrapper={style.block_container} />
      </main>
    </>
  );
}
