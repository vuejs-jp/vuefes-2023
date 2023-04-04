<script setup lang="ts">
interface IButtonFieldEmit {
  (e: 'on-click'): void
}
const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits<IButtonFieldEmit>()
const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <button type="submit" class="form-button" :disabled="disabled" @click="handleClick">
    {{ titleLabel }}
  </button>
</template>

<style lang="ts" scoped>
css({
  '.form-button': {
    padding: '32px 148px',
    display: 'grid',
    placeItems: 'center',
    width: '342px',
    margin: '0 auto',
    borderRadius: '50px',
    background: (props) => props.disabled ? '#C9DAEA' : '{color.vue.blue}',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    '&:hover': {
      background: (props) => props.disabled ? '#C9DAEA' : '{color.vue.green}',
    },
  },
})
</style>
