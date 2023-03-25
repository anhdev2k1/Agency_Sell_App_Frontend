import { ShoppingOutlined } from "@ant-design/icons";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
import axios from "axios";
import { useEffect } from "react";
const Product = (props) => {
  const { index, product } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const fetchAddToCart = async (data) => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:5000/api/cart",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
  };
  const handleAddToCart = () => {
    const dataFetch = {
      productId: product._id,
      userId: user._id,
    };
    dispatch(addToCart(product));
    fetchAddToCart(dataFetch);
  };
  return (
    <>
      <div className="product__item" key={index}>
        <img src={product.image.url[0]} alt="" className="product__item-img" />
        <div className="product__item-title">
          <span className="product__item-shop">{product.shop.name}</span>
          <h3 className="product__item-name">{product.name}</h3>
          <div className="product__item-number">
            <span className="product__item-price">Giá: {product.price}</span>
            <span className="product__item-quantity">
              Số lượng: {product.quantity}
            </span>
          </div>
        </div>
        <div className="product__hover">
          <div className="product__hover-btn" onClick={handleAddToCart}>
            <ShoppingOutlined />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
