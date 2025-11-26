import { useState, useEffect } from "react"

export default function Shop() {
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

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

    else if(dataIsLoaded) {
        console.log(items);
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
                            <div className="w-[300px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between gap-4 hover:shadow-lg transition">
                                <img src={item.image} alt={item.title} className="w-full h-60 object-contain"/>
                                <p className="text-lg font-semibold text-center text-gray-800">{item.title}</p>
                                <button className="bg-blue-500 text-white px-10 font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">Add to Cart</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}