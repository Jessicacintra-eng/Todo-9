import React from 'react'
import Button from '../../Button/Button';
import s from './Product.module.css'

const Product = ({products}) => {

  return (
    <>
      {products.map(product => {
        return (
          <div key={product.id} className={s.product}>
            <div className={s.produto__img}>
              <img src={product.image} alt={product.description} />
            </div>
            <div className={s.produto__descricao}>
                <h4 className={s.tituloProduto}>{product.name}</h4>
                <h5 className={s.h5}>{product.description}</h5>
                <h5 className={s.h5}>{`De: R$${product?.oldPrice?.toFixed(2).replace(".", ",")}`}</h5>
                <h4 className={s.h4}>{`Por: R$${product?.price?.toFixed(2).replace(".", ",")}`}</h4>
                <h5 className={s.h5}>{`ou ${product?.installments?.count}x de R$${product?.installments?.value?.toFixed(2).replace(".", ",")}`}</h5>
                <Button texto='Comprar'/>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Product