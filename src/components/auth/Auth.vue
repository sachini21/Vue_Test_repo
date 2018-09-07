<template>
    <div id="auth">
        <div class="container">
            <div class = "row">
                <div class = "col-md-4 col-md-offset-4 authForm">
                    <h2 class = "text-center"> Vue_test </h2>

                    <!--transition allows a little animation when switching between states-->
                    <transition name = "fade">
                     <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "auth"
    }
</script>

<!--scoped indicates that styling changes are local. Not applied golbally-->
<style scoped>
    #auth {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .authForm {
        background: #fff;
        padding-bottom: 15px;
        padding-top: 10px;
        border-radius: 18px;
    }
</style>
