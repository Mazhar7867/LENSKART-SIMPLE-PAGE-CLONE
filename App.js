function App(){

  const quicklinks = [
    "Do More, Be More",
    "tryin3d",
    "storelocator",
    "singapore",
    "UAE",
    "John Jacobs",
    "Aqualense",
    "cobrowsing",
    "engineering blogs",
    "partner with us"
]

    const quicklink =[
    "EYEGLASSES",
    "SCREENGLASSES",
    "KIDSGLASSES",
    "CONTACTGLASSES",
    "SUNGLASSES",
    "HOME EYE-TEST",
    "STORE LOCATOR"
  ]

  const mainsection = [
      "Eyewear",
      "Eyeglasses",
      "Promotions",
      "Eyeglasses",
  ]
  return (
<div className="h-screen w-screen ">
<div className="flex justify-between px-4 py-2">
  <div className="flex gap-2 divide-x divide-gray-400">
{
quicklinks.map((link)=>{
   return(
 <span className="pl-2 text-xs"> {link} </span> 
   )
})
}
 </div>

<span className=" text-xs">Contact us</span>
</div>

<div className="flex justify-between items-center">
  {/* logo */}
 <div>
    <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="lenskart-logo"></img>
 </div>

  {/* contact no and search-box */}
 <div className="flex gap-10">
  {/* contact */}
   <div className="text-blue-950 font-bold items-center">
    99998 99998
   </div>

  {/* searchbox  */}
  <input placeholder="What are you looking for ?" className="border border-blue-950 w-[650px] rounded py-1 px-2" ></input>
 </div>

   {/* actions   */}
 <div className="flex gap-6 items-center pr-4 text-sm">
  <div>Track Order</div>
  <div>Sign in & Sign up</div>
  <div>Wishlist</div>
  <div>Cart</div>
 </div>

</div>


<div className="flex justify-between px-4 py-2  bg-gray-100 items-center">
  <div className="flex gap-2  text-blue-950 font-bold ">
{
quicklink.map((links)=>{
   return(
 <span className="pl-2 text-xs"> {links} </span> 
   )
})
}
 </div >
 
 <div className="flex h-8 gap-1">

<img className="rounded" src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"></img>
<img className="rounded" src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"></img>
<img className="rounded" src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"></img>
 </div>
</div>

<div className="flex justify-between px-4 py-2 mt-2">
  <div className="flex gap-2 divide-x divide-gray-400">
{
mainsection.map((link)=>{
   return(
 <span className="pl-2 text-xs"> {link} </span> 
   )
})
}
 </div>

<span className=" text-xs  ">problem in placing order $ Give a missed call
  <span className="gap-1 text-blue-950 font-bold" >9999899998</span>
  </span>
</div>


  <div className="mt-2">
    <img src="https://static1.lenskart.com/media/desktop/img/h24/oct/flash%2026/EYE%20&%20SUN/DAY-2/ONLINE/PLP-web.gif"></img>
  </div>

<div className="flex">
 
 {/* sidebaar */}
 <div className="w-64 border-r-2  mt-2 pl-1">
  <h1>AGE GROUP</h1>
  
<div className="items-center text-black-100 ">
  <input className="h-4 w-4" type="checkbox"></input>
  <span> 8-12 yrs[10]</span>
</div>

  <h1 className="mt-3">FRAME TYPE</h1>
<div className=" mt-2 gap-1 flex text-sm">
  <br></br>
  <div className="border  w-16 ">
  <img className="h-9 " src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"></img>
  <p className="text-center">Full Rim</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"></img>
  <p className="text-center">Half Rim</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"></img>
  <p className="text-center">Rimless</p>
  </div>
</div>

  <h1 className="mt-3">FRAME SHAPE</h1>
<div className=" mt-2 gap-1 flex text-sm text-black-100">
  <br></br>
  <div className="border  w-16">
  <img className="h-9 " src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"></img>
  <p className="text-center">Rectangle</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"></img>
  <p className="text-center">Square</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"></img>
  <p className="text-center">Rounded</p>
  </div>
</div>
<div className=" mt-2 gap-1 flex text-sm text-black-100">
  <br></br>
  <div className="border  w-16">
  <img className="h-9 " src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"></img>
  <p className="text-center">Cat-Eye</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"></img>
  <p className="text-center">Geometric</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"></img>
  <p className="text-center">Wayfarer</p>
  </div>
</div>
  
<div className=" mt-2 mb-2 gap-1 flex text-sm text-black-100">
  <br></br>
  <div className="border  w-16 ">
  <img className="h-9 " src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png"></img>
  <p className="text-center">Aviator</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png"></img>
  <p className="text-center">Clubmas</p>
  </div>
  <div className="border  w-16">
  <img className="h-9" src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png"></img>
  <p className="text-center">Wayf</p>
  </div>
</div>
 
 <div className="mt-3 border-b">
  <h1 className="border-b mt-4 text-gray-800">FRAME COLOR</h1>
  <h1 className="border-b mt-4 text-gray-800">BRANDS</h1>
  <h1 className="border-b mt-4 text-gray-800">FRAME SIZE</h1>
  <h1 className="border-b mt-4 text-gray-800">PRICE</h1>
  <h1 className="border-b mt-4 text-gray-800">PRICE</h1>
  <h1 className="border-b mt-4 text-gray-800">GENDER</h1>
  <h1 className="border-b mt-4 text-gray-800">MATERIAL</h1>
  <h1 className="border-b mt-4 text-gray-800">WEIGHT GROUP</h1>
  <h1 className="border-b mt-4 text-gray-800">PRESCRIPTION TYPE</h1>
  <h1 className="border-b mt-4 text-gray-800">SUPPORTED POWERS</h1>
  <h1 className="border-b mt-4 text-gray-800">GLASS COLOR</h1>
  <h1 className="border-b mt-4 text-gray-800">SUB COLLECTIO</h1>
  <h1 className="border-b mt-4 text-gray-800">FRAME WIDTH</h1>
  <h1 className="border-b mt-4 text-gray-800">PRODUCT TYPE</h1>
 </div>
  </div>

{/* hero-section */}
<div>

<div className=" flex  h-10 w-[100%] bg-gray-100  gap-20 justify-between items-center">
  <h1 className="ml-2">EYEGLASSES</h1>
  <h1 className="text-green-500 font-bold"> VIEW FRAMES</h1>
  <input className="" type="range"></input>
  <h1>VIEW 3D TRY ON</h1>
  <h1 className="text-green-500 font-bold">SORT BY</h1>
  <input placeholder="Best Sellers" type="input"></input>
</div>
<h1 className="text-center mt-1 mb-1">Showing 30 of 2514 Results</h1>

<div className="grid grid-cols-3 gap-4 pl-2 rounded">
  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/dark-night-full-rim-wayfarer_207671_1.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-studio-lk-e17107-c1-eyeglasses__dsc5481_30_05_2024.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-gunmetal-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14936-c1-eyeglasses_g_4585_02_08_2022.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13441-c5-eyeglasses_img_0986_16_01_2024.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e17197-c1-eyeglasses_l_dsc2281.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14360-C2-Eyeglasses_J_1845.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13033-m-c2-c2-eyeglasses_g_3464.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-silver-full-rim-rectangle-lenskart-air-signia-la-e14016-c1-eyeglasses_csvfile-1673003051725-g_2034_09-july.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>


  <div className="p-4 border border-gray-200">
  <img src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-blue-silver-full-rim-square-lenskart-air-air-essentials-la-e13519-c3-eyeglasses_img_1410_05_02_2024.jpg"></img>
<div className=" w-20">
 <button>4.6<span className="text-green-600 font-bold p-1">*</span> 618</button>
</div>
<h1>Lenskart Air</h1>
<p>Size : Medium + Air Fusion</p>
<p>Price : Rs.2000</p>
<div className="border mt-2 pl-2 w-[100%] bg-yellow-200">
 <p >Get it for Rs3500 with free 
  <br></br>
  lenses</p>
</div>
  </div>

</div>


</div>

 
 <div>

 </div>
</div>
<div className="bg-blue-900 text-white p-6 border border-b-2">
  <h1 className="text-2xl">Buy The Best EyeWear From Lenskart </h1>
  <p>Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has Revolutionised The Eyewear Industry In The Country With Its Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores Across Major Cities In The Country To Innovative Integration Of Technology While Purchasing Online, Lenskart Caters To Every Customer With Several Deals And Offers.
  </p>
  <p>A One-Stop Online Solution For Purchasing Eyewear And Its Accessories, Lenskart Delivers Them Right At Your Doorstep With Convenient Methods Of Payment. Sunglasses as well as Eyeglasses Are Available For Men And Women In A Diverse Array Of Styles And Trendy Colours. If You Want To Try Out Contact Lenses, Pick The Ones Of Your Choice From The Extensive Variety Of Coloured Contact Lenses From Our Online Store.
</p>
<div className="mt-16 flex gap-16 text-xl">
  <h1>Services</h1>
  <h1>About US</h1>
  <h1>Help</h1>
</div>
<div className="flex justify-between ">
  <div className="flex gap-12">
    <h1>Store Locator</h1>
    <h1>we Are Hiring</h1>
    <h1>FAQs</h1>
  </div>
  <div className="flex gap-1 pr-32">
<img src="https://static.lenskart.com/media/desktop/img/play-store.svg"></img>
  <img src="https://static.lenskart.com/media/desktop/img/app-store.svg"></img>
  </div>
</div>
<div className="flex justify-between">
  <div className="flex gap-12">
  <h1>Buying Guide</h1>
  <h1>Refer And Earn</h1>
  </div>
  <div className="text-sm pr-7">
<h1>Download Lenskart App to buy</h1>
  <h1>EYEGLASSES,SUNGLASSES AND CONTACTGLASSES</h1>
  </div>
</div>
<div className="flex gap-20">
  <h1>Frame Us</h1>
  <h1>About Us</h1>
</div>

<div className="flex justify-between mt-12 mb-12 text-xl border-t pt-4">
  <div className="flex gap-4">
    <h1>T & C</h1>
    <h1>Privacy</h1>
    <h1>Disclaimer</h1>
  </div>
  <div className="flex gap-4">
    <h1>Version 1.0.0</h1>
    <h1>||</h1>
    <h1>Follow Us</h1>
    <img></img>
    <img></img>
  </div>
</div>
</div>





</div>

);
}
export default App;   
