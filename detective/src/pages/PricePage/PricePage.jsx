import React from "react";
import style from "./pricepage.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Person } from "../../assets/images/dashicons_businessman.svg";
import { ReactComponent as Business } from "../../assets/images/dashbusiness-center.svg";
import Table from "../../components/Table/Table";
import PriceMobile from "../../components/PriceMobile/PriceMobile";

export default function PricePage() {
  return (
    <>
      <main>
        <section className={style.price_header}>
          <Breadcrumbs />
          <h1 className={style.h1}>цены на услуги детективного агентства</h1>
          <div className={style.services__tabs}>
            <div className={style.tabs__person}>
              <Person alt="person" className={style.icon} />
              Для частных лиц
            </div>
            <Link to="/services_for_business">
              <div className={style.tabs__business}>
                <Business alt="small suitcase" className={style.icon} />
                Для бизнеса
              </div>
            </Link>
          </div>
        </section>
        <section className={style.container}>
          <div className={style.blok_table}>
            <h2 className={style.h2}>Сбор информации</h2>
            <Table />
          </div>
          <div className={style.blok_table}>
            <h2 className={style.h2}>Розыск</h2>
            <Table />
          </div>
          <div className={style.blok_table}>
            <h2 className={style.h2}>Защита</h2>
            <Table />
          </div>
        </section>

        <section className={style.container_mobile}>
          <h2 className={style.h2}>Сбор информации</h2>
          <PriceMobile />
          <h2 className={style.h2}>Защита</h2>
          <PriceMobile />
        </section>
      </main>
    </>
  );
}
