<template>
<div id = "newsfeed">
    <h1>Latest beeps</h1>
    <beep-list></beep-list>
</div>
</template>

<script>

import Beeplist from './Beeplist';

    export default {
        name: 'newsfeed',
        components: {
            beeplist: Beeplist
        },
    }
</script>

<style scoped>

</style>