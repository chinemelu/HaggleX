<template>
  <div class="verify-account-page">
    <h1 class="primary-heading">Verify your account</h1>
    <p class="secondary-heading">
      We just sent a verification code to your email. Please enter the code
    </p>

    <div class="vap-pin-input-container">
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
      <BasePinField
        class="vap-pin-input-container"
        pinInputClass="vap-pin-input"
        type="password"
      />
    </div>

    <p class="code-expiry-text">This code will expire in 10 minutes</p>
    <a class="resend-code" href="#">Resend Code</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.verify-account-page {
  margin: 8.5rem auto 5rem auto;
  background-color: #fff;
  max-width: 80%;
  padding: 4.5rem 4rem;
  text-align: center;
  border-radius: 1.1rem;
}
.primary-heading {
  font-size: 25px;
  margin-bottom: 2.4rem;
}
.secondary-heading {
  max-width: 95%;
  margin: 0 auto 3.7rem auto;
  font-size: 1.6rem;
}

.vap-pin-input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  & > * {
    flex-basis: 15%;
  }
}

.code-expiry-text {
  font-size: 1.5rem;
  margin-bottom: 3.7rem;
}

.resend-code {
  font-size: 2rem;
  color: #000;
}
</style>
