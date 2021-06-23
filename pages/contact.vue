<template>
    <div>
        <div class="hero-slider-with-category-container mt-20 mb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 mb-xs-35">					
                                <div class="contact-page-side-content">
                                    <h3 class="contact-page-title">Contact us</h3>						
                                    <div class="single-contact-block">
                                        <h4><img src="https://shobujbazar.com/shobuj_bazar/frontend/images/icons/contact-icon1.png" alt=""> Address</h4>
                                        <p>Tangail</p>
                                    </div>						
                                    <div class="single-contact-block">
                                        <h4><img src="https://shobujbazar.com/shobuj_bazar/frontend/images/icons/contact-icon2.png" alt=""> Phone</h4>
                                        <p>Mobile: 01844909035</p>
                                        <p>Hotline: </p>
                                    </div>						
                                    <div class="single-contact-block">
                                        <h4><img src="https://shobujbazar.com/shobuj_bazar/frontend/images/icons/contact-icon3.png" alt=""> Email</h4>
                                        <p>info@shobujbazar.com</p>
                                        <p>info@shobujbazar.com</p>
                                    </div>
                                </div>
                            </div>					
                            <div class="col-lg-8 col-md-8 pl-100 pl-xs-15">					
                                <div class="contact-form-content">
                                    <h3 class="contact-page-title">Send Your Message</h3>
                                    <div class="contact-form">
                                        <form  id="contact-form" action="https://shobujbazar.com/contact/send-email" method="post">
                                            <input type="hidden" name="_token" value="FcMzFGHBzMeEsw6Twd6vQffSyIc8Bfy5cEIHGnX3">										<div class="form-group">
                                                <label for="email">Name <span class="required">*</span></label>
                                                <input type="text" name="name" id="customername" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email <span class="required">*</span></label>
                                                <input type="email" name="email" id="email" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="subject">Subject</label>
                                                <input type="text" name="subject" id="subject">
                                            </div>
                                            <div class="form-group">
                                                <label for="message">Message</label>
                                                <textarea name="message" id="message" rows="3"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" value="submit" id="submit" class="contact-form-btn" name="submit">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                    <p class="form-messege pt-10 pb-10 mt-10 mb-10"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>