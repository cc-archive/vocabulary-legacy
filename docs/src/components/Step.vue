<!--
  Component: Step
  Description: Custom variant of TableOfProgressStep component
  Props: [ 'number', 'name' ]
  Nested Components: None
-->

<template>
    <li class="step">
        <div class="link">
            <span class="number is-active">{{ number }}</span>
            <span class="name">{{ name }}</span>
        </div>
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
