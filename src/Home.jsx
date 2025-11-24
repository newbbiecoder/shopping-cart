import { Link } from "react-router"

export default function Home() {
  return (
    <>
        <header className="flex justify-between items-center flex-1">
            <div>
                {/* <img src="" alt="" /> */}
                Simple Shopper
            </div>
            <nav className="flex gap-6 mx-auto">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
            </nav>
        </header>
        <section className="h-100 bg-[#F0F7FEFF] flex items-center justify-around">
            <div className="">
                <h2 className="text-5xl">Discover Your Next Favorite Finds</h2>
                <p>Browse our curated selection of high-quality products, perfect for every need and budget.</p>
                <button>Shop now</button>
            </div>
            <div>
                <h1>A NEW VERY GOOD IMAGE</h1>
            </div>
        </section>
        <section className="flex flex-col items-center">
            <h2 className="text-3xl">Wlecome to Simple Shopper</h2>
            <p className="text-neutral-600">Simple Shopper is designed with you in mind. Our goal is to make your online shopping experience effortless and enjoyable.</p>
            <p className="text-neutral-600">As a student project, we focus on clean design, intuitive navigation, and providing a seamless way to find what you need. Dive in and explore our selections!</p>
        </section>
        <footer className="bg-[#F9F9F9FF]">
            <div className="flex pt-7 justify-around">
                <div>
                    <div>
                        {/* <img src="" alt="" /> */}
                        <h2>Simple Shopper</h2>
                    </div>
                    <p>Simple Shopper is a project for showcasing a simple e-commerce website.</p>
                    <div>
                        {/* <img src="" alt="" /> */}
                        {/* <img src="" alt="" /> */}
                        {/* <img src="" alt="" /> */}
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Cart</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </div>
            </div>
            <hr className="text-gray-200"/>
            <p className="text-center p-3">© 2025 Simple Shopper. All rights reserved.</p>
        </footer>
    </>
  )
}

