const kfc = [
    //  Beverage 3 Produk
    {
        name: "Coca Cola",
        category: "Beverage",
        description: "Coca-Cola",
        price: 14000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Mineral Water",
        category: "Beverage",
        description: "Mineral Water",
        price: 16000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Manggo Float",
        category: "Beverage",
        description: "Manggo Float",
        price: 14000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    // Chicken 6 Menu
    {
        name: "Super Besar 1",
        category: "Chicken",
        description: "1 pc Chicken + 1 Rice + 1 Coca-Cola",
        price: 41500,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "7Pc Chick N Rice",
        category: "Chicken",
        description: "7 pc Chicken +7 Rice",
        price: 13500,
        isReady: true,
        isStock: false,
        isPromo: true,
        stock: 0
    },
    {
        name: "BIG1 Nasi Ayam & Minum",
        category: "Chicken",
        description: "2 pc Chicken 2 Rice 2 Mineral Water [Potongan Ayam yang tersedia tergantung ketersediaan ditoko pada saat pemesanan / pengiriman]",
        price: 13500,
        isReady: true,
        isStock: false,
        isPromo: true,
        stock: 0
    },
    {
        name: "Petook Winger Duo",
        category: "Chicken",
        description: "4 Wingette + 4 Drumette + Rice + 2 Coke Med",
        price: 13500,
        isReady: true,
        isStock: false,
        isPromo: true,
        stock: 0
    },
    {
        name: "Super Besar 2",
        category: "Chicken",
        description: "2 Pc Chicken + Rice + 1 Coca-Cola Medium",
        price: 54500,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "1 Pc Chicken",
        category: "Chicken",
        description: "1pc Chicken",
        price: 24500,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Crispy Strips",
        category: "Chicken",
        description: "2pcs Chicken Strips",
        price: 22000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "ChickenSteak With French Fries",
        category: "Chicken",
        description: "Chicken Steak + French Fries Reguler + Coke Zero",
        price: 56500,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Wingger BBQ Festive 2",
        category: "Chicken",
        description: "5 Pcs Drumtte, 5 Wingette + 2 1/2 Sachet Seasoning BBQ",
        price: 60000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    // Bowl/Burger
    {
        name: "Breakfast Combo 1",
        category: "Bowl/Burger",
        description: "1 Original Porridge + Hot Tea / Hot Coffee",
        price: 0,
        isReady: false, // Persedian Habis
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Breakfast Combo 2",
        category: "Bowl/Burger",
        description: "1 Chicken Porridge + Hot Tea / Hot Coffee",
        price: 0,
        isReady: false,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Kombo Colonel Burger",
        category: "Bowl/Burger",
        description: "1 Colonel Burger + 1 French Fries Reguler  + 1 Fanta Reguler",
        price: 59000,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    },
    {
        name: "Kombo Crispy Burger",
        category: "Bowl/Burger",
        description: "1 Crispy Burger + 1 French Fries Reguler + 1 Fanta Reguler",
        price: 45500,
        isReady: true,
        isStock: false,
        isPromo: false,
        stock: 0
    }
]

const jumlahProduk = kfc.length;


// Menampilkan Kategory Produk
console.log (`DAFTAR KATEGORI`);
let newCategory= [ "Promotion" ]
let newCategorys = [];

for (let i = 0; i < jumlahProduk; i++) {
    let categorys = kfc[i].category;
    if (!(newCategory.includes(categorys)) ){
        newCategory.push(kfc[i].category)
    }
}

for (let i = 0; i < newCategory.length; i++) {
    const categ = newCategory[i];
    const newr = {
        category: newCategory[i], 
        id: i+1
    }
    newCategorys.push(newr)
} 

for ( let i = 0; i < newCategorys.length; i++) {
    console.log(`${newCategorys[i].id}. ${newCategorys[i].category}`)
}



// Menampilkan Produk
let searchProduk = "Beverage";
console.log(`\nDAFTAR ${searchProduk.toUpperCase()}`);

if (searchProduk === "Promotion") {
    searchProduk = true;
}

let newProducts = []
let i = 1
while (i < jumlahProduk) {
    let products = kfc[i].category;
    if (searchProduk === true) {
        products = kfc[i].isPromo; 
    }

    if ( products === searchProduk) {
        const r = newProducts.push(kfc[i])
    } 
    i++
}

for (let i = 0; i < newProducts.length; i++) {
    newProducts[i].id= i+1;
    console.log(`${newProducts[i].id}. ${newProducts[i].name} - ${newProducts[i].price}`)
}