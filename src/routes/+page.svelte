<script lang="ts">
	import { getTest1, getTest2 } from "./test.remote";
</script>

{#if await getTest1()}
  Testing
{/if}
{#if !await getTest1()}
  {await getTest2()}
{/if}


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
