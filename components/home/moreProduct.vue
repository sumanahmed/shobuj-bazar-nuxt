<template>
    <div>
        <div class="slider tab-slider mb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tab-slider-wrapper">
                            <nav>
                                <div class="nav nav-tabs">
                                    <a class="nav-item nav-link">More Products</a>
                                </div>
                            </nav>
                        </div>
                        <div class="row">
                            <singleItem />                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import singleItem from '@/components/product/singleItem'

export default {
    components: { singleItem }
}
</script>
