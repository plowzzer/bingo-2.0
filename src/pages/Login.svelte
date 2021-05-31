<script>
	import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../stores/user";

	const navigate = useNavigate();
  const location = useLocation();

  let loginEmail = ''
	let errorMessage = ''
	
	function handleLogin () {
		const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		errorMessage = ''

		if (loginEmail.length === 0) {
			errorMessage = "Digite um e-mail para continuar"
			return
		}

		const validate = regEx.test(loginEmail)
		if (validate === false) {
			errorMessage = "Esse não parece um email válido"
			return
		}

		$user = loginEmail
		// const from = ($location.state && $location.state.from) || "bingo";
    // navigate(from, { replace: true });
		navigate('bingo', { replace: true })
	}
</script>

<input type="email" required bind:value={loginEmail} placeholder="E-mail">

<button on:click={handleLogin}>Entrar</button>

{#if errorMessage}
	<p class="error">{errorMessage}</p>
{/if}


<style>
	.error{
		color: red; 
	}
</style>