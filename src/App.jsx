import { Link } from "react-router"

import { TbBrandFacebook } from "react-icons/tb"
import { LuTwitter } from "react-icons/lu"
import { RxInstagramLogo } from "react-icons/rx";
import { FiLinkedin } from "react-icons/fi";

import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50">
                    <div className="bg-white p-6 w-90 text-center rounded-lg shadow-lg flex flex-col gap-6">    
                        {cartItems.map((item) => (
                            <div className="flex items-start gap-4 py-3 border-b border-gray-300">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain"/>
                                <div className="flex-1">
                                    <p className="text-sm font-medium leading-snug">{item.title}</p>
                                    <p className="text-sm text-gray-600 mt-1">${item.price}</p>
                                </div>
                                <p className="text-md font-semibold whitespace-nowrap scroll-auto">${item.price}</p> {/* TOTAL PRICE */}
                            </div>
                        ))}
                        <div>
                            <p>Subtotal: <span></span></p>
                            <div>
                                <button className="bg-blue-500 hover:bg-blue-600 w-full text-white rounded-lg cursor-pointer">Go To Cart</button>
                                <button className="mt-4 py-2 px-4 w-full text-black rounded-lg cursor-pointer border" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>      
                    </div>
                </div>
            )}
            <header className="flex justify-between items-center flex-1">
                <div className="flex p-2">
                    <span className="bg-[#3D99F5FF] p-1.5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 fill-white"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg ></span>
                    <p className="m-1 text-[#3D99F5FF] font-bold text-2xl">Simple Shopper</p>
                </div>
                <nav className="flex gap-6 mx-auto text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                    <Link to="cart">Cart</Link>
                </nav>
            </header>
            <Outlet context={[cartItems, setCartItems, setShowModal]}/> {/*Render child routes */}
            <footer className="bg-[#F9F9F9FF]">
                <div className="flex pt-7 justify-around">
                    <div>
                        <div className="flex">
                            <span className="bg-[#3D99F5FF] p-1.5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 fill-white"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg ></span>
                            <p className="m-1 text-[#3D99F5FF] font-bold text-2xl">Simple Shopper</p>
                        </div>
                        <p className="pt-3 text-gray-700">Simple Shopper is a project for showcasing a simple e-commerce website.</p>
                        <div className="flex gap-7 pt-5 pb-8">
                            <TbBrandFacebook className="h-6 w-6 stroke-[#5F5F5FFF]"/>
                            <LuTwitter className="h-6 w-6 stroke-[#5F5F5FFF]" />
                            <RxInstagramLogo className="h-6 w-6 stroke-[#5F5F5FFF]" />
                            <FiLinkedin className="h-6 w-6 stroke-[#5F5F5FFF]" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">Quick Links</h3>
                        <div className="text-gray-700">
                            <p>Home</p>
                            <p>Shop</p>
                            <p>Cart</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">Support</h3>
                        <div className="text-gray-700">
                            <p>FAQ</p>
                            <p>Contact Us</p>
                            <p>Shipping</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">Legal</h3>
                        <div className="text-gray-700">
                            <p>Privacy Policy</p>
                            <p>Terms Of Service</p>
                        </div>  
                    </div>
                </div>
                <hr className="text-gray-200"/>
                <p className="text-center p-3">© 2025 Simple Shopper. All rights reserved.</p>
            </footer>
        </>
    )
}