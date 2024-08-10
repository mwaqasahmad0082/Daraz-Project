import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeCartItems } from "../redux/slices/cart";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleDelete = (id) => {
    dispatch(removeCartItems(id));
  };

  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price, 0),
    [cartItems]
  );

  return (
    <div className="flex justify-center ">
      <div className="w-4/5 items-center text-start p-4 bg-slate-300 rounded-b-lg">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        <button
          onClick={goBack}
          className="bg-blue-800 p-2 w-32 text-white rounded-lg mb-4"
        >
          Go Back
        </button>

        <div className=" flex  ">
          <table
            // //////////////////////////////////////////////////////////////
            className="table-auto w-full bg-gray-400 border-collapse "
          >
            <thead>
              <tr className="bg-orange-700 text-white h-10 text-lg ">
                <th className="p-2 text-start">Image</th>
                <th className="hidden md:table-cell p-2 ">ID</th>
                <th className="p-2">Title</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => openModal(item)}
                  className="cursor-pointer hover:bg-gray-300 text-start"
                >
                  <td className="p-2 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded "
                    />
                  </td>
                  <td className="hidden md:table-cell p-2 text-center">
                    {item.id}
                  </td>
                  <td className="p-2 text-center">{item.title}</td>
                  <td className="p-2 text-center">${item.price}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item.id);
                      }}
                      className="bg-red-600 text-white p-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* /////////////////////////////////////////////////////////////// */}
        <div className="total-price ">
          <h3 className="bg-orange-700 p-4 text-end text-2xl text-white">
            Total Price: ${total}
          </h3>
        </div>

        {selectedItem && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Cart Item Details"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                transform: "translate(-50%, -50%)",
                width: "80%",
                maxWidth: "600px",
                padding: "20px",
                borderRadius: "8px",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <h2 className="text-xl font-bold">Item Details</h2>
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              className="w-full h-auto object-cover rounded mb-4"
            />
            <p>
              <strong>ID:</strong> {selectedItem.id}
            </p>
            <p>
              <strong>Title:</strong> {selectedItem.title}
            </p>
            <p>
              <strong>Price:</strong> ${selectedItem.price}
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-800 text-white p-2 rounded mt-4"
            >
              Close
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Cart;
