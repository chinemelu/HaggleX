<template>
  <div class="email-link">
    <figure class="email-icon-container">
      <img
        class="email-link-icon"
        src="@/assets/email-link.svg"
        alt="Email link icon"
      />
    </figure>
    <h1 class="primary-heading">Email link sent</h1>
    <p class="secondary-heading">
      We sent you a link to reset your password. Click on it to reset your
      password
    </p>
    <p class="tertiary-heading">Didn't get link?</p>
    <a class="resend-link" href="#">Resend link</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.email-link {
  margin: 8.5rem auto 5rem auto;
  background-color: #fff;
  max-width: 80%;
  padding: 4.5rem 4rem;
  text-align: center;
  border-radius: 1.1rem;
}

.primary-heading {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.secondary-heading {
  max-width: 95%;
  margin: 0 auto 4rem auto;
  font-size: 1.6rem;
}
.email-icon-container {
  margin-bottom: 2rem;
}
.tertiary-heading {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}
.resend-link {
  font-size: 1.8rem;
  color: #000;
}
</style>
