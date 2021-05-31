<script>
  import { Router, Route, Link } from "svelte-navigator"

  import Login from "./pages/Login.svelte"
  import Bingo from "./pages/Bingo.svelte"

  // import { user } from "./stores";

  // function handleLogout() {
  //   $user = null;
  // }
</script>

<Router basepath="/">
  <!-- <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="profile">Profile</Link>
    </nav>
  </header> -->

  <main>
    <Route path="/" component={Login} />
    <Route path="bingo" component={Bingo} />

    <!-- <PrivateRoute path="profile" let:location>
      <h3>Welcome {$user.username}</h3>
      <button on:click={handleLogout}>Logout</button>
    </PrivateRoute> -->
  </main>
</Router>
