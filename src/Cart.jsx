import { useOutletContext } from "react-router"
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cart() {
    const [cartItems, setCartItems, setShowModal, dataRef, setShowCart] = useOutletContext();
    setShowCart(true);

    function getSubtotal() {
        return cartItems.reduce((total, item) => {
            return total + (item.price * item.qty)
        }, 0)
    }  

    function increment(id) {
        setCartItems(prev => 
            prev.map(item => 
                item.id === id
                ? {...item, qty: item.qty + 1}
                : item
            )
        )
    }

    function decrement(id) {
        setCartItems(prev => 
            prev.map(item => 
                item.id === id
                ? {...item, qty: item.qty > 1 ? item.qty - 1 : 1}
                : item
            )
        )
    }

    function handleRemove(id) {
        setCartItems(prev => 
            prev.filter((item) => item.id != id)
        )
    }

    function handleBuy() {
        setCartItems(prev => 
            prev.filter(() => false)
        )
        alert("Thank you for buying with us! Connect with me on linkedin ;)")
        window.open("https://www.linkedin.com/in/rudraksh-kumar-18870b342/", "_blank");
    }

    return (
        <section className="p-15 pl-35">
            <h1 className="pb-10 font-semibold">Shopping Cart</h1>
            <div className="flex justify-between">
                <div className="flex flex-col gap-7 flex-wrap">
                    {cartItems.map((item) => 
                        <><div className="flex gap-9 items-center justify-start flex-wrap">
                            <div className="flex gap-4">
                                <img src={item.image} alt={item.title} className="h-19 w-19" />
                                <div>
                                    <p className="font-semibold text-xl">{item.title}</p>
                                    <p className="text-gray-500 text-[18px]">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex gap-7 pb-8">
                                <div className="flex gap-4 flex-wrap justify-start items-start">
                                    <p className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-lg text-gray-500 font-bold text-lg cursor-pointer select-none" onClick={() => decrement(item.id)}>-</p>
                                    <p className="text-lg w-20 h-9 flex items-center justify-center border border-gray-400 rounded-lg">{item.qty}</p>
                                    <p className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-lg text-black font-bold text-lg cursor-pointer select-none" onClick={() => increment(item.id)}>+</p>
                                </div>
                                <div className="flex gap-6 flex-wrap">
                                    <p className="pt-1 font-bold text-xl">${(item.price * item.qty).toFixed(2)}</p>
                                    <button className="flex gap-2  pt-1 cursor-pointer group">
                                        <FaRegTrashAlt className="w-4 h-4 mt-1 fill-red-500 group-hover:fill-red-600 " />
                                        <p className="text-red-500 group-hover:text-red-600" onClick={() => handleRemove(item.id)}>Remove</p>
                                    </button>
                                </div>
                            </div>
                        </div><hr className="text-gray-400"/></>
                    )}
                </div>
                {cartItems.length !== 0 && (
                    <div className="flex flex-col p-7 mr-auto ml-auto border border-gray-400 rounded-lg w-80 h-fit">
                        <h2 className="text-3xl font-semibold pb-2">Order Summary</h2>
                        <div>
                            <p className="text-gray-600 text-lg flex justify-between pt-2 pb-1">Subtotal <span className="text-black">${getSubtotal()}</span></p>
                            <hr className="text-gray-300 pb-1"/>
                            <p className="text-gray-600 text-lg flex justify-between">GST <span className="text-black pb-1">${(getSubtotal() * 0.05).toFixed(2)}</span></p>
                        </div>
                        <hr className="text-gray-800 pt-1 pb-1"/>
                        <p className="text-xl font-semibold flex justify-between">Total <span>${(getSubtotal() + (getSubtotal() * 0.05)).toFixed(2)}</span></p>
                        <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-lg w-full text-white pt-2 pb-2 font-semibold text-xl mt-3" onClick={handleBuy}>Proceed to Checkout</button>
                    </div>
                )}
            </div>
        </section>
    )
}