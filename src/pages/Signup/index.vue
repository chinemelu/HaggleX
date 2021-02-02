<template>
  <div>
    <AuthLayout>
      <template v-slot:dark-gradient>
        <!-- <AddCustomerDetails /> -->
        <EmailLinkSent />
        <VerifyAccountPage />
      </template>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/auth";
// import AddCustomerDetails from "@/pages/Signup/AddCustomerDetails";
import EmailLinkSent from "@/pages/Signup/EmailLinkSent";
import VerifyAccountPage from "@/pages/Signup/VerifyAccountPage.vue";

export default {
  components: {
    // AddCustomerDetails,
    EmailLinkSent,
    VerifyAccountPage,
    AuthLayout
  }
};
</script>

<style lang="scss" scoped></style>
