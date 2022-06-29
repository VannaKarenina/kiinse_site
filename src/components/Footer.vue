<template>
  <div
      :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
      id = "app"
  >
    <div class="container py-1">
      <div class="row pt-0 align-items-center">
        <div
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
        >
          <span>© 2020 Copyright: Kiinse️</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    nightMode: {
      type: Boolean,
    },
  }
}
</script>

<style scoped>
span {
  font-weight: 400;
}

@media screen and (max-width: 580px) {
}
</style>
