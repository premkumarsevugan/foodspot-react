import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AvailableItems from "./components/AvailableItems";
import Footer from "./components/Footer";
function App() {
  const items =[
    {
      id:1,
      src:"images/veg1.jpg",
      name:"Pasta",
      price: 1000,
      checked:false
    },
    {
      id:2,
      src:"images/veg2.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:3,
      src:"images/veg3.jpg",
      name:"Veg Meal",
      price: 700,
      checked:false
    },
    {
      id:4,
      src:"images/veg4.jpg",
      name:"Pulaaoo",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/veg5.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/veg6.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/veg7.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg1.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg2.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg3.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg4.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg5.jpg",
      name:"Salad",
      price: 500,
      checked:false
    },
    {
      id:2,
      src:"images/nveg6.jpg",
      name:"Salad",
      price: 500,
      checked:false
    }
  ];
  return (
    <div className="App">
       <Navbar />
       <Banner />
       <AvailableItems items={items}/>
       <Footer />

    </div>
  );
}

export default App;
