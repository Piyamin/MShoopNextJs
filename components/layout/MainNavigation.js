import Link from 'next/link';

function MainNavigation() {

  return (
    <><div>
  <header>
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="menu-wrapper">
            <div className="logo">
              <a href="/"><img src="assets/img/logo/logo.png" alt /></a>
            </div>
            <div className="header-right main-menu">
              <nav>                                                
                <ul id="navigation">  
                  <li><a href="#">Home</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">Contact</a></li>
                  <li> <a href="#"><span className="flaticon-user" /></a>
                    <ul className="submenu">
                      <li><a href="#">User</a></li>
                      <li><a href="#">Admin</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span className="flaticon-shopping-cart" /></a> </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>

    </>
  );
}
export default MainNavigation;
