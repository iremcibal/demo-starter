let cart = [
	{id: 1, productName: "product 1", quantity: 3, unitPrice: 3000},
	{id: 2, productName: "product 1", quantity: 2, unitPrice: 1000},
	{id: 3, productName: "product 3", quantity: 1, unitPrice: 500},
];


function getProductByName(pName){
    let filterProduct = cart.filter(product => product.productName.includes(pName));
    console.log(filterProduct);
}

//getProductByName("product 1")

function getFirstProductByName(pName){
    let filterProduct = cart.filter(product => product.productName.includes(pName));
    console.log(filterProduct[0]);
}

//getFirstProductByName("product 1")

function getMinUnitPrice(uPrice){
    let filterUnitPrice = cart.filter(u => u.unitPrice> uPrice);

    console.log(filterUnitPrice);
}

//getMinUnitPrice(600);

function getMaxUnitPrice(uPrice){
    let filterUnitPrice = cart.filter(u => u.unitPrice < uPrice);

    console.log(filterUnitPrice);
}

//getMaxUnitPrice(600);

function addProduct(product){
     cart.push(product)
     console.log(cart)
}

//addProduct({id:4,productName: "elma",quantity : 15, unitPrice :20});
console.log(cart)
function deleteProduct(name){
    let deleteProduct = cart.filter(c => !c.productName.includes(name));
    cart = [...deleteProduct]
    console.log(cart);
}

deleteProduct("product 1")