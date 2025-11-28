import homePagePic from "./assets/images/home-page-pic.jpg"
import { Link } from "react-router"

export default function Home() {
    return (
        <>
            <section className="h-100 bg-[#F0F7FEFF] flex flex-col lg:flex-row items-center justify-around">
                <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-5 lg:gap-20">
                    <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start lg:w-1/2">
                        <h2 className="lg:text-5xl text-xl text-[#3D99F5FF] font-bold text-center lg:text-left">
                            Discover Your Next Favorite Finds
                        </h2>

                        <p className="lg:text-xl text-md pt-3 text-center lg:text-left">
                            Browse our curated selection of high-quality products, perfect for every need and budget.
                        </p>

                        <Link to="shop" className="hidden lg:block">
                            <button className="bg-[#3D99F5FF] hover:bg-[#1f8dfa] cursor-pointer p-2 px-7 rounded-md text-white mt-4">
                                Shop now
                            </button>
                        </Link>
                    </div>

                    <div className="order-2 lg:order-2 lg:w-1/2 flex justify-center">
                        <img
                            className="rounded-md h-45 w-60 lg:h-auto lg:w-120 object-cover"
                            src={homePagePic}
                            alt="home-page-pic"
                        />
                    </div>

                    {/* MOBILE BUTTON BELOW IMAGE */}
                    <div className="order-3 lg:hidden flex justify-center mt-4">
                        <Link to="shop">
                            <button className="bg-[#3D99F5FF] hover:bg-[#1f8dfa] cursor-pointer p-2 px-7 rounded-md text-white">
                                Shop now
                            </button>
                        </Link>
                    </div>

                </div>       
            </section>
            <section className="flex flex-col items-center">
                <h2 className="text-3xl pt-17 pb-5 font-bold text-center">Welcome to Simple Shopper</h2>
                <p className="text-neutral-600 pb-5 text-center">Simple Shopper is designed with you in mind. Our goal is to make your online shopping experience effortless and enjoyable.</p>
                <p className="text-neutral-600 pb-17 text-center">As a student project, we focus on clean design, intuitive navigation, and providing a seamless way to find what you need. Dive in and explore our selections!</p>
            </section>
        </>
    )
}