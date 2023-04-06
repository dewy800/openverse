<template>
  <!-- @todo: Separate the absolute container from the link itself. -->
  <VButton
    as="VLink"
    :href="href"
    has-icon-start
    variant="transparent-gray"
    size="medium"
    class="label-bold inline-flex"
  >
    <VIcon :icon-path="chevronIcon" :rtl-flip="true" />
    {{ $t("single-result.back") }}
  </VButton>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import VIcon from "~/components/VIcon/VIcon.vue"
import VButton from "~/components/VButton.vue"

import chevronIcon from "~/assets/icons/chevron-left.svg"

/**
 * This link takes the user from a single result back to the list of all
 * results. It only appears if the user navigated from the search results.
 */
export default defineComponent({
  components: {
    VIcon,
    VButton,
  },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { chevronIcon }
  },
})
</script>
