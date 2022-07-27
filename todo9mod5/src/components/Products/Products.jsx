import React, { useEffect, useState } from "react";
import Produto from "./Product/Product.jsx";
import s from "./Products.module.css";
import Titulo from "../Title/Title.jsx";
import Button from "../Button/Button";

const Products = () => {
  const fetchProducts = async (url) => {
    const response = await fetch(url);
    const result = response.json();
    return result;
  };
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
  );

  const resultProducts = async () => {
    const listProducts = await fetchProducts(nextPage);
    return listProducts.products;
  };

  const resultNextPage = async () => {
    const urlNextPage = await fetchProducts(nextPage);
    return `https://${urlNextPage.nextPage}`;
  };

  useEffect(() => {
    const teste = async () => {
      setProducts(await resultProducts());
      setNextPage(await resultNextPage());
    };

    teste();
  }, []);

  useEffect(() => {
    const changePage = async () => {
      setNextPage(await resultNextPage());
    };
    changePage();
  }, [products]);

  return (
    <section className={s.products}>
      <Titulo texto="Sua seleção especial" />
      <div className={s.listProducts}>
        <Produto products={products} />
      </div>
      <div className={s.wrapperBtn}>
        <div
          className={s.wrapperButton}
          onClick={async () => {
            const newProducts = await resultProducts();
            setProducts((products) => [...products, ...newProducts]);
          }}
        >
          <Button texto="Ainda mais produtos aqui!" />
        </div>
      </div>
    </section>
  );
};

export default Products;
