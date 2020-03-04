<script>
  	const helloWorld = fetch('SERVER_HOST/hello', {
    	headers: {
      		session: window.localStorage.getItem('session')
    	}
  	}).then(res => res.text());
</script>

<div>
  Hello
  	{#await helloWorld}
  		..waiting
	{:then world}
		{world}
	{/await}
</div>
