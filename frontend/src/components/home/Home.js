import React from "react";
import cart from "../../assets/images/icon-cart.svg";
import { useGetAllProductsQuery } from "../../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="mt-[100px] p-6">
      <div className="isErrorIsLoading">
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
      {isSuccess && (
        <div className="flex flex-wrap">
          {data.map((product) => (
            <div
              className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4"
              // className="card m-4 bg-white shadow-lg border-solid "
              key={product.id}
            >
              <div className="relative cursor-pointer overflow-hidden">
                <h2 className="absolute text-white font-semibold text-lg p-2">
                  {product.name}
                </h2>
                <img
                  src={product.image}
                  alt="img"
                  className="w-full transition rounded-lg hover:scale-125"
                />
              </div>

              <div className="flex items-center justify-between px-3">
                <div className="desc flex flex-col p-3">
                  <p className="text-md ">{product.desc}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {" "}
                    ${product.price}
                  </p>
                </div>
                <div
                  className="btn bg-orange-500 flex justify-center py-2 px-2 rounded-md font-bold cursor-pointer text-white text-md"
                  onClick={() => handleAddToCart(product)}
                >
                  {/* <img src={cart} alt="cart" className="px-3" /> */}
                  Add
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
