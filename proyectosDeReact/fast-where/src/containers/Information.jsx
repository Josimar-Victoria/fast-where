import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { Link, useHistory } from "react-router-dom";
import '../style/Information.css'
const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart, cupones } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      apellido: formData.get("apellido"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      country: formData.get("country"),
      city: formData.get("city"),
      state: formData.get("state"),
      phone: formData.get("phone"),
      cp: formData.get("cp"),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment')
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  const handleInput  = () => {
    
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Information de contatactos</h2>
        </div>
        <div className="Inforation-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input
              type="text"
              placeholder="Apellido Completo"
              name="apellido"
            />
            <input type="text" placeholder="Correo Eletronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Ciuda" name="city" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Telefono" name="phone" />
            <input type="text" placeholder="Codigo postal" name="cp" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Inforation-back">
            <Link to="/chekout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <form action="">
          <input type="text" placeholder='ingresa tu cupom  ' />
        </form>
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
      )}
    </div>
  );
};

export default Information;
