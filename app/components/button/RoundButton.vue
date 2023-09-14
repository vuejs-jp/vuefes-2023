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
    default: '',
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
  download: {
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

const routerLinkProps = {
  to: props.to,
}
const linkProps = {
  href: props.href,
  rel: props.rel,
  target: props.target,
}
const buttonProps = {
  type: props.type,
  onClick,
}

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
</script>

<template>
  <component
    :is="isRouterLink ? _nuxtLink : isLink ? 'a' : 'button'"
    v-bind="{
      ...(isRouterLink && routerLinkProps),
      ...(isLink && linkProps),
      ...(!isRouterLink && !isLink && buttonProps),
    }"
    :class="myclass.join(' ')"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :download="props.download"
  >
    <slot name="icon" />
    <slot />
  </component>
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
      boxShadow: 'none',
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
  },
  '@mobile': {
    '.button': {
      fontSize: '16px',
      height: '56px',
      maxWidth: '240px',
      padding: '0 16px',
    },
  },
})
</style>
