<template>
    <div>
        <div class="slider category-slider mb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h3>TOP CATEGORIES</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <VueSlickCarousel :settings="carouselOptions" :slidesToShow="6" :slidesToScroll="6">
                            <div class="single-category">
                                <div class="category-image">
                                    <a href="https://shobujbazar.com/category/16" title="Vegetables">
                                        <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1613567549.png" class="img-fluid" alt="">
                                    </a>
                                </div>
                                <div class="category-title">
                                    <h3>
                                        <a href="https://shobujbazar.com/category/16">Electronics</a>
                                    </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/15" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1613126206.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/15">Home Decor</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/14" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1612934215.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/14">Baby  Item</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/13" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1607504103.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/13">Female Item</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/12" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1611839879.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/12">Ready to Cook</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/11" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1611844517.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/11">Home Made Spices</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/10" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1611841551.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/10">Home made food</a>
                                </h3>
                                </div>
                            </div>
                            <div class="single-category">
                                <div class="category-image">
                                <a href="https://shobujbazar.com/category/9" title="Vegetables">
                                <img src="https://shobujbazar.com/shobuj_bazar/backend/uploads/images/master-category/master_category_1603633157.jpg" class="img-fluid" alt="">
                                </a>
                                </div>
                                <div class="category-title">
                                <h3>
                                    <a href="https://shobujbazar.com/category/9">Festival Item</a>
                                </h3>
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data () {
        return {
            carouselOptions: {
                "arrows": true,
                "lazyLoad": "ondemand",
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
            
        }
    },
    components: { VueSlickCarousel },
}
</script>
