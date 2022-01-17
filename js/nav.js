const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
          <img src="img/dark-logo.png"  class= brand-logo alt="">
      <div class=nav-items>
          <div class="search">
              <input type="text" class="search-box" placeholder="Search">
              <button class="search-btn">
                  search
              </button>
          </div>
        <a href="#"> <img src="img/user.png" alt="User"></a>
        <a href="#"> <img src="img/cart.png" alt="cart"></a>
      </div>
        </div>
        <ul class=links-container>
            <li class="link-item"><a href="#" class="link">comics</a></li>    
            <li class="link-item"><a href="#" class="link">historias completas</a></li>
            <li class="link-item"><a href="#" class="link">tapa dura</a></li>
            <li class="link-item"><a href="#" class="link">LJA</a></li>
            <li class="link-item"><a href="#" class="link">Batman</a></li>
        </ul>
    `;
}

createNav();