 <template>
    <div class="project-index">
      <article class="card entry-post vertical project-index">
        <div class="card-content">
            <h4 class="card-title b-header"><a href="#">Name of the project</a></h4>
            <button class="button is-text tiny site-link">
              <span>Visit site</span>
              <i class="icon external-link"></i>
            </button>
            <div class="content">
              Project description nulla id massa interdum nunc molestie cursus rhoncus, iaculis. Tellus elementum sem massa sit.
            </div>
            <div class="labels">
              <button class="button tag">JavaScript</button>
              <button class="button tag">Vue.js</button>
            </div>
            <div class="external-links">
              <button class="button is-text tiny">
                <i class="icon external-link"></i>
                <span class="link-content">External link</span>
              </button>
              <br>
              <button class="button is-text tiny">
                <i class="icon external-link"></i>
                <span class="link-content">External link</span>
              </button>
            </div>
        </div>
      </article>
    </div>
</template>

 <style>
      .project-index {
        width: 400px;
      }
</style>

<script>


export default {
    name: 'Package'
}
</script>