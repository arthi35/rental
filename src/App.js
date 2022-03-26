import logo from './logo.svg';
import './App.css';

function App() {
  const rents = [
    {equip: "Dell",
  img: "https://5.imimg.com/data5/EO/VU/MY-14705972/dell-computer-system-500x500.jpg",
  price: "Rs.3,000/month",
  },
  {
  equip: "Paper Shredder",
  img: "https://m.media-amazon.com/images/I/31pbeW6IjWL._SY355_.jpg",
  price:"Rs.1000/month",
  },
  {
  equip: "Luminous Pro",
  img: "https://shop.schneider-electric.co.in/media/catalog/product/cache/2ae9ca705c412fc06fc6bf682d887272/9/1/9145_copy.jpg",
  price: "Rs.500/month",
  },
  {
  equip: "Hp Printer",
  img: "https://m.media-amazon.com/images/I/61+h3559FyL._SX679_.jpg",
  price: "Rs.200/month",
  },
  {
  equip: "POLAM-FOTO Professional Video Tripod System",
  img: "https://m.media-amazon.com/images/I/71NXhyUdzrL._SY450_.jpg",
  price: "Rs.100/month",
  },
  {
  equip: "Color-Xerox machine",
  img: "https://cpimg.tistatic.com/05176463/b/5/Colour-Photocopier-machine.jpg",
  price: "Rs.1000/month",
  },
  {
  equip: "Ikea Drawer Unit on Casters, White, Small, Rectangular, 11 x 16.75 x 27.1 inches",
  img: "https://m.media-amazon.com/images/I/31-KGeKRa6L._SY450_.jpg",
  price: "Rs.150/month",
  },
  {
  equip: "Computer-Table",
  img: "https://5.imimg.com/data5/QF/JH/WH/SELLER-15766737/corner-computer-table-500x500.jpg",
  price: "Rs.350/month",
  },
  {
  equip: "Office-Chairs",
  img: "https://m.media-amazon.com/images/I/61DCPvJjLrL._SX466_.jpg",
  price: "Rs.150/month",
  },
  {
  equip: "HP 640 InkJet Fax Machine",
  img: "https://m.media-amazon.com/images/I/71-AdCta3PL._AC_SL1500_.jpg",
  price: "Rs.250/month",
  },
  {
  equip: "Vostro 3681 Small Desktop",
  img: "https://cdn.gameregg.com/assets/desktop-images/dell-vostro-3681.jpg",
  price: "Rs.1000/month",
  },
  {
  equip: "Logitech G Driving Force Shifter G Driving Force Shifter Joystick",
  img: "https://m.media-amazon.com/images/I/51D3-2lQu7L._SX679_.jpg",
  price: "Rs.100/month",
  },
  {
  equip: "Lenovo Legion Tower 5 Gaming Desktop (AMD Ryzen 7 5700G/16GB/512GB SSD/Windows11/NVIDIA RTX 3060 12GB GDDR6 Graphics/Legion ColdFront 2.0 Cooling/WiFi 6/Bluetooth 5.1/USB Keyboard & Mouse), 90RC00M0IN",
  img: "https://m.media-amazon.com/images/I/71OxPxfeSXL._SX679_.jpg",
  price: "Rs.1000/month",
  },
  {
  equip: "Electrobot Gaming Tower PC-Intel Core I9 11th Gen RTX 3070 8GB, 32GB RAM, 1TB HDD, 500GB NVME with 6 RGB Cooling Fans (Core I9 11900K)",
  img: "https://m.media-amazon.com/images/I/61iP0Q6NLHL._SX679_.jpg",
  price: "Rs.1000/month",
  },
  {
  equip: "T21 Rainbow Backlit USB Wired Gaming Keyboard + Mouse,Computer Mouse Pad Set For FOR PS4 FOR PS3 FOR XBOX PC",
  img: "https://img.joomcdn.net/b1f6c26b735ab03a3a4c05c3ca10c9a9e9c75001_original.jpeg",
  price: "Rs.70/month",
  },
  {
  equip: "Ecoprsio L Shaped Gaming Desk Corner Gaming Desk, Gaming Computer Desk with Keyboard Tray, Large PC Gaming Desk Gamer Desk Workstation, Computer Gaming Desk Table with Cup Holder and Headphone, Black",
  img: "https://m.media-amazon.com/images/I/71dDe8cROHS._AC_SL1500_.jpg",
  price: "Rs.200/month",
  },
  {
  equip: "CELLBELL ® GC02 Transformer Series Gaming/Racing Style Ergonomic Faux Leather High Back Chair with Removable Neck Rest and Adjustable Back Cushion (Full Black)",
  img: "https://m.media-amazon.com/images/I/61Et2Kh750L._SX569_.jpg",
  price: "Rs.100/month",
  },
  {
  equip: "Logitech G PRO X Gaming-Headset, Over-Ear Headphones with Blue VO!CE Mic, DTS Headphone:X 2.0, 50mm PRO-G Drivers, 2.0 Surround Sound for Esports Gaming, PC/PS/Xbox/VR/Nintendo Switch - Black",
  img: "https://m.media-amazon.com/images/I/61bDCk+O+pL._SX679_.jpg",
  price:"Rs.100/month",
  },
  ];

return (
  <div className="App rent-list-container">
    {rents.map((rent=>
    <Rent rent={rent} />
    ))}
  </div>
);
}

function Rent({rent}){
  return(
    <div className="rent-container">
      <img className="rent-picture" src={rent.img}alt={rent.equip}/>
      <h2 className="rent-price">🛒{rent.price}</h2>

      <h1>{rent.equip}</h1>
    </div>)
}

export default App;
