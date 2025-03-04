import { useState } from "react";

export default function ItemListing(props) {
    const [value, setValue] = useState(0);

    const title = props.title;
    const price = props.price.toFixed(2);
    const imageURL = props.imageURL;
    let itemCount = props.itemCount;
    const setItemCount = props.setItemCount;

    function Title() {
        return (
            <div className="title">
                {title}
            </div>
        );
    };

    function Price() {
        return (
            <div className="price">
                ${price}
            </div>
        );
    };

    function handleNumChange(e) {
        setValue(e.target.value);
    };

    function handleAdd() {
        setItemCount(itemCount += Number(value));
        setValue(0);
    };

    return (
        <div className="itemListing">
            <img src={imageURL} alt={title} className="itemPic"/>
            <Title />
            <Price />
            <div className="shopButtons">
                <input type="number" value={value} onChange={handleNumChange} min={0} className="quantity"/>
                <button onClick={handleAdd}>Add To Cart</button>
            </div>
        </div>
    );
};