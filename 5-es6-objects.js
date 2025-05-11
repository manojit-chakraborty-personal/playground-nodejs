// Object Destructing

const product = {
    label: 'Red NoteBook',
    price: 200.51,
    stock: 58,
    salePrice: undefined,
    rating: 3.8
}

// const {label, price, stock, rating = 4.2} = product
const {label: productLabel, price, stock, rating = 4.2} = product
// rating = 4.2 => default value if no value is provided
// label: productLabel => change the name of the label
// console.log(productLabel);
// console.log(price);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, price}) => {
    console.log(label);
    console.log(price);
}

transaction('order', product)