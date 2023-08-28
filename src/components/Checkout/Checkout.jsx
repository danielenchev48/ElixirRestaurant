import { useState } from "react";
import GetStripe from "./GetStripe";
import { useEffect } from "react";

// function Checkout() {
//     async function handleCheckout() {
//         const stripe = await GetStripe();
//         const { error } = await stripe.redirectToCheckout({
//             lineItems: [
//                 {
//                     price: 'price_1NXLOmLNq3rgLohd5T2us7q5',
//                     quantity: 1,
//                 },
//             ],
//             mode: 'payment',
//             successUrl: `http://localhost:5173/`,
//             cancelUrl: `http://localhost:5173/`,
//             // customerEmail: 'bootcamp.june2023@gmail.com',
//         });
//         console.warn(error.message);
//     }

//     return <button onClick={handleCheckout}>Checkout</button>;
// }

// export default Checkout

function Checkout() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/products/all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setProducts(data.products.data)
            })
    }, [])



    return <button onClick={() => console.log(products)}>Checkout</button>;
}


export default Checkout
