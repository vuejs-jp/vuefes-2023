import { match } from 'ts-pattern'
import { Status } from '~/types/app'

interface Result {
  title: string
  detail: string
}

export function useNamecardStatus() {
  const message = (status: Status) =>
    match<Status, Result>(status)
      .with('registered', () => ({
        title: 'top.succeed_register',
        detail: 'top.succeed_register_detail',
      }))
      .with('failed', () => ({
        title: 'top.failed_register',
        detail: 'top.failed_register_detail',
      }))
      .with('nouser', () => ({
        title: 'top.nouser_register',
        detail: 'top.nouser_register',
      }))
      .exhaustive()

  return { message }
}
