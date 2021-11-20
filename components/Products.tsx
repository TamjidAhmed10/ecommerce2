/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { data } from "../utils/data";
const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.products.map((item, i) => (
        <div key={i}>
          <div className="card bordered rounded">
            <figure>
              <img className="w-full h-56 object-cover" src={item.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                
              </h2>

              <div className="card-actions items-center">
                <p>${item.price}</p>
                <p>Add to Cart  </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
