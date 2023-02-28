import { useForm as useValidateForm } from 'vee-validate'

export function useForm() {
  const { useFieldModel, handleSubmit } = useValidateForm()
  const [name, email, detail] = useFieldModel(['name', 'email', 'detail'])
  const config = useRuntimeConfig()

  const endpoint = `https://${config.newtSpaceUid}.form.newt.so/v1/${config.newtFormUid}`

  const onSubmit = handleSubmit(async (values) => {
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
  })

  return { name, email, detail, onSubmit }
}
