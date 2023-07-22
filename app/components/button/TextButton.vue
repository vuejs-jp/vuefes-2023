<script setup lang="ts">
import { useHover } from '~/composables/useHover'

const emit = defineEmits(['click'])
const props = defineProps({
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
  underline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const hoverRef = ref()

const isHovered = useHover(hoverRef)

const isLink = Boolean(props.href)
const isRouterLink = Boolean(props.to)
const myclass = computed(() => {
  const cls = ['button']
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
    ref="hoverRef"
    :class="myclass.join(' ')"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
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
    gap: 'calc({space.8} * 1)',
    fontSize: 'calc(16*{fontSize.base})',
    cursor: 'pointer',
    textDecoration: (props) => props.underline ? 'underline' : 'none',
    color: '{color.white}',
    '&:hover': {
      color: '{color.vue.green}',
      transition: '.2s',
    },
    '&[disabled="true"],&.-disabled': {
      pointerEvents: 'none',
      boxShadow: 'none',
      backgroundColor: '#C9DAEA',
    },
    '::v-deep(svg)': {
      fill: '{color.white}',
      '&:hover': {
        fill: '{color.vue.green}',
        transition: '.2s',
      },
    },
  },
})
</style>
