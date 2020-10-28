<template>
    <li class="step">
        <a class="link">
            <span class="number is-active">{{ number }}</span>
            <span class="name">{{ name }}</span>
        </a>
    </li>
</template>

<script>
export default {
    name:'Step',
    props: [
        'number',
        'name'
    ]
}
</script>
