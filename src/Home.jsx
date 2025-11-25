import homePagePic from "./assets/images/home-page-pic.jpg"

export default function Home() {
    return (
        <>
            <section className="h-100 bg-[#F0F7FEFF] flex items-center justify-around">
                <div className="">
                    <h2 className="text-5xl text-[#3D99F5FF] font-bold">Discover Your Next Favorite Finds</h2>
                    <p className="text-xl pt-3">Browse our curated selection of high-quality products, perfect for every need and budget.</p>
                    <button className="bg-[#3D99F5FF] hover:bg-[#1f8dfa] cursor-pointer p-2 pr-7 pl-7 rounded-md text-white mt-3">Shop now</button>
                </div>
                <div>
                    <img className="rounded-md" src={homePagePic} alt="home-page-pic" height="480" width="480"/>
                </div>
            </section>
            <section className="flex flex-col items-center">
                <h2 className="text-3xl pt-17 pb-5 font-bold">Welcome to Simple Shopper</h2>
                <p className="text-neutral-600 pb-5">Simple Shopper is designed with you in mind. Our goal is to make your online shopping experience effortless and enjoyable.</p>
                <p className="text-neutral-600 pb-17">As a student project, we focus on clean design, intuitive navigation, and providing a seamless way to find what you need. Dive in and explore our selections!</p>
            </section>
        </>
    )
}