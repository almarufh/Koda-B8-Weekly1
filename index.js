import { createInterface } from "node:readline";
const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();

const kfc = [
  //  Beverage 3 Produk
  {
    name: "Coca Cola",
    category: "Beverage",
    description: "Coca-Cola",
    price: 14000,
    isReady: true,
    isPromo: false
  },
  {
    name: "Mineral Water",
    category: "Beverage",
    description: "Mineral Water",
    price: 16000,
    isReady: true,
    isPromo: false
  },
  {
    name: "Manggo Float",
    category: "Beverage",
    description: "Manggo Float",
    price: 14000,
    isReady: true,
    isPromo: false
  },
  // Chicken 6 Menu
  {
    name: "Super Besar 1",
    category: "Chicken",
    description: "1 pc Chicken + 1 Rice + 1 Coca-Cola",
    price: 41500,
    isReady: true,
    isPromo: false
  },
  {
    name: "7Pc Chick N Rice",
    category: "Chicken",
    description: "7 pc Chicken +7 Rice",
    price: 13500,
    isReady: true,
    isPromo: true
  },
  {
    name: "BIG1 Nasi Ayam & Minum",
    category: "Chicken",
    description:
      "2 pc Chicken 2 Rice 2 Mineral Water [Potongan Ayam yang tersedia tergantung ketersediaan ditoko pada saat pemesanan / pengiriman]",
    price: 13500,
    isReady: true,
    isPromo: true
  },
  {
    name: "Petook Winger Duo",
    category: "Chicken",
    description: "4 Wingette + 4 Drumette + Rice + 2 Coke Med",
    price: 13500,
    isReady: true,
    isPromo: true
  },
  {
    name: "Super Besar 2",
    category: "Chicken",
    description: "2 Pc Chicken + Rice + 1 Coca-Cola Medium",
    price: 54500,
    isReady: true,
    isPromo: false
  },
  {
    name: "1 Pc Chicken",
    category: "Chicken",
    description: "1pc Chicken",
    price: 24500,
    isReady: true,
    isPromo: false
  },
  {
    name: "Crispy Strips",
    category: "Chicken",
    description: "2pcs Chicken Strips",
    price: 22000,
    isReady: true,
    isPromo: false
  },
  {
    name: "ChickenSteak With French Fries",
    category: "Chicken",
    description: "Chicken Steak + French Fries Reguler + Coke Zero",
    price: 56500,
    isReady: true,
    isPromo: false
  },
  {
    name: "Wingger BBQ Festive 2",
    category: "Chicken",
    description: "5 Pcs Drumtte, 5 Wingette + 2 1/2 Sachet Seasoning BBQ",
    price: 60000,
    isReady: true,
    isPromo: false
  },
  // Bowl/Burger
  {
    name: "Breakfast Combo 1",
    category: "Bowl/Burger",
    description: "1 Original Porridge + Hot Tea / Hot Coffee",
    price: 0,
    isReady: false, // Persedian Habis
    isPromo: false
  },
  {
    name: "Breakfast Combo 2",
    category: "Bowl/Burger",
    description: "1 Chicken Porridge + Hot Tea / Hot Coffee",
    price: 0,
    isReady: false,
    isPromo: false
  },
  {
    name: "Kombo Colonel Burger",
    category: "Bowl/Burger",
    description: "1 Colonel Burger + 1 French Fries Reguler  + 1 Fanta Reguler",
    price: 59000,
    isReady: true,
    isPromo: false
  },
  {
    name: "Kombo Crispy Burger",
    category: "Bowl/Burger",
    description: "1 Crispy Burger + 1 French Fries Reguler + 1 Fanta Reguler",
    price: 45500,
    isReady: true,
    isPromo: false
  },
];

const lengthProducts = kfc.length;
let productsByCategory = [];
let carts = []; 
let cartCheckout = [ 
  { name: '7Pc Chick N Rice', price: 54000, qty: 4 }
 ]
let choiceProduct = [];
let arrayCategorys = [
  {
    category: "Promotion",
    id: 1,
  },
];

function formatRupiah (number) {

}

// Fungsi Push Category
function categoryToArray() {
  for (let i = 0; i < lengthProducts; i++) {
    const categorys = kfc[i].category;
    if (!arrayCategorys.some((item) => item.category === categorys)) {
      let tempsCategory = [
        {
          category: categorys,
          id: arrayCategorys.length + 1,
        },
      ];
      arrayCategorys = [
        ...arrayCategorys, 
        ...tempsCategory
      ];
    }
  }

  let result = "";
  for (let i = 0; i < arrayCategorys.length; i++) {
    result += `${arrayCategorys[i].id}. ${arrayCategorys[i].category}\n`;
  }

  return result ;
}

function productsCategory (input) {
  console.clear();
  productsByCategory = [];
  const category = arrayCategorys[input-1]
  let searchCategory = category.category;
  if (searchCategory === "Promotion") {
      searchCategory = true;
    };
  
  for (let i = 0; i < lengthProducts; i++) {
    let products = kfc[i].category;
    if (searchCategory === true) {
      products = kfc[i].isPromo;
    };

    if (products === searchCategory) {
      productsByCategory = [
        ...productsByCategory,
        ...[kfc[i]]
      ]
    };
  }
  
  for (let i = 0; i < productsByCategory.length; i++) {
    let createId = {
      id: i +1
    };

    productsByCategory[i] = {
      ...productsByCategory[i],
      ...createId
    };
  };
  
  let results = "";
  for (let i = 0; i < productsByCategory.length; i++) {
    let number = productsByCategory[i].id;
    let name = productsByCategory[i].name;
    let price = `--> [ ${productsByCategory[i].price} ]`;
    if (productsByCategory[i].isReady === false) {
      price = "[Persedian Habis]";
    };

    let promotion = "";
    if (productsByCategory[i].isPromo === true) {
      promotion = "[PROMO] ";
    };
    results += `${number}. ${promotion}${name} ${price}\n`;
  }
  let message = `Hai, Ini daftar menu dengan kategori ${category.category}\n\n`;
  message += `${results}\n`;
  cli.question(message + `Pilih menu (1-${productsByCategory.length}) : `, function (input) {
    const change = parseInt(input);
    if (change >=1 && change <=productsByCategory.length) {
      checkProduct(change);
    } else {
      backDashboard();
    }
  });
  return results
}

function checkProduct (input) {
  console.clear();
  choiceProduct = [];
  let choice = productsByCategory[input-1];
  if (choice.isReady === false) {
    productEmpty();
  }
  choiceProduct = [
    ...choiceProduct,
    ...[choice]
  ]
  const result = `
  Nama      : ${choice.name}
  Harga     : ${choice.price}

  Deskripsi 
  -----------------------------------
  ${choice.description}
  -----------------------------------
  `;
  let message = `Hai, coba cek kembali apakah menu ini sesuai yang anda inginkan !\n\n`
  message += `${result}\n`
  cli.question(message + "Konfirmasi jumlah pesanan (1-100): ", function (input) {
    const change = Number(input);
    if (change >= 1 && change<= 100) {
      confirmQty(change);
    } else {
      backDashboard();
    }
  });
  return result;
}

function confirmQty (input) {
  console.clear();
  carts = [];
  let quantity = Number(input);
  let price = choiceProduct[0].price * input;
  let makeCarts = [
    {
      name: choiceProduct[0].name,
      price: price,
      qty: quantity
    }
  ]
  carts = [
    ...carts,
    ...makeCarts
  ]

  let results = "";
  for (let i = 0; i < carts.length; i++) {
    results += `${carts[i].name} qty(x${carts[i].qty}) ${carts[i].price}`;
  }
  let message = `${results}\n\n`;
  cli.question(message + "Proses pesanan Y/N: ", function (input) {
    if (input.toUpperCase() === "Y") {
      confirmCheckout(input);
    } else {
      backDashboard()
    }
  });
  return results
}

function confirmCheckout (input) {
  console.clear();
  const confirm = input.toUpperCase();
  let qty = 0;
  let price = 0;
  let chartNew = carts[0].name;
  let chartOld = cartCheckout.find((item) => item.name === chartNew);
  let index = cartCheckout.findIndex((item) => item.name === chartNew);

  if (cartCheckout.some((item) => item.name === chartNew)) {
    qty = carts[0].qty + chartOld.qty;
    price = choiceProduct[0].price*qty;
  }

  let checkout = {
      name: carts[0].name,
      price: price,
      qty: qty
    }

  if ( confirm === "Y") {
    cartCheckout[index]= {
      ...cartCheckout[index],
      ...checkout
    }
  } else {
    result = "failled"
  }

  let results = "";
  for (let i = 0; i < cartCheckout.length; i++) {
    results += `${cartCheckout[i].name} qty(x${cartCheckout[i].qty}) ${cartCheckout[i].price}`;
  }
  
  let message = `${results}\n\n`;
  cli.question(message + "Proses pembayaran : ", function (input) {
    const change = parseInt(input);
    confirmCheckout(input);
  });

  return results;
}

function dashboard() {
  console.clear();
  let welcome = `Selamat datang di KFC Depok Sawangan\n\n`;
  welcome += `${categoryToArray()}\n`
  cli.question(welcome + `Pilih Kategori (1-4) : `, function (input) {
    const change = parseInt(input);
    if (change >=1 && change <=4) {
      productsCategory(change);
    } else {
      backDashboard();
    }
  });
}

function backDashboard () {
  console.clear();
  let message = `Input salah...!!!\n\n`;
  message += `Pastikan input anda hanya sesuai perintah.\n\n`;
  cli.question(message + "Kembali ke halaman awal Y/N  : ", function(input) {
    if (input.toUpperCase() === "Y") {
      dashboard()
    } else {
      backDashboard()
    }
  });
}

function productEmpty () {
  console.clear();
  let message = `Mohon maaf nih, Pesanan yang anda pilih saat ini Habis\n\nTapi tenang, masih banyak pilihan menu lainnya yah.\n\n`;
  cli.question(message + "Kembali ke halaman awal Y/N  : ", function(input) {
    if (input.toUpperCase() === "Y") {
      dashboard()
    } else {
      backDashboard()
    }
  });
}

dashboard();

// categoryToArray()
// productsCategory(2)
// // console.log(productsCategory(1))
// // console.log(checkProduct(1))
// checkProduct(3)
// console.log(confirmQty(4));
// // console.log(carts);
// console.log(confirmCheckout("y"))
/* LIST FUNCTION
1. categoryToArray()
2. productsCategory (input)
3. checkProduct (input)
4.  confirmQty (input)
*/