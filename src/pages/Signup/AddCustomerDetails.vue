<template>
  <div>
    <form action="#" class="signup-form">
      <h1 class="primary-heading">Create new account</h1>

      <BaseInput
        class="auth-input-container"
        inputClass="auth-input"
        label="Email Address"
      />
      <BaseInput
        class="auth-input-container"
        inputClass="auth-input"
        label="Password"
      />
      <BaseInput
        class="auth-input-container"
        inputClass="auth-input"
        label="Create username"
      />
      <BaseInput
        class="auth-input-container"
        inputClass="auth-input"
        label="Enter your phone number"
      />

      <p class="referral-code-text">Got referral code?</p>

      <BaseButton buttonText="Sign Up" class="auth-btn" />

      <p class="sign-in-action">
        Have an account?<span class="sign-in-action--bold"
          >Sign in to explore</span
        >
      </p>
      <div class="bottom-text">
        <span class="need-help">Need help?</span>
        <span class="privacy grey-text">Privacy</span>
        <span class="grey-text">Terms & Policy</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signup-form {
  background-color: #ffffff;
  margin: 8.4rem auto 9.2rem auto;
  padding: 8.1rem 7.5rem;
  max-width: 80%;
  border-radius: 1.1rem;
  height: 80%;
}

.primary-heading {
  margin-bottom: 5.5rem;
  font-size: 2.5rem;
}

.auth-input-container {
  margin-bottom: 4.5rem;
}

.referral-code-text {
  margin: 5.8rem 0 3.8rem 0;
  color: #2e1963;
  font-size: 1.4rem;
  cursor: pointer;
}

.auth-btn {
  background-image: linear-gradient(90deg, #432b7b 0%, #6a4bbc 100%);
  border: none;
  height: 5rem;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2.2rem;
}

.sign-in-action {
  font-size: 1.4rem;
  text-align: center;
  &--bold {
    font-weight: 600;
    margin-left: 5px;
  }
}

.need-help {
  font-weight: 600;
  margin-right: auto;
}

.bottom-text {
  margin-top: 3rem;
  display: flex;
  font-size: 13px;
}

.privacy {
  margin-right: 2rem;
}

.grey-text {
  color: #797979;
}
</style>
