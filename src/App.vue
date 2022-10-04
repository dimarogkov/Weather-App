<template>
    <router-view />
</template>

<script>
export default {
    name: 'wa-app',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    --color-white: #fff;
    --color-black: #282828;
    --color-grey: #ecf0f1;
    --color-theme: #667eea;
    --header-height: 70px;
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-text-size-adjust: none;
    box-sizing: border-box;
}
html::-webkit-scrollbar,
html *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
html::-webkit-scrollbar-track,
html *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
}
html::-webkit-scrollbar-thumb,
html *::-webkit-scrollbar-thumb {
    background: var(--color-black);
}
:focus,
:active,
:visited {
    outline: none;
}
body {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    color: var(--color-black);
    margin: 0;
    padding: 0;
}
.section {
    position: relative;
    width: 100%;
}
a {
    color: var(--color-black);
    text-decoration: none;
}
ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
h1,
.h1 {
    position: relative;
    font-size: 40px;
    line-height: 1em;
}
h2,
.h2 {
    position: relative;
    font-size: 34px;
    line-height: 1em;
}
h3,
.h3 {
    position: relative;
    font-size: 28px;
    line-height: 1em;
}
.link {
    position: relative;
    display: inline-block;
    font-size: 17px;
    font-weight: 500;
    color: var(--color-black);
}
.link::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-black);
    transition: all 0.3s;
}
.link:hover::before {
    left: auto;
    right: 0;
    width: 0;
}
.btn {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 15px;
    color: var(--color-white);
    text-transform: uppercase;
    border: 2px solid var(--color-black);
    background-color: var(--color-black);
    transition: all 0.4s;
}
.btn:hover {
    color: var(--color-black);
    background-color: transparent;
}
.btn:active {
    transform: translateY(5px);
}
.btn[disabled] {
    opacity: 0.7;
    pointer-events: none;
}
.form {
    position: relative;
    width: 100%;
}
.form input {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: var(--color-black);
    padding: 0 20px;
    border: 2px solid var(--color-black);
}
@media (min-width: 1441px) and (max-width: 1640px) {
    .container {
        max-width: 1340px;
    }
}
@media (min-width: 1200px) and (max-width: 1440px) {
    .container {
        max-width: 1240px;
    }
}
@media (min-width: 1200px) and (max-width: 1730px) {
    .col-lt-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-lt-11 {
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }
    .col-lt-10 {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }
    .col-lt-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-lt-8 {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    .col-lt-7 {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }
    .col-lt-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-lt-5 {
        max-width: 41.666667%;
        flex: 0 0 41.666667%;
    }
    .col-lt-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    .col-lt-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-lt-2 {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }
    .offset-lt-0 {
        margin-left: 0;
    }
    .offset-lt-3 {
        margin-left: 25%;
    }
    .offset-lt-2 {
        margin-left: 16.666667%;
    }
    .offset-lt-1 {
        margin-left: 8.333333%;
    }
}
@media (max-width: 767px) {
    :root {
        --header-height: 60px;
    }
}
</style>
