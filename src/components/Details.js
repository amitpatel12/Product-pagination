import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";

const Details = () => {
  const id = useParams();
  const [data, setData] = useState();
  const [image, setImage] = useState();
  // console.log(id);

  useEffect(() => {
    (async function getData() {
      let result = await fetch(`https://dummyjson.com/products/${id.id}`);
      result = await result.json();
      setData(result);
      console.log(result);
    })();
    // getData();
  }, []);



  return (
    <div className="details">
      <h1>Details Page</h1>
      {
      data &&
      (
        <div className="product-review">
          <div className="thumbnail">
            <img src={data.thumbnail} />
          </div>
          {/* {
          data.images.map((img,i) => (
            <img src={img} alt='image'/>
          ))
} */}
          <div className="title">
            <div><span className="tag">Product: </span> <span>{data.title} </span></div>
            <div> <span className="tag">Brand: </span>{data.brand}</div>
          </div>
          <div className="description"><span className="tag">Details: </span> <span>{data.description}</span></div>
          <div className="price">
            <div> <span className="tag">Price: </span>{data.price} </div>
            <div><span className="tag">Discount: </span>{data.discountPercentage}%</div>
          </div>
          <div> <span className="tag">Rating: </span>{data.rating}</div>
        </div>
      )}
    </div>
  );
};

export default Details;
