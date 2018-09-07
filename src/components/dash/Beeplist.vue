<template>
    <div id = "beeplist">
    </div>
</template>

<script>

import Beep from './beep';

export default {
    name: beeplist,
    components: {
        beeps: Beep
    },
    created: function(){
        this.beeps = [];
        this.getbeeps();
    },
    data: function(){
        return{
            beeps:[]
        }
    },
    methods: {
        getbeeps:function(){
                this.$http.get('/beeps')
                .then(function(res){
                    this.beeps = res.body.data;
                })
                
            
        }
       
    }

}


</script>

<style></style>