import { useForm as useValidateForm } from 'vee-validate'
import { useFormError } from './useFormError'
import { useFormReCaptcha } from './useFormReCaptcha'

export function useForm() {
  const { useFieldModel, handleSubmit } = useValidateForm()
  const [name, email, detail] = useFieldModel(['name', 'email', 'detail'])
  const { submitError, ...rest } = useFormError()
  const { hasSiteKey, execute } = useFormReCaptcha()
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
    submitError.value = ''
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
      .then(() => (isSent.value = true))
      .catch((err) => {
        console.error(err)
        submitError.value = 'メッセージを送信できませんでした'
      })
  })

  return { name, email, detail, isSent, isSubmitting, ...rest, onSubmit }
}
