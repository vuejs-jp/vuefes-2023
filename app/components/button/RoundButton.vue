<script setup lang="ts">
const emit = defineEmits(['click'])
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_blank',
  },
  rel: {
    type: String,
    default: 'noreferrer',
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isLink = Boolean(props.href)
const isRouterLink = Boolean(props.to)
const myclass = computed(() => {
  const cls = ['button']
  if (props.outline) {
    cls.push('-outline')
  }
  if (props.disabled) {
    cls.push('-disabled')
  }
  return cls
})
const onClick = (e: Event) => {
  emit('click', e)
}
</script>

<template>
  <!-- nuxt link -->
  <template v-if="isRouterLink">
    <nuxt-link
      :to="props.to"
      :class="myclass.join(' ')"
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
    >
      <slot name="icon" />
      <slot />
    </nuxt-link>
  </template>
  <!-- html link -->
  <template v-else-if="isLink">
    <a
      :class="myclass.join(' ')"
      :href="props.href"
      :rel="props.rel"
      :target="props.target"
      :aria-disabled="props.disabled"
    >
      <slot name="icon" />
      <slot />
    </a>
  </template>
  <!-- button -->
  <template v-else>
    <button
      :class="myclass.join(' ')"
      :type="props.type"
      :disabled="props.disabled"
      @click="onClick"
    >
      <slot name="icon" />
      <slot />
    </button>
  </template>
</template>

<style lang="ts" scoped>
css({
  '.button': {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '344px',
    height: '88px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    background: '{color.vue.green}',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.24)',
    color: '{color.white}',
    '&:hover': {
      backgroundColor: '#64C397',
    },
    '&[disabled="true"],&.-disabled': {
      pointerEvents: 'none',
      boxShadow: 'none',
      backgroundColor: '#C9DAEA',
    },
    '&.-outline': {
      backgroundColor: '{color.white}',
      color: '{color.vue.blue}',
      border: '2px solid {color.vue.blue}',
      '&:hover': {
        background: 'rgba(53, 73, 94, 0.2)',
        transition: '.2s',
      },
      '&[disabled="true"],&.-disabled': {
        backgroundColor: '#C9DAEA',
        color: '{color.white}',
        border: 'none',
      },
    },
  }
})
</style>
