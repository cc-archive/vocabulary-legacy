 <template>
   <div id="package">
    <div class="project-index">
      <article class="card entry-post vertical project-index">
        <div class="card-content">
            <h4 class="card-title b-header">
              <a :href="href">{{ name }}</a>
            </h4>
            <div class="content">
             {{ content }}
            </div>
            <div class="labels">
              <button class="button tag">JavaScript</button>
              <button class="button tag">CSS</button>
            </div>
            <div class="external-links">
              <button class="button is-text tiny">
                <i class="icon external-link"></i>
                <a class="link-content" :href="npmlink" target="blank" style="color:gray">Visit npmjs package</a>
              </button>
            </div>
        </div>
      </article>
    </div>
    </div>
</template>

<style scoped>
  #package {
    width: 25rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }
</style>

<script>
export default {
    name: 'Package',
    props: [
      'name',
      'href',
      'content',
      'npmlink'
    ]
}
</script>
