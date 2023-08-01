<template>
    <div class="custom-list-item">
        <img class="list-icon" :src="icon" alt="Logo" />
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        props: ['text', 'icon'],
    };
</script>