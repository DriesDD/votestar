<script>
  export let name;
  import { poll } from "./poll.js";
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
</style>

<main class="py-4 px-10">
  <h1>Make a poll</h1>
  <form class="content">
    <label>Question
      <input type="text" bind:value={$poll.question} />
    </label>
  
    <label>Method
      <label for="5SS">
        5-star Score
        <input type="radio" id="5SS" name="method" group={$poll.method} value={"5SS"} checked/>
        <br />
      </label>
  
  
      <label for="IRV">
        Instant Runoff
        <input type="radio" id="IRV" name="method" group={$poll.method} value={"IRV"} />
        <br />
      </label>
    </label>
  
    <label>options
      <input type="text" bind:value={$poll.options} />
    </label>
  </form>
  <p>{JSON.stringify($poll, 0, 2)}</p>
</main>
