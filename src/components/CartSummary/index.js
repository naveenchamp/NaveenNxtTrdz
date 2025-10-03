// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsLen = cartList.length

      const totalAmount = cartList.reduce(
        (acc, eachItem) => acc + eachItem.price * (eachItem.quantity || 1),
        0,
      )

      return (
        <div className="summary">
          <div className="submis">
            <h1 className="heads">
              Order Total: <span className="amout">₹{totalAmount}</span>
            </h1>
            <p className="param">
              {cartItemsLen} {cartItemsLen === 1 ? 'item' : 'items'} in cart
            </p>
          </div>
          <button type="button" className="checkOutbtn">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
