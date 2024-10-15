import React from 'react'

const ShoppingCart = () => (
  <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
    <div className="flex flex-col lg:flex-row lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
      <div className="flex-2 space-y-8 md:space-y-10">
        <h2 className="text-2xl font-extrabold">Shopping Cart (3 items)</h2>
        <div className="space-y-6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <CartOrderSummary />
        <div className="mt-6 font-semibold flex space-x-2">
          <p>or</p>
          <a href="#" className="text-blue-500 dark:text-blue-200">
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default ShoppingCart
