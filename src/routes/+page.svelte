<script lang="ts">
	import { sleep } from "$lib/utils";
	import { getTest } from "./test.remote";

  const testFunction = async () => {
    await sleep(100);
    return 'Hello, world!';
  };

  const test = $derived(await getTest());

</script>

{#if test}
  <p>Test data loaded.</p>
{:else}
  {await testFunction()}
{/if}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
