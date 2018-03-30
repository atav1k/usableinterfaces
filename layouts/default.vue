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
    --link-color: var(--color-red);
    --headings-font-weight: var(--font-weight-medium);
    --font-weight-bold: 900;
    --font-weight-medium: 500;
    --font-weight: 400;
  }

  *{
    font-size: 24px;
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
    animation: acrossIn .40s ease-out both;
  }
  .page-leave-active {
    animation: acrossOut .60s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(0, 25%, 0);
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
      transform: translate3d(-100%, 0, 0);
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
