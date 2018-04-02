<template>
  <div >
    <navbar class="container mar-t-xs mar-b-xs"></navbar>
    <nuxt class="container"/>
    <!-- <footer class="mar-t-xl pad-t-xl pad-b-xl bg-dark">
      <div class="container pad-t-xl text-light">
        <h2>Usable Interfaces is a open source design resource maintained by Vikram.</h2>
        <h3 class="pad-t-xl pad-b-xl">You can contribute your own usability heuristics here.</h3>
      </div>
    </footer> -->
  </div>
</template>

<style>
  :root {
    --headings-font-family: 'Libre Franklin';
    --font-system: 'Libre Franklin';
    --headings-line-height: 1.25;
    /* --headings-font-size-h1: 3rem; */
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
    font-size: 20px;
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

  @media (max-width: 991px) {
  /* md screens and below */
    * {
      font-size: 16px;
    }
  }


</style>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
