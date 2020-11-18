<!--
  Component: Step
  Description: Custom variant of TableOfProgressStep component
  Props: [ 'number', 'name' ]
  Nested Components: None
-->

<template>
    <li class="step">
        <div class="link">
            <span class="number is-active has-background-white has-text-black">{{ number }}</span>
            <span class="name has-text-black">{{ name }}</span>
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
