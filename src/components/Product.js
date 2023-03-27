import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from './Pagination'

const Product = () =>{
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=96&")
    .then((res) => res.json())
    .then((res) => setProducts(res.products));
  }, []);

  // console.log(products.category);
  const handleBtn = (value) => {
    setPagination(false)
    console.log(value);
    fetch(`https://dummyjson.com/products/category/${value}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }
  
  return (
    <div className="container">
      <div className="btns">
        <button onClick={() => handleBtn('motorcycle')}>MotorCycle</button>
        <button onClick={() => handleBtn('smartphones')}>Smartphones</button>
        <button onClick={() => handleBtn('laptops')}>Laptops</button>
        <button onClick={() => handleBtn('fragrances')}>Fragrances</button>
        <button onClick={() => handleBtn('womens-jewellery')}>Womens-Jewellery</button>
        <button onClick={() => handleBtn('mens-shirts')}>Mens-Shirts</button>
        <button onClick={() => handleBtn('womens-dresses')}>Womens-Dresses</button>
      </div>
      <div className="App">
      {products &&
        products.slice(page * 12 - 12, page * 12).map((prod, index) => {
          return (
            <div className="product" key={index}>
              <Link to={`/${prod.id}`}><img src={prod.thumbnail} alt={prod.title} /></Link>
              <div className="brand">{prod.brand}</div>
            </div>
          );
        })}
        </div>
        { pagination &&
        <Pagination products = {products} page= {page} setPage = {setPage}/>
}
        </div>
  )
}

export default Product