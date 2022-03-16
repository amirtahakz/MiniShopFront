import axios from "axios";
import qs from "qs";

// const data = {
//     Products :[
//         {
//         Id : 1,
//         Title : 'appple',
//         Price : '900.000',
//         Img : 'https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SX679_.jpg',
//         Des:`9th Generation Intel Core i5-9300H Processor (Up to 4.1 GHz)
//         15.6 inches Full HD Widescreen IPS LED-backlit display; NVIDIA GeForce GTX 1650 Graphics with 4 GB of dedicated GDDR5 VRAM
//         8GB DDR4 2666MHz Memory; 256GB PCIe NVMe SSD (2 x PCIe M.2 slots - 1 slot open for easy upgrades) & 1 - Available hard drive bay
//         LAN: 10/100/1000 Gigabit Ethernet LAN (RJ-45 port); Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax
//         Backlit keyboard; Acer Cool Boost technology with twin fans and dual exhaust ports`
//         },
//         {
//         Id : 2,
//         Title : 'Hp',
//         Price : '800.000',
//         Img : 'https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SX679_.jpg',
//         Des:`9th Generation Intel Core i5-9300H Processor (Up to 4.1 GHz)
//         15.6 inches Full HD Widescreen IPS LED-backlit display; NVIDIA GeForce GTX 1650 Graphics with 4 GB of dedicated GDDR5 VRAM
//         8GB DDR4 2666MHz Memory; 256GB PCIe NVMe SSD (2 x PCIe M.2 slots - 1 slot open for easy upgrades) & 1 - Available hard drive bay
//         LAN: 10/100/1000 Gigabit Ethernet LAN (RJ-45 port); Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax
//         Backlit keyboard; Acer Cool Boost technology with twin fans and dual exhaust ports`
//         },
//         {
//         Id : 3,
//         Title : 'Acer',
//         Price : '700.000',
//         Img : 'https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SX679_.jpg',
//         Des:`9th Generation Intel Core i5-9300H Processor (Up to 4.1 GHz)
//         15.6 inches Full HD Widescreen IPS LED-backlit display; NVIDIA GeForce GTX 1650 Graphics with 4 GB of dedicated GDDR5 VRAM
//         8GB DDR4 2666MHz Memory; 256GB PCIe NVMe SSD (2 x PCIe M.2 slots - 1 slot open for easy upgrades) & 1 - Available hard drive bay
//         LAN: 10/100/1000 Gigabit Ethernet LAN (RJ-45 port); Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax
//         Backlit keyboard; Acer Cool Boost technology with twin fans and dual exhaust ports`
//         },
//         {
//         Id : 4,
//         Title : 'Asus',
//         Price : '600.000',
//         Img : 'https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SX679_.jpg',
//         Des:`9th Generation Intel Core i5-9300H Processor (Up to 4.1 GHz)
//         15.6 inches Full HD Widescreen IPS LED-backlit display; NVIDIA GeForce GTX 1650 Graphics with 4 GB of dedicated GDDR5 VRAM
//         8GB DDR4 2666MHz Memory; 256GB PCIe NVMe SSD (2 x PCIe M.2 slots - 1 slot open for easy upgrades) & 1 - Available hard drive bay
//         LAN: 10/100/1000 Gigabit Ethernet LAN (RJ-45 port); Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax
//         Backlit keyboard; Acer Cool Boost technology with twin fans and dual exhaust ports`
//         },
//     ],
// }
export const ProductService = {
  GetProducts: (name ='') => {
    // slice برای اینکه یک کپی  از ابجکت را ارسال کند و برای امنیت است
    // return data.Products.slice();
    return axios
      .get("https://localhost:44332/GetProducts" + name)
      .catch((error) => console.log(error));
  },
  GetProductById: (id) => {
    //return data.Products.find(item => item.Id.toString() ===Id.toString());
    return axios
      .get("https://localhost:44332/GetProductById/?id=" + id)
      .catch((error) => console.log(error));
  },
  GetComments: (Id) => {
    return axios
      .get("https://localhost:44332/GetCommentsProduct/?id=" + Id)
      .catch((error) => console.log(error));
  },
  PostComment: (Comment) => {
    // const options = {
    //   method: "POST",
    //   headers: { "content-type": "application/x-www-form-urlencoded" },
    //   data: qs.stringify(Comment),
    //   url: "https://localhost:44332/PostComment",
    // };
    // axios(options).catch((error) => console.log(error));
    axios.post('https://localhost:44332/PostComment' , Comment)
  },
};
