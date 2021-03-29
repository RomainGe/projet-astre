<template>
    <div class="container">
        <div>Erreur {{ error.statusCode }}</div>
        <div>{{ error.message }}</div>
        <NuxtLink to="/">Back to home page</NuxtLink>
    </div>
</template>

<script>
export default {
    props: ["error"],
};
</script>
