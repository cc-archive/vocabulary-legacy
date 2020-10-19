 <template>
    <div>
    <div class="project-index">
      <article class="card entry-post vertical project-index">
        <div class="card-content">
            <h4 class="card-title b-header"><a :href="href">{{ name }}</a></h4>
            <button class="button is-text tiny site-link">
              <span>Visit site</span>
              <i class="icon external-link"></i>
            </button>
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

 <style>
      .project-index {
        width: 400px;
      }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

export default {
    name: 'Package',
    props: ['name','href','content','npmlink']
}
</script>