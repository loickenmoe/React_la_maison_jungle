import Banner from "./Banner.js";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList.js";
import logo from "../assets/logo.png";
import Footer from "./Footer.js";
import "../styles/layout.css";
import { useState, useEffect } from "react";

function App() {
  // Partagez votre state entre différents composants:
  //1: faire remonter  cart(enfant) dans  App.js(parent)
  // const [cart, updateCart] = useState([]);
  const [isFooterShown, updateIsFooterShown] = useState([])

  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  // sauvegarde du panier lors de la mise à jours de la page
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        {/*2:  passe  cart   ainsi que  updateCart    en props  et aller le recupérer dans cart.js et shoppingList.js en parametre*/}
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      {/* boutton associé à la fonction pour cacher le footer */}
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>Caché !</button>
      {isFooterShown && <Footer cart={cart} />}
    </div>
  );
}

export default App;
