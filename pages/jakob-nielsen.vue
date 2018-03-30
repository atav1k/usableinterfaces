<template>
  <article>
    <section class="row">
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
        <h5>Back in the late 1970s, Dieter Rams was becoming increasingly concerned by the state of the world around him — “an impenetrable confusion of forms, colours and noises.” Aware that he was a significant contributor to that world, he asked himself an important question: is my design good design?</h5>
      </div>
      <div class="col-4">
        <h5>As good design cannot be measured in a finite way he set about expressing the ten most important principles for what he considered was good design. Sometimes they are referred as the ‘Ten commandments’.</h5>
      </div>
    </section>
    <aside class="aside-col-4">
    </aside>
    <section class="row mar-t-md">
      <div class="col-4 sticky">
        <ol>
          <li class="mar-b-xs text-bold">Visibility of system status</li>
          <li class="mar-b-xs">Match between system and the real world</li>
          <li class="mar-b-xs">User control and freedom</li>
          <li class="mar-b-xs">Consistency and standards</li>
          <li class="mar-b-xs">Error prevention</li>
          <li class="mar-b-xs">Recognition rather than recall</li>
          <li class="mar-b-xs">Flexibility and efficiency of use</li>
          <li class="mar-b-xs">Aesthetic and minimalist design</li>
          <li class="mar-b-xs">Help users recognize, diagnose, and recover from errors</li>
          <li class="mar-b-xs">Help and documentation</li>
        </ol>
      </div>
      <div class="col-6">
        <h2 class="text-bold">Visibility of system status</h2>
        <p>The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.</p>
        <h2 class="text-bold">Match between system and the real world</h2>
        <p>The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.</p>
        <h2 class="text-bold">User control and freedom</h2>
        <p>Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.</p>
        <h2 class="text-bold">Consistency and standards</h2>
        <p>Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.</p>
        <h2 class="text-bold">Error prevention</h2>
        <p>Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.</p>
        <h2 class="text-bold">Recognition rather than recall</h2>
        <p>Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.</p>
        <h2 class="text-bold">Flexibility and efficiency of use</h2>
        <p>Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.</p>
        <h2 class="text-bold">Aesthetic and minimalist design</h2>
        <p>Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.</p>
        <h2 class="text-bold">Help users recognize, diagnose, and recover from errors</h2>
        <p>Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.<p>
        <h2 class="text-bold">Help and documentation</h2>
        <p>Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.</p>

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
