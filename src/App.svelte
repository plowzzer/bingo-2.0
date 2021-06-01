<script>
  import { Router, Route } from "svelte-navigator"

  import Login from "./pages/Login.svelte"
  import Bingo from "./pages/Bingo.svelte"

  import { user } from "./stories/user";

  function handleLogout() {
    $user = null;
    // navigate('/', { replace: true });
  }
</script>

<Router basepath="/">
  <header>
    <h1>Bingo da Nave</h1>
    {#if $user}
      <p>Usuário Logado: {$user} <button on:click={() => handleLogout()}>Deslogar</button></p>
    {/if}

    <!-- <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="profile">Profile</Link>
    </nav> -->
  </header>

  <main>
    <Route path="/" component={Login} />
    <Route path="bingo" component={Bingo} />

    <!-- <PrivateRoute path="profile" let:location>
      <h3>Welcome {$user.username}</h3>
      <button on:click={handleLogout}>Logout</button>
    </PrivateRoute> -->
  </main>
</Router>
