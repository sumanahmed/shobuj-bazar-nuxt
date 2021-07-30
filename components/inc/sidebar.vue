<template>
    <div>
        <div class="hero-side-category">
            <div class="category-toggle-wrap">
                <button class="category-toggle"> <span class="arrow_carrot-right_alt2 mr-2"></span> All Categories</button>
            </div>
            <nav id="sidebar">
                <div class="p-4 pt-5">
                    <ul class="list-unstyled main-ul components mb-5">
                        <li v-for="(masterCategory, index) in masterCategories" :key="index">
                            <nuxt-link :to="{path: '/category?type=1' + '&id=' + masterCategory.id }" :class="masterCategory.category ? 'has-dropdown' : '' ">{{ masterCategory.en_name }}</nuxt-link>
                            <!-- <ul v-if="masterCategory.category.length > 0" class="list-unstyled has-sub" >
                                <li v-for="(category, indx) in masterCategory.category" :key="indx">
                                    <a href="#" >{{ category.en_name }}</a>
                                </li>
                            </ul> -->
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            masterCategories: [],
        }
    },
    created () {
        this.getSidebarMenus()
    },
    methods: {
        async getSidebarMenus () {
            const result = await this.$axios.$get('api/sidebar-menu')
            if (result.success) {
                this.masterCategories = result.data
            }
        }
    }
}
</script>
