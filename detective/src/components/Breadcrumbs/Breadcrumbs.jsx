import { Link, useLocation } from "react-router-dom";
import style from "./breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((pathname) => pathname);

  return (
    <nav aria-label="breadcrumb" className={style.breadcrumbs}>
      <ol>
        <li>
          <Link to="/">Главная </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={pathname}>
              {isLast ? (
                <span>{translateBreadcrumb(pathname)}</span>
              ) : (
                <Link to={routeTo}>{translateBreadcrumb(pathname)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const translateBreadcrumb = (breadcrumb) => {
  const translations = {
    home: "Главная",
    services_for_individuals: "/ Услуги для частных лиц",
    blog: "/ Блог",
    reviews: "/ Отзывы",
    geolocation: "/ Пробить геолокацию по номеру телефона",
  };

  return translations[breadcrumb] || breadcrumb;
};

export default Breadcrumbs;
