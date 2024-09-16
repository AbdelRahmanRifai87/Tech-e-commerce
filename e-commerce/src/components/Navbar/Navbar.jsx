function Navbar(){
return(
    
    <div className="navContainer d-flex">
        <div className="logo">
            <img src="../../../public/Logo.jpg" alt="" width={"50px"} height={"50px"} />
        </div>
        <div className="search d-flex ">
            <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder="Search" />
        </div>
        <div className="links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="profile">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
        </div>

    </div>
  
);


}
export default Navbar;