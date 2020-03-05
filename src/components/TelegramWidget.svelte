<script>
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (id) requestToken();

  async function requestToken() {
    try {
      const result = await fetch(`SERVER_HOST/login${window.location.search}`);
      const session = await result.text();
      window.localStorage.setItem('session', session);
      window.location.search = '';
    }
    catch (error) {
      console.log('Cannot get session from server', error);
    }
  }
</script>

<div>
  {#if id}
    <span>Logging in...</span>
  {:else}
    <script
      async
      src="https://telegram.org/js/telegram-widget.js?7"
      data-telegram-login="BOT_ID"
      data-size="large"
      data-auth-url={window.location}>

    </script>
  {/if}
</div>
