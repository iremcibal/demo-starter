let urunler = [
	{fiyat: 100, ad: "Ürün 1", indirim: true, oran: 15},
	{fiyat: 150, ad: "Ürün 2", indirim: false, oran: 0},
	{fiyat: 200, ad: "Ürün 3", indirim: true, oran: 2.5},
];

// filter
// array.prototype.filter

let filtrelenmisUrunler = urunler.filter(urun => {
	return urun.fiyat > 160;
});

console.log(filtrelenmisUrunler);
// Urunler artık filtrelenmiş array
let filtre2 = urunler.filter(urun => {
	return urun.fiyat > 120;
});

console.log(filtre2);

// map => forEach ile aynı FARKI map yeni bir array oluşturur ve döner.

let maplenmisArray = urunler.map(urun => {
	return {
		fiyat: urun.fiyat * 2,
		ad: urun.ad,
		indirim: urun.indirim,
		oran: urun.oran,
	};
});
console.log("Maplenmiş array:", maplenmisArray);

// Map kullanarak
// indirim ve oran konsolda gözükmeyecek
// indirim=true ise oran kadar fiyat düşecek
// kullanıcıya sadece fiyat, ad ve indirim tutarını gözükecek
// indirimTutari

let newArray = urunler.map(urun => {
	return {
		fiyat:
			urun.indirim === true
				? urun.fiyat - urun.fiyat * (urun.oran / 100)
				: urun.fiyat,
		ad: urun.ad,
		indirimTutari: urun.fiyat * (urun.oran / 100),
	};
});
console.log(newArray);

let cart = [
	{id: 1, productName: "product 1", quantity: 3, unitPrice: 3000},
	{id: 2, productName: "product 2", quantity: 2, unitPrice: 1000},
	{id: 3, productName: "product 3", quantity: 1, unitPrice: 500},
];

// Sepetteki tüm ürünleri gez, adet*unitPrice ile toplam fiyatı bul
// Kullanıcıya göster {totalPrice:300,totalProductCount:6}

let totalArray = cart.map(cart => {
	return {
		totalPrice: cart.quantity * cart.unitPrice,
        totalProductCount : + cart.quantity
	};
});
console.log(totalArray);

// reduce fonksiyonu