<template>
  <div class="container">
    <navbar class="mar-t-xs mar-b-xs"></navbar>
    <nuxt/>
  </div>
</template>

<style>
  :root {
    --headings-font-family: 'Libre Franklin';
    --font-system: 'Libre Franklin';
    --headings-line-height: 1.25;
    --headings-font-size-h1: 4.5rem;
    --color-red: #ff5252;
    --color-swan: #f1f2f6;
    --body-bg-color: var(--color-swan);
    --container-max-width-xl: 100rem;
    --progress-border-radius: 0px;
    --link-color: var(--color-black);
    --headings-font-weight: var(--font-weight-medium);
    --font-weight-bold: 900;
    --font-weight-medium: 500;
    --font-weight: 400;
    --grid-gutter-width: 3rem;
  }

  *{
    font-size: 24px;
  }

  ol {
    -webkit-padding-start: 1.5rem;
  }

  .nuxt-link-exact-active {
    font-weight: var(--font-weight-bold) !important;
  }

  h1 {
    color: var(--color-red);
  }

  section {
  }

  .list {
    position: -webkit-sticky;  // required for Safari
    position: sticky;
    top: 0;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 1rem;
    align-self: flex-start;
  }

  .page-enter-active {
    animation: acrossIn .3s ease-out both;
  }
  .page-leave-active {
    animation: acrossOut .3s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(0, 10%, 0);
      opacity: 0.25;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 0.75;
    }
    100% {
      transform: translate3d(-20%, 0, 0);
      opacity: 0;
    }
  }

</style>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>
