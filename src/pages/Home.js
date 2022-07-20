import React from "react";

class Home extends React.Component{
    render(){
        return(
            <>
                <div id="responsive-menu">
                    <ul class="menu-holder">
                        <li><a href="#"><i class="fa fa-home"></i>Home</a></li>
                        <li><a href="#about"><i class="fa fa-cogs"></i>About</a></li>
                        <li><a href="#services"><i class="fa fa-list"></i>Services</a></li>
                        <li><a href="#portfolio"><i class="fa fa-briefcase"></i>Portfolio</a></li>
                        <li><a href="#testimonials"><i class="fa fa-comment"></i>Testimonials</a></li>
                        <li><a href="#contact"><i class="fa fa-envelope"></i>Contact</a></li>
                    </ul>
                </div>
                <div class="templatemo-header tm-orange-bg-transparent">
                    <div class="templatemo-header-inner">					
                        <div class="container">
                            <h1 class="templatemo-logo text-uppercase pull-left">Mokuba</h1>
                            <nav class="hidden-xs templatemo-nav pull-right text-uppercase">
                                <ul class="menu-holder">
                                    <li><a href="#" class="active">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#testimonials">Testimonials</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                            <div class="text-right visible-xs">
                                <a href="#" id="mobile_menu"><span class="fa fa-bars"></span></a>
                            </div>			
                        </div>
                    </div> 
                </div> 
                <section class="tm-dark-bg tm-section" id="home">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="assets/images/templatemo-banner.png" alt="Banner" class="img-responsive center-block"/>				
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="tm-home-right">
                                    <h1 class="tm-home-title text-uppercase">Web Design & Development</h1>
                                    <h2 class="tm-home-subtitle tm-orange-text text-uppercase">-------------------------------------- </h2>
                                    <div class="tm-home-description">
                                        <p>We design & build responsive web apps that work on all devices and with our Hosting services we will keep your website accessible to all your clients loaclly and global.</p>
                                        <p>Get a quote today. We can beat any price on the market</p>
                                    </div>					
                                    <a href="#" class="tm-home-more tm-dark-text tm-orange-bg">Get Quote Now!</a>
                                </div>					
                            </div>
                        </div>			
                    </div>		
                </section>
                <section class="templatemo-about tm-section" id="about">
                    <img src="assets/images/tm-border-black-top.png" alt="Border" class="tm-border"/>	
                    <div class="container">
                        <div class="row">				
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <img id="member1" class="hide" src="assets/images/team/1.jpg" alt="Member 1" width="228" height="385"/>
                                <div class="canvas-wrap">						
                                    <div class="canvas-overlay">
                                        <div class="tm-member-info absolute-center">
                                            <p class="member-name text-center text-uppercase">Mary</p>
                                            <p class="member-title text-center text-uppercase">Web designer</p>
                                            <div class="tm-member-social-info text-center">
                                                <a href="#" class="fa fa-twitter"></a>
                                                <a href="#" class="fa fa-facebook"></a>
                                                <a href="#" class="fa fa-linkedin"></a>	
                                            </div>								
                                        </div>							
                                        <canvas id="member1_canvas_overlay" width="228" height="385"></canvas>
                                    </div>
                                    <canvas id="member1_canvas" width="228" height="405"></canvas>	
                                </div>					
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <img id="member2" class="hide" src="assets/images/team/2.jpg" alt="Member 2" width="228" height="385"/>
                                <div class="canvas-wrap canvas-lines">					
                                    <div class="canvas-overlay">
                                        <div class="tm-member-info absolute-center">
                                            <p class="member-name text-center text-uppercase">Kate</p>
                                            <p class="member-title text-center text-uppercase">Graphic designer</p>
                                            <div class="tm-member-social-info text-center">
                                                <a href="#" class="fa fa-twitter"></a>
                                                <a href="#" class="fa fa-facebook"></a>
                                                <a href="#" class="fa fa-linkedin"></a>	
                                            </div>								
                                        </div>							
                                        <canvas id="member2_canvas_overlay" width="228" height="385"></canvas>
                                    </div>
                                    <canvas id="member2_canvas" width="228" height="405"></canvas>	
                                </div>					
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <img id="member3" class="hide" src="assets/images/team/3.jpg" alt="Member 3" width="228" height="385"/>
                                <div class="canvas-wrap">						
                                    <div class="canvas-overlay">
                                        <div class="tm-member-info absolute-center">
                                            <p class="member-name text-center text-uppercase">Jess</p>
                                            <p class="member-title text-center text-uppercase">Web developer</p>
                                            <div class="tm-member-social-info text-center">
                                                <a href="#" class="fa fa-twitter"></a>
                                                <a href="#" class="fa fa-facebook"></a>
                                                <a href="#" class="fa fa-linkedin"></a>	
                                            </div>								
                                        </div>							
                                        <canvas id="member3_canvas_overlay" width="228" height="385"></canvas>
                                    </div>
                                    <canvas id="member3_canvas" width="228" height="405"></canvas>	
                                </div>					
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div class="tm-about-right">
                                    <h1 class="tm-about-title text-uppercase">Meet</h1>
                                    <h2 class="tm-about-subtitle tm-orange-text text-uppercase">Our Team</h2>
                                    <h3 class="tm-about-subtitle-2 text-uppercase"></h3>
                                    <div class="tm-about-description">
                                    
                                    </div>					
                            
                                </div>					
                            </div>				
                        </div>			
                    </div>		
                </section> 
                <section class="templatemo-services tm-section tm-orange-bg-transparent" id="services">
                    <img src="assets/images/tm-border-white-top.png" alt="Border" class="tm-border"/>
                    <div class="container text-center">
                        <div class="tm-pricing-table-container">
                            <div class="tm-pricing-table tm-dark-bg">
                                <h2 class="tm-pricing-header tm-orange-text text-center text-uppercase">Starter</h2>				
                                <div class="tm-pricing-details text-center tm-light-gray-text">
                                    <div class="price-tag">
                                        <div class="price-tag-inner">
                                            <span class="dollar">R</span>
                                            <span class="price">500</span>
                                            <span class="month text-uppercase">/month</span>						
                                        </div>						
                                    </div>
                                    <ul class="text-center tm-light-gray-text">
                                        <li> 2x</li>
                                        <li>Raugue blandit</li>
                                        <li>Mcondimentum</li>	
                                        <li>Curabitur deroemet</li>
                                        <li>Rsconsectetur</li>
                                        <li>Dimperdiet</li>
                                        <li>Praesent sagittis</li>
                                    </ul>
                                </div>				
                            </div>
                            <a href="#">
                                <div class="canvas-wrap">
                                    <canvas id="canvas1" width="260" height="80" ></canvas>
                                    <div class="overlay">
                                        <p class="tm-dark-text text-uppercase">Sign up</p>
                                    </div>	
                                </div>
                            </a>
                        </div>
                        <div class="tm-pricing-table-container">
                            <div class="tm-pricing-table table-big tm-dark-bg">
                                <h2 class="tm-pricing-header tm-orange-text text-center text-uppercase">Pro</h2>
                                <div class="tm-pricing-details text-center tm-light-gray-text">
                                    <div class="price-tag">
                                        <div class="price-tag-inner">
                                            <span class="dollar">R</span>
                                            <span class="price">50</span>
                                            <span class="month text-uppercase">/month</span>							
                                        </div>						
                                    </div>
                                    <ul class="text-center tm-light-gray-text">
                                        <li>Pellentesque 4x</li>
                                        <li>Raugue blandit</li>
                                        <li>Mcondimentum</li>	
                                        <li>Curabitur deroemet</li>
                                        <li>Rsconsectetur</li>
                                        <li>Dimperdiet</li>
                                        <li>Praesent sagittis</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#">
                                <div class="canvas-wrap">
                                    <canvas id="canvas2" width="300" height="80" ></canvas>
                                    <div class="overlay overlay-big">
                                        <p class="tm-dark-text text-uppercase">Sign up</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="tm-pricing-table-container">
                            <div class="tm-pricing-table tm-dark-bg">
                                <h2 class="tm-pricing-header tm-orange-text text-center text-uppercase">Advanced</h2>
                                <div class="tm-pricing-details text-center tm-light-gray-text">
                                    <div class="price-tag">
                                        <div class="price-tag-inner">
                                            <span class="dollar">$</span>
                                            <span class="price">75</span>
                                            <span class="month text-uppercase">/month</span>						
                                        </div>						
                                    </div>
                                    <ul class="text-center tm-light-gray-text">
                                        <li>Pellentesque 8x</li>
                                        <li>Raugue blandit</li>
                                        <li>Mcondimentum</li>	
                                        <li>Curabitur deroemet</li>
                                        <li>Rsconsectetur</li>
                                        <li>Dimperdiet</li>
                                        <li>Praesent sagittis</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#">
                                <div class="canvas-wrap">
                                    <canvas id="canvas3" width="260" height="80" ></canvas>
                                    <div class="overlay">
                                        <p class="tm-dark-text text-uppercase">Sign up</p>
                                    </div>	
                                </div>
                            </a>
                        </div>	
                    </div>
                    <img src="assets/images/tm-border-black-bottom.png" alt="Border" class="tm-border"/>
                </section> 
                <section class="tm-dark-bg tm-section" id="portfolio">		
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h1 class="tm-light-gray-text text-center text-uppercase">Portfolio</h1>
                                <div class="tm-portfolio-images-container margin-top-50">
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay text-center">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Lorem</h2>
                                                <p class="text-uppercase">sagittis</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/01.jpg" alt="Portfolio 1"/>
                                    </div>
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Dimperdiet</h2>
                                                <p class="text-uppercase">Aliquam</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/02.jpg" alt="Portfolio 2"/>	
                                    </div>
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Pellentesque</h2>
                                                <p class="text-uppercase">noemer</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/03.jpg" alt="Portfolio 3"/>	
                                    </div>
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Aenean</h2>
                                                <p class="text-uppercase">pharetra</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/04.jpg" alt="Portfolio 4"/>
                                    </div>
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">condimentum</h2>
                                                <p class="text-uppercase">libero</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/05.jpg" alt="Portfolio 5"/>
                                    </div>
                                    <div class="tm-image-container">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">nulla</h2>
                                                <p class="text-uppercase">consectetur</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/06.jpg" alt="Portfolio 6"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Rondimentum</h2>
                                                <p class="text-uppercase">Sdui</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/07.jpg" alt="Portfolio 7"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">imperdiet</h2>
                                                <p class="text-uppercase">Raugue</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/08.jpg" alt="Portfolio 8"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">blandit</h2>
                                                <p class="text-uppercase">Aliquam</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/09.jpg" alt="Portfolio 9"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Praesent</h2>
                                                <p class="text-uppercase">Aliquam</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/10.jpg" alt="Portfolio 10"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Dimperdiet</h2>
                                                <p class="text-uppercase">Aliquam</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/11.jpg" alt="Portfolio 11"/>
                                    </div>
                                    <div class="tm-image-container tm-show-hide">
                                        <div class="tm-portfolio-image-overlay">
                                            <div class="absolute-center">
                                                <a href="#" class="fa fa-search"></a>
                                                <h2 class="text-uppercase tm-white-text">Dimperdiet</h2>
                                                <p class="text-uppercase">Aliquam</p>	
                                            </div>								
                                        </div>
                                        <img src="assets/images/portfolio/12.jpg" alt="Portfolio 12"/>
                                    </div>
                                </div>
                                <button href="javascript:;" class="tm-view-more tm-light-gray-text margin-top-50 text-center text-uppercase">View More</button>	
                            </div>				
                        </div>
                    </div>		
                </section> 
                <section class="tm-section" id="testimonials">
                    <img src="assets/images/tm-border-black-top.png" alt="Border" class="tm-border"/>
                    <div class="container">
                        <h1 class="text-uppercase text-center">Testimonials</h1>
                        <div class="text-center margin-top-50 tm-testimonial-images-container">
                            <div class="img-container">				
                                <div class="tm-img-circle-border absolute-center" data-comment="Sed velit elit, ornare cursus ex ac, tempor viverra mi. Vestibulum tincidunt egestas tellus, vel pharetra ante tincidunt sit amet. Vestibulum vitae velit eget metus interdum interdum." data-author="Jennifer Ves Tin" id="author1">
                                    <img src="assets/images/testimonials/1.jpg" alt="Testimonial 1" class="img-circle tm-img-testimonial"/>
                                </div>	
                            </div>			
                            <div class="img-container">
                                <div class="tm-img-circle-border absolute-center" data-comment="Morbi posuere metus quam, vitae tempus nulla vehicula eu. Etiam vitae nunc faucibus, iaculis tellus eu, molestie turpis. Nam quis consequat leo. Nulla ac erat in libero porta commodo. Phasellus fringilla pharetra ullamcorper." data-author="Alicia Nulla Act" id="author2">
                                    <img src="assets/images/testimonials/2.jpg" alt="Testimonial 2" class="img-circle tm-img-testimonial"/>	
                                </div>					
                            </div>
                            <div class="img-container">
                                <div class="tm-img-circle-border absolute-center active" data-comment="Suspendisse a maximus sem. Pellentesque consequat finibus metus a varius. Morbi placerat suscipit mi, in tincidunt ligula lobortis porttitor. Mauris mollis, ex sit amet sagittis elementum, tellus quam vestibulum ex, vitae cursus massa tortor et tortor." data-author="Dacilisis Luctus" id="author3">
                                    <img src="assets/images/testimonials/3.jpg" alt="Testimonial 3" class="img-circle tm-img-testimonial"/>
                                </div>
                                
                            </div>
                            <div class="img-container">
                                <div class="tm-img-circle-border absolute-center" data-comment="Donec laoreet nisl vel nisi posuere tempus quis at tortor. Curabitur egestas elementum est sit amet gravida. Quisque maximus diam eu turpis malesuada, in interdum massa efficitur. Vestibulum blandit pellentesque ipsum a fermentum. Duis id rutrum leo." data-author="Jessica Nisi Vel" id="author4">
                                    <img src="assets/images/testimonials/4.jpg" alt="Testimonial 4" class="img-circle tm-img-testimonial"/>
                                </div>					
                            </div>
                            <div class="img-container">
                                <div class="tm-img-circle-border absolute-center" data-comment="Integer aliquam nibh nulla, id elementum purus tempus quis. Etiam eu massa condimentum, consectetur turpis et, semper diam. Vivamus mauris ipsum, bibendum non tempor nec, ultricies a leo. Fusce eu efficitur diam. Praesent vel mi viverra leo finibus maximus sed in ipsum." data-author="Malicia Viva Fusce" id="author5">
                                    <img src="assets/images/testimonials/5.jpg" alt="Testimonial 5" class="img-circle tm-img-testimonial"/>
                                </div>					
                            </div>
                        </div>
                        <p class="text-center margin-top-50 tm-comment"><em>This is a place holder for different description text.</em></p>
                        <p class="text-uppercase text-center tm-author tm-orange-text">Author Name</p>
                        <hr class="tm-author-name-underline"/>
                    </div>
                </section> 
                <section class="tm-section tm-orange-bg" id="contact">
                    <img src="assets/images/tm-border-white-top.png" alt="Border" class="tm-border"/>
                    <div class="container">
                        <h1 class="text-uppercase text-center">Contact Us</h1>
                        <p class="text-center margin-top-50">Phasellus sed rutrum quam. Aenean mollis nec metus quis fringilla. Aliquam interdum risus quis sem rhoncus, vel iaculis lorem pulvinar. Maecenas in lorem non quam bibendum auctor vel lobortis sem.</p>
                        <div class="row margin-top-50">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div id="map-canvas"></div>	
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <form action="#" method="post" class="tm-contact-form">
                                    <div class="form-group">
                                        <input type="text" id="contact_name" class="form-control" placeholder="NAME..." />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="contact_email" class="form-control" placeholder="EMAIL..." />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="contact_subject" class="form-control" placeholder="SUBJECT..." />
                                    </div>
                                    <div class="form-group">
                                        <textarea id="contact_message" class="form-control" rows="8" placeholder="WRITE A MESSAGE..."></textarea>
                                    </div>
                                    <button type="submit" class="btn text-uppercase tm-dark-bg tm-orange-text tm-send-btn">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img src="assets/images/tm-border-black-bottom.png" alt="Border" class="tm-border"></img>
                </section> 

                <footer class="text-right tm-dark-bg">		
                    <p class="text-uppercase container small">Copyright &copy; 2084 <button href="#">Company Name</button></p>
                </footer>
                <script src="assets/js/jquery-1.11.1.min.js"></script> 
                <script src="assets/js/templatemo_script.js"></script>
            </>
        )
    }
}

export default Home;
                
   