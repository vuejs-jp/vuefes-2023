import { useForm as useValidateForm } from 'vee-validate'
import { useFormError } from './useFormError'
import { useFormReCaptcha } from './useFormReCaptcha'
import { useToast } from './useToast'

export function useForm() {
  const { useFieldModel, handleSubmit } = useValidateForm()
  const [name, email, detail] = useFieldModel(['name', 'email', 'detail'])
  const { ...rest } = useFormError()
  const { hasSiteKey, execute } = useFormReCaptcha()
  const { onError, onSuccess } = useToast()
  const config = useRuntimeConfig()

  const endpoint = `https://${config.newtSpaceUid}.form.newt.so/v1/${config.newtFormUid}`
  const isSent = ref(false)

  const isSubmitting = computed(() => {
    if (!name.value || !email.value || !detail.value) return false
    return (
      rest.nameError.value === '' && rest.emailError.value === '' && rest.detailError.value === ''
    )
  })

  const onSubmit = handleSubmit(async function (values) {
    hasSiteKey && (values.googleReCaptchaToken = await execute())

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })
    await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        isSent.value = true
        onSuccess('メッセージを送信しました', 3000)
      })
      .catch((err) => {
        console.error(err)
        onError('メッセージを送信できませんでした', 3000)
      })
  })

  return { name, email, detail, isSent, isSubmitting, ...rest, onSubmit }
}
