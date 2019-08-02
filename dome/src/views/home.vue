<template>
    <div class="page">
        <el-header></el-header>
        <div class="main">
            <div class="nav">
                <router-link to="/home/multipoint">多点超市</router-link>
                <router-link to="/home/selected">全球精选</router-link>
            </div>
            <div class="mains">
                <router-view/>
            </div>
        </div>
        <el-footer></el-footer>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .nav{
        width:100%;
        height:45px;
        display: flex;
        border-bottom: 1px solid #ccc;
    }
    .nav a{
        line-height: 45px;
        padding:0 10px;
    }
</style>
