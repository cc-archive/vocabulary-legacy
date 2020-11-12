<!--
  Component: Monorepo
  Description: A section describing why vocabulary needs to be a monorepo
  Props: None
  Nested Components: [ Step ]
-->

<template>
    <div class="page-section padding-section-margin group">
        <span class="card-content has-bottom-link">
            <h2 class="card-title">Vocabulary, a Monorepo?</h2>
            <span class="content">Vocabulary comprises of the Fonts, Vocabulary & Vue-Vocabulary packages.</span>
        </span>
        <div class="point-table group">
            <div class="table-of-progress top-container separator">
                <ul>
                    <Step number=1 name="Better Structure"/>
                    <Step number=2 name="Weak Association"/>
                    <Step number=3 name="Single Source of Truth"/>
                </ul>
                <br>
            </div>
            <div class="table-of-progress top-container">
                <ul>
                    <Step number=4 name="Straightforward Release Process"/>
                    <Step number=5 name="Easier Progress Tracking"/>
                    <Step number=6 name="Simplified Issue Management"/>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Step from './Step.vue'

export default {
    name:'Monorepo',
    components: {
        Step
    }
}
</script>
