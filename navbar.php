<nav>
    <div class="container">
        <div class="row">
            <div class="col-xs-6 col-lg-4 v-center nav-left">
                <a href="index.php">
                    <img src="images/tata-tiscon-logo.png" alt="Tata Tiscon Logo" class="img-fluid logo" />
                </a>
                <img src="images/quote.svg" class="img-fluid quote" />
            </div>
            <div class="col-lg-5 col-sm-5 v-center nav-center d-xs-none">
                <ul class="menu">
                    <li class="dropdown">
                        <a href="about-us.php">About Us</a>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                        <div class="dropdown-menu product-menu">
                            
                            <a class="dropdown-item" href="sd-rebars.php">
                                <span>TATA Tiscon SD</span>
                                <img src="images/product-sd-rebars/rebars.png" />
                                <img class="default" src="images/product-sd-rebars/rebars.png" />
                            </a>
                            <a class="dropdown-item" href="ultima-superlinks.php">
                                <span>Super links</span>
                                <img src="images/GFX-coated-superlinks/superlinks.png" />
                            </a>
                            <a class="dropdown-item" href="gfx-coated-superlinks.php">
                                <span>GFX Coated super link</span>
                                <img src="images/GFX-coated-superlinks/superlinks.png" />
                            </a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="mason.php">Mason Locator</a>
                            <a class="dropdown-item" href="dealer.php">Delear Locator</a>
                            <a class="dropdown-item" href="distributor.php">Distributor Locator</a>
                            <a class="dropdown-item" href="ask-expert.php">Ask the Experts</a>
                            <a class="dropdown-item" href="rcp.php">Recommend Consumer Prices</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Programs</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="discovery.php">Discovery Program</a>
                            <a class="dropdown-item" href="#">Mitr Program</a>
                            <a class="dropdown-item" href="basera.php">TATA Basera</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-xs-6 col-lg-3 v-center nav-right">
                <button class="btn buy-online">
                    <img src="./images/dealer/book-online.svg" />
                    Buy Online
                </button>
                <a href="#" class="search-btn">
                    <img src="images/search.svg" />
                </a>

                <div class="hamburger-menu desktop">
                    <a href="#" data-toggle="modal" data-target="#modal_menu">
                        <img src="images/hamburger.svg"/>
                    </a>
                </div>
            </div>
            <!-- hamburger for mobile -->
            <div class="hamburger-menu mobile">
                    <a class="navbar-toggler" data-toggle="collapse" href="#" role="button" data-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation"><img src="images/hamburger.svg"/></a>
                    <div class="collapse navbar-collapse" id="mobileMenu">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="sd-rebars.php">TATA Tiscon SD</a>
                                    <a class="dropdown-item" href="ultima-superlinks.php">Super links</a>
                                    <a class="dropdown-item" href="gfx-coated-superlinks.php">GFX Coated super link</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="mason.php">Mason Locator</a>
                                    <a class="dropdown-item" href="dealer.php">Delear Locator</a>
                                    <a class="dropdown-item" href="distributor.php">Distributor Locator</a>
                                    <a class="dropdown-item" href="ask-expert.php">Ask the Experts</a>
                                    <a class="dropdown-item" href="rcp.php">Recommend Consumer Prices</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Programs</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="discovery.php">Discovery Program</a>
                                    <a class="dropdown-item" href="#">Mitr Program</a>
                                    <a class="dropdown-item" href="basera.php">TATA Basera</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="home-building.php">Home Building Guide</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="">Your Building Stories</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="">Media Room</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="contact-us.php">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>

        <!-- search for mobile -->
        <div class="row mt-2">
            <div class="col-sm-12 col-12 mobile-search">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="What are ou looking for?" aria-label="What are you looking for?">
                <button class="btn my-2 my-sm-0" type="submit"><img src="./images/mason/search.svg" alt="src"></button>
            </form>
            </div>
        </div>
        
    </div>

    <!-- modal-menu -->
    <div class="modal fade" id="modal_menu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <img src="images/tiscon-logo.png" class="mx-auto d-block" />
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.702" height="25.702" viewBox="0 0 25.702 25.702"><defs><style>.c{fill:#d4001c !important;stroke:#eaebee;}</style></defs><path class="c" d="M-1072.029,251.664l9.5-9.5a1.631,1.631,0,0,0,0-2.307,1.631,1.631,0,0,0-2.307,0l-9.5,9.5-9.5-9.5a1.632,1.632,0,0,0-2.307,0,1.632,1.632,0,0,0,0,2.307l9.5,9.5-9.5,9.5a1.632,1.632,0,0,0,0,2.307,1.627,1.627,0,0,0,1.154.478,1.626,1.626,0,0,0,1.153-.478l9.5-9.5,9.5,9.5a1.626,1.626,0,0,0,1.154.478,1.625,1.625,0,0,0,1.153-.478,1.631,1.631,0,0,0,0-2.307Z" transform="translate(1087.252 -238.749)"/></svg>
                </button>
            </div>
            <div class="modal-body">
                <ul class="d-flex justify-content-center align-items-center">
                    <li>
                        <a href="home-building.php">Home Building Guide</a>
                    </li>
                    <li>
                        <a href="">Your Building Stories</a>
                    </li>
                    <li>
                        <a href="">Media Room</a>
                    </li>
                    <li>
                        <a href="contact-us.php">Contact us</a>
                    </li>
                </ul>
            </div>
            <div class="modal-footer justify-content-center">
                <ul>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="28" viewBox="0 0 27 28"><defs><style>.a{fill:#102a6b !important;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="27" height="28" transform="translate(0.214 -0.464)"/></clipPath></defs><g class="b" transform="translate(-0.214 0.464)"><path class="a" d="M24.552,12.276A12.276,12.276,0,1,0,12.276,24.552l.216,0V14.993H9.854V11.919h2.637V9.657a3.692,3.692,0,0,1,3.941-4.051,21.71,21.71,0,0,1,2.364.121V8.469H17.184c-1.273,0-1.519.605-1.519,1.493v1.958h3.044l-.4,3.074H15.664v9.085a12.282,12.282,0,0,0,8.887-11.8Zm0,0" transform="translate(1.385 0.578)"/></g></svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a{fill:#102a6b !important;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="28" height="28" transform="translate(-0.146 -0.464)"/></clipPath></defs><g class="b" transform="translate(0.146 0.464)"><g transform="translate(1.843 0.578)"><path class="a" d="M211.741,209.371A2.371,2.371,0,1,1,209.371,207,2.371,2.371,0,0,1,211.741,209.371Zm0,0" transform="translate(-196.859 -197.18)"/><path class="a" d="M146.86,137.125a2.355,2.355,0,0,0-1.35-1.35,3.936,3.936,0,0,0-1.32-.245c-.75-.034-.975-.042-2.874-.042s-2.124.007-2.874.041a3.937,3.937,0,0,0-1.32.245,2.356,2.356,0,0,0-1.35,1.35,3.936,3.936,0,0,0-.245,1.321c-.034.75-.042.975-.042,2.874s.007,2.124.042,2.874a3.935,3.935,0,0,0,.245,1.32,2.355,2.355,0,0,0,1.35,1.35,3.93,3.93,0,0,0,1.321.245c.75.034.975.041,2.874.041s2.124-.007,2.874-.041a3.93,3.93,0,0,0,1.321-.245,2.355,2.355,0,0,0,1.35-1.35,3.937,3.937,0,0,0,.245-1.32c.034-.75.041-.975.041-2.874s-.007-2.124-.041-2.874A3.928,3.928,0,0,0,146.86,137.125Zm-5.544,7.846a3.652,3.652,0,1,1,3.652-3.652A3.652,3.652,0,0,1,141.315,144.971Zm3.8-6.6a.853.853,0,1,1,.853-.853A.853.853,0,0,1,145.112,138.376Zm0,0" transform="translate(-128.924 -129.246)"/><path class="a" d="M12.276,0A12.276,12.276,0,1,0,24.552,12.276,12.277,12.277,0,0,0,12.276,0Zm7.006,15.182a5.172,5.172,0,0,1-.328,1.711,3.6,3.6,0,0,1-2.062,2.062,5.175,5.175,0,0,1-1.711.328c-.752.034-.992.043-2.906.043s-2.154-.008-2.906-.043a5.175,5.175,0,0,1-1.711-.328A3.6,3.6,0,0,1,5.6,16.893a5.17,5.17,0,0,1-.328-1.711c-.035-.752-.043-.992-.043-2.906s.008-2.154.043-2.906A5.172,5.172,0,0,1,5.6,7.658,3.607,3.607,0,0,1,7.658,5.6,5.176,5.176,0,0,1,9.37,5.269c.752-.034.992-.043,2.906-.043s2.154.008,2.906.043a5.177,5.177,0,0,1,1.711.327,3.605,3.605,0,0,1,2.062,2.062,5.171,5.171,0,0,1,.328,1.711c.034.752.042.992.042,2.906S19.317,14.43,19.282,15.182Zm0,0"/></g></g></svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="28" viewBox="0 0 25 28"><defs><style>.a{fill:#102a6b !important;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="25" height="28" transform="translate(0.453 -0.464)"/></clipPath></defs><g class="b" transform="translate(-0.453 0.464)"><path class="a" d="M12.276,0A12.276,12.276,0,1,0,24.552,12.276,12.277,12.277,0,0,0,12.276,0ZM8.709,18.558H5.719V9.563h2.99ZM7.214,8.335H7.194a1.558,1.558,0,1,1,.039-3.108,1.559,1.559,0,1,1-.02,3.108ZM19.489,18.558H16.5V13.746c0-1.209-.433-2.034-1.515-2.034A1.637,1.637,0,0,0,13.451,12.8a2.047,2.047,0,0,0-.1.73v5.023h-2.99s.039-8.151,0-8.995h2.99v1.274a2.968,2.968,0,0,1,2.694-1.485c1.967,0,3.442,1.286,3.442,4.048Zm0,0" transform="translate(0.218 0.578)"/></g></svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="28" viewBox="0 0 27 28"><defs><style>.a{fill:#102a6b !important;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="27" height="28" transform="translate(0.176 -0.464)"/></clipPath></defs><g class="b" transform="translate(-0.176 0.464)"><path class="a" d="M12.276,0A12.276,12.276,0,1,0,24.552,12.276,12.277,12.277,0,0,0,12.276,0Zm5.6,9.571q.008.181.008.364a7.962,7.962,0,0,1-8.017,8.017h0a7.976,7.976,0,0,1-4.319-1.266,5.731,5.731,0,0,0,.672.039,5.654,5.654,0,0,0,3.5-1.206,2.821,2.821,0,0,1-2.632-1.957,2.808,2.808,0,0,0,1.273-.048A2.818,2.818,0,0,1,6.1,10.752c0-.013,0-.024,0-.036a2.8,2.8,0,0,0,1.276.352,2.82,2.82,0,0,1-.872-3.762,8,8,0,0,0,5.808,2.944,2.819,2.819,0,0,1,4.8-2.57A5.651,5.651,0,0,0,18.907,7a2.829,2.829,0,0,1-1.239,1.558,5.62,5.62,0,0,0,1.618-.444,5.726,5.726,0,0,1-1.405,1.459Zm0,0" transform="translate(0.677 0.578)"/></g></svg>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="28" viewBox="0 0 26 28"><defs><style>.a{fill:#102a6b !important;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="26" height="28" transform="translate(-0.184 -0.464)"/></clipPath></defs><g class="b" transform="translate(0.184 0.464)"><g transform="translate(1.134 0.578)"><path class="a" d="M224.113,212.968l4.279-2.464-4.279-2.464Zm0,0" transform="translate(-213.516 -198.525)"/><path class="a" d="M12.276,0A12.276,12.276,0,1,0,24.552,12.276,12.277,12.277,0,0,0,12.276,0Zm7.67,12.288a20.26,20.26,0,0,1-.316,3.69,1.922,1.922,0,0,1-1.352,1.352,46.658,46.658,0,0,1-6,.316,44.988,44.988,0,0,1-6-.329,1.922,1.922,0,0,1-1.352-1.352,20.172,20.172,0,0,1-.316-3.69,20.248,20.248,0,0,1,.316-3.69A1.961,1.961,0,0,1,6.273,7.221a46.657,46.657,0,0,1,6-.316,44.892,44.892,0,0,1,6,.329A1.922,1.922,0,0,1,19.63,8.586a19.227,19.227,0,0,1,.316,3.7Zm0,0" transform="translate(0 0)"/></g></g></svg>
                        </a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</nav>