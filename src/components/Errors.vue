<template>
    <section class="section errors">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="errors__item">{{ errors }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'wa-errors',
    props: {
        errors: {
            type: String,
            required: false,
        },
    },
};
</script>

<style>
.errors {
    position: relative;
    width: 100%;
    margin: 30px 0;
}
.errors__item {
    position: relative;
    width: 100%;
    padding: 20px;
    background-color: var(--color-grey);
    font-size: 17px;
    color: var(--color-black);
}
</style>
