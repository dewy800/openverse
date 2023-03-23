<template>
  <VButton
    variant="transparent-gray"
    size="medium"
    has-icon-end
    class="text-sr text-dark-charcoal-70 !pe-0 md:text-base"
  >
    <span class="md:hidden">{{
      $t("media-details.content-report.short")
    }}</span>
    <span class="hidden md:inline">{{
      $t("media-details.content-report.long")
    }}</span>
    <VIcon :icon-path="icons.flag" />
  </VButton>
</template>

<script>
import { defineComponent } from "vue"

import VIcon from "~/components/VIcon/VIcon.vue"
import VButton from "~/components/VButton.vue"

import flagIcon from "~/assets/icons/flag.svg"

export default defineComponent({
  name: "VContentReportButton",
  components: { VButton, VIcon },
  setup() {
    return {
      icons: {
        flag: flagIcon,
      },
    }
  },
})
</script>
