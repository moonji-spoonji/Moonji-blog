<!-- <div class="columns is-mobile is-centered"> -->
<div class="column is-one-third is-">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <slot name="image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <slot name="title" />
          </p>
          <p class="subtitle is-6">
            <slot name="subtitle" />
          </p>
        </div>
      </div>

      <div class="content">
        <slot name="content" />
        <br />
        <slot name="link" />
      </div>
      <!-- <footer class="card-footer">
        <slot name="footer" />
        <a href="/" class="card-footer-item">Save</a>
      </footer> -->
    </div>
  </div>
</div>
