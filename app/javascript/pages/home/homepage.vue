<template>
<div class="navigation">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fca311;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ message }}</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Article</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Search</a>
          </li>
                  <li class="nav-item">
            <a class="nav-link" href="#">Sign in</a>
          </li>
        </ul>
      </div>
  </nav>
  <h1>{{ description }}</h1>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "LOL-BBS",
      description: "アプリの説明"
    }
  }
}
</script>

<style scoped>
</style>