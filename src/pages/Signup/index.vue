<template>
  <div>
    <AuthLayout>
      <template v-slot:dark-gradient>
        <transition name="fade" mode="out-in" appear>
          <component
            :is="activeComponentList[activeComponentIndex]"
            @customer-details-button-clicked="moveToNextComponent"
          >
          </component>
        </transition>
      </template>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/auth";
import DynamicComponentMixin from "@/mixins/DynamicComponent";
import AddCustomerDetails from "@/pages/Signup/AddCustomerDetails";
import EmailLinkSent from "@/pages/Signup/EmailLinkSent";
import VerifyAccountPage from "@/pages/Signup/VerifyAccountPage.vue";

export default {
  mixins: [DynamicComponentMixin],
  components: {
    AddCustomerDetails,
    EmailLinkSent,
    VerifyAccountPage,
    AuthLayout
  },
  data() {
    return {
      activeComponentList: [AddCustomerDetails, VerifyAccountPage]
    };
  }
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-leave-to {
  opacity: 0;
}
</style>
