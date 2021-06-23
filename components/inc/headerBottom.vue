<template>
    <div class="header-bottom header-bottom-other fixme">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center">
                    <div class="logo">
                        <a href="https://shobujbazar.com">
                            <img src="/images/logo.png" class="img-fluid" alt="" style="width:130px;height: 50px; padding-top: 10px;">
                        </a>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-12">
                    <div class="menubar-top d-flex justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15">
                        <!-- header phone number -->
                        <div class="header-contact d-flex">
                            <div class="phone-icon">
                                <img src="/images/icon-phone.png" class="img-fluid" alt="">                        
                            </div>
                            <div class="phone-number">
                                Phone: <span class="number">01844909035</span>
                            </div>
                        </div>
                        <!-- end of header phone number -->
                        <!-- search bar -->
                        <div class="header-advance-search">
                            <form action="https://shobujbazar.com/product/search/products" method="get">
                                <input type="text" name="search" id="search"  autocomplete="off" placeholder="Search your product">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                            <div id="product_list" style="margin-top:10px;"></div>
                        </div>
                        <!-- end of search bar -->
                        <!-- shopping cart -->
                        <div class="shopping-cart" id="shopping-cart">
                            <a href="https://shobujbazar.com/cart">
                                <div class="cart-icon d-inline-block">
                                    <span class="icon_bag_alt"></span>
                                </div>
                                <div class="cart-info d-inline-block">
                                    <p>Shopping Cart                                <span class="total_item_amount" >
                                    <span class="dropdown-cart-item">0</span> items - <span class="dropdown-cart-subtotal">0</span>
                                    </span>
                                    </p>
                                </div>
                            </a>
                            <!-- end of shopping cart -->
                            <!-- cart floating box -->
                            <div class="cart-floating-box cart-dropdown" id="cart-floating-box">
                                <div class="cart-items">
                                </div>
                                <div class="cart-calculation">
                                    <div class="calculation-details">
                                    <p class="total">Subtotal <span class="dropdown-cart-subtotal"> </span></p>
                                    </div>
                                    <div class="floating-cart-btn text-center">                            
                                    <a href="https://shobujbazar.com/cart">View Cart</a>
                                    <a href="https://shobujbazar.com/cart/clear">Clear Cart</a>
                                    </div>
                                </div>
                            </div>
                            <!-- end of cart floating box -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <!-- Mobile Menu -->
                    <div class="mobile-menu d-block d-lg-none"></div>
                </div>
            </div>
        </div>
        <div class="home-other-navigation-menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- navigation section -->
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    <li style="width: 100%; text-align:center; display:block"><a>We make shopping easy, We make life easy</a></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- end of navigation section -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>