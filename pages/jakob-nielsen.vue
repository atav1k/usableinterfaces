<template>
  <article>
    <section class="row h-100">
      <div class="col-8">
        <h2 class="text-bold">Jakob Nielsen:</h2>
        <h1 class="text-bold">10 Usability Heuristics for User Interface Design</h1>
        <small class="text-bold">Source:</small>
        <p>Your name here</p>
      </div>
      <div class="col-4">
      </div>
    </section>
    <section class="row">
      <div class="col-4">
        <h5>In the early 90s Nielsen worked as a Sun Microsystems Distinguished Engineer making enterprise software easier to use and spent his time there defining the emerging field of web usability.</h5>
      </div>
      <div class="col-4">
        <h5>Nielsen founded the "discount usability engineering" movement for fast and cheap improvements of user interfaces and invented the heuristic evaluation.</h5>
      </div>
    </section>
    <aside class="aside-col-4">
    </aside>
    <section class="row mar-t-md">
      <div class="col-8">
        <div class="row">
          <div class="col-6 mar-b-md">
            <h2 class="text-bold" id="criteria-1">Visibility of system status</h2>
            <p>The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.</p>
          </div>
          <div class="col-6 offset-6 mar-b-md">
            <h2 class="text-bold mar-l-xl" id="criteria-2">Match between system and the real world</h2>
            <p class="mar-l-xl">The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.</p>
          </div>
          <div class="col-6 mar-b-md">
            <h2 class="text-bold" id="criteria-3">User control and freedom</h2>
            <p>Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.</p>
          </div>
          <div class="col-6 offset-6 mar-b-md">
            <h2 class="text-bold" id="criteria-4">Consistency and standards</h2>
            <p>Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.</p>
          </div>
          <div class="col-6 mar-b-md">
            <h2 class="text-bold" id="criteria-5">Error prevention</h2>
            <p>Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.</p>
          </div>
          <div class="col-6 offset-6 mar-b-md">
            <h2 class="text-bold" id="criteria-6">Recognition rather than recall</h2>
            <p>Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.</p>
          </div>
          <div class="col-6 mar-b-md">
            <h2 class="text-bold" id="criteria-7">Flexibility and efficiency of use</h2>
            <p>Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.</p>
          </div>
          <div class="col-6 offset-6 mar-b-md">
            <h2 class="text-bold" id="criteria-8">Aesthetic and minimalist design</h2>
            <p>Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.</p>
          </div>
          <div class="col-6 mar-b-md">
            <h2 class="text-bold" id="criteria-9">Help users recognize, diagnose, and recover from errors</h2>
            <p>Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.</p>
          </div>
          <div class="col-6 offset-6 mar-b-md">
            <h2 class="text-bold" id="criteria-10">Help and documentation</h2>
            <p>Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.</p>
          </div>
        </div>
      </div>
      <div class="col-4 sticky">
        <scrollactive class="my-nav" active-class="text-bold" :offset="48">
          <h6>Usable Interfaces Heuristics</h6>
          <ol>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-1">Visibility of system status</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-2">Match between system and the real world</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-3">User control and freedom</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-4">Consistency and standards</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-5">Error prevention</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-6">Recognition rather than recall</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-7">Flexibility and efficiency of use</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-8">Aesthetic and minimalist design</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-9">Help users recognize, diagnose, and recover from errors</a></li>
            <li class="mar-b-xs"><a class="scrollactive-item" href="#criteria-10">Help and documentation</a></li>
          </ol>
        </scrollactive>
      </div>
    </section>
    <section class="row mar-t-xl pad-t-xl pad-b-xl bg-dark">
      <div class="col-6 pad-t-xl text-light">
        <h2>Usable Interfaces is a open source design resource maintained by Vikram.</h2>
        <h3 class="pad-t-xl pad-b-xl">You can contribute your own usability heuristics here.</h3>
      </div>
    </section>
  </article>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
</style>
