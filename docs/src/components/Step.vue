<template>
    <li class="step">
        <a class="link">
            <span class="number is-active">{{ number }}</span>
            <span class="name">{{ name }}</span>
        </a>
    </li>
</template>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

export default {
    name:'Step',
    props: ['number','name'],
}
</script>