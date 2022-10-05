<template>
    <section class="section banner">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="banner__info">
                        <div class="h2 title">{{ bannerTitle }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'wa-home',
    data() {
        return {
            bannerTitle: 'Enter the city',
        };
    },
};
</script>
