import { createContext, useState } from "react";
import './StoreContext.css';
import { food_list } from "../assets/assets";

// 👉 Global context create kiya (initial value null)
export const StoreContext = createContext(null);

// 👉 Provider component (ye pura app ko data provide karega)
const StoreContextProvider = (props) => {

    // 👉 Cart state (object form me)
    // Example: {1:2, 3:1} => itemId: quantity
    const [cartItems, setCartItems] = useState({});

    // 👉 Add to cart function
    const addToCart = (itemId) => {

        // 👉 Agar item pehli baar add ho raha hai
        if (!cartItems[itemId]) {

            // 👉 quantity = 1 set karo
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }));

        } else {

            // 👉 Agar already hai toh quantity +1
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }));
        }
    };

    // 👉 Remove from cart function
    const removeFromCart = (itemId) => {

        // 👉 quantity -1 kar do
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));
    };

    // 👉 Total price calculate karne ka function
    const getTotalCartAmount = () => {

        let totalAmount = 0;

        // 👉 cartItems loop (object hai, array nahi)
        for (const item in cartItems) {

            // 👉 Sirf wahi items jinki quantity > 0
            if (cartItems[item] > 0) {

                // 👉 food_list se item details nikal rahe hain
                const itemInfo = food_list.find(
                    (product) => product.id === item
                );

                // 👉 total = price * quantity
                totalAmount += itemInfo.price * cartItems[item];
            }
        }

        return totalAmount;
    };

    // 👉 Jo bhi data/functions share karne hain globally
    const contextValue = {
        food_list,              // 👉 all food data
        cartItems,              // 👉 current cart state
        setCartItems,           // 👉 direct update (rare use)
        addToCart,              // 👉 add item
        removeFromCart,         // 👉 remove item
        getTotalCartAmount      // 👉 total price
    };

    // 👉 Provider wrap karega app ko
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;