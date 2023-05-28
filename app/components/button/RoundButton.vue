<script setup lang="ts">
const emit = defineEmits(['click'])
const props = defineProps({
  isSecondry: {
    type: Boolean,
    default: false,
  },
  href: {
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
  class: {
    type: String,
    default: '',
  },
})

const isLink = Boolean(props.href)
const myclass = ['button']
if (props.isSecondry) {
  myclass.push('-isSecondry')
}
if (props.class) {
  myclass.push(props.class)
}
const onClick = (e: Event) => {
  emit('click', e)
}
</script>

<template>
  <template v-if="isLink">
    <a :class="myclass.join(' ')" :href="props.href" :rel="props.rel" :target="props.target"
      ><slot
    /></a>
  </template>
  <template v-else>
    <button :class="myclass.join(' ')" :type="props.type" @click="onClick"><slot /></button>
  </template>
</template>

<style lang="ts" scoped>
css({
  '.button': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '344px',
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
    '&[disabled]': {
      pointerEvents: 'none',
      boxShadow: 'none',
      backgroundColor: '#C9DAEA',
    },
    '&.-isSecondry': {
      backgroundColor: '{color.white}',
      color: '{color.vue.blue}',
      border: '2px solid {color.vue.blue}',
      '&:hover': {
        background: 'rgba(53, 73, 94, 0.2)',
        transition: '.2s',
      },
      '&[disabled]': {
        backgroundColor: '#C9DAEA',
        color: '#8fa6bf',
        border: 'none',
      },
    }
  }
})
</style>
