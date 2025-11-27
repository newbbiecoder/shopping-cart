import { useState, useEffect } from "react"
import { useOutletContext } from "react-router";

export default function Shop() {
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [cartItems, setCartItems, setShowModal] = useOutletContext();

    let randomNumber;
    let usedNumbers = new Set();

    useEffect(() => {
        async function getProducts() {
            const requests = [];
            for(let i = 0; i < 10; i++) {
                do {
                    randomNumber = Math.floor(Math.random() * 20) + 1;
                }
                while (
                    usedNumbers.has(randomNumber)
                )

                usedNumbers.add(randomNumber);

                requests.push(
                    fetch(`https://fakestoreapi.com/products/${randomNumber}`).then(res => res.json())
                );
            }

            const result = await Promise.all(requests);
            console.log(result)
            result.map((item) => {
                if(item.id === 1) {
                    item.title = "Fjallraven - Foldsack No.1 Backpack"
                }
                else if(item.id === 11) {
                    item.title = "Silicon Power 256GB SSD SATA III"
                }
                else if(item.id === 18) {
                    item.title = "MBJ Women's Solid Short Sleeve"
                }
                else if(item.id === 17) {
                    item.title = "Women Windbreaker Climbing Raincoats"
                }
                else if(item.id === 12) {
                    item.title = "Playstation 4 Portable External Hard Drive"
                }
                else if(item.id === 8) {
                    item.title = "Pierced Owl Rose Gold Stainless Steel"
                }
                else if(item.id === 13) {
                    item.title = "Acer SB220Q 21.5 inches Full HD (1920 x 1080)"
                }
                else if(item.id === 10) {
                    item.title = "SanDisk SSD PLUS 1TB Internal SSD"
                }
                else if(item.id === 5) {
                    item.title = "John Hardy Women's Chain Bracelet"
                }
                else if(item.id === 14) {
                    item.title = "Samsung 49-Inch CHG90 144Hz Gaming Monitor"
                }
                else if(item.id === 15) {
                    item.title = "BIYLACLESEN Women's Jacket Winter Coats"
                }
                else if(item.id === 20) {
                    item.title = "DANVOUY Womens    Casual Cotton Short"
                }
            }); 
            setItems(result);

            setTimeout(() => {
                setDataIsLoaded(true);
            }, 1500);
        }
        getProducts();
    }, []);

    if(!dataIsLoaded) {
        return (
            <h1 className="text-center">Products loading...</h1>
        )
    }

    function handleSubmit(item) {
        setCartItems(prevItems => {
            const existing = prevItems.find(p => p.id === item.id);

            if(existing) {
                return prevItems.map(p => 
                    p.id === item.id ? {...p, qty: p.qty + 1} : p
                );
            }
            return [
                ...prevItems, 
                {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    qty: 1
                }
            ];
        })
        
        setShowModal(true);
    }

    return (
        <>
            <section>
                <h1 className="text-center font-bold pt-10 pb-5 border-t border-t-gray-400">Our Products</h1>
                <div className="flex justify-center gap-10 text-gray-500 pb-10">
                    <p>All Products</p>
                    <p>Category: Apparel</p>
                    <p>Category: Home Goods</p>
                    <p>Category: Electronics</p>
                    <p>Price: Low to High</p>
                </div>
            </section>
            <section>   
                <div 
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-6
                justify-items-center
                mb-4
                ">
                    {items.map((item) => {
                        return (
                            <div className="w-[300px] rounded-xl shadow-md p-4 flex flex-col items-center justify-between gap-4 hover:shadow-lg transition">
                                <img src={item.image} alt={item.title} className="w-full h-60 object-contain"/>
                                <div className="text-center">
                                    <p className="text-lg font-semibold text-center text-gray-800">{item.title}</p>
                                    <p className="text-xl text-gray-700 pt-2">${item.price}</p>
                                </div>
                                <button className="bg-blue-400 text-white px-10 font-semibold py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer" onClick={() => handleSubmit(item)}>Add to Cart</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

