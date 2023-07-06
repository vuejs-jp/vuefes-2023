import { match } from 'ts-pattern'
import { Role } from '~/types/app'

export function useUserRole() {
  const backgroundColor = (role: Role) =>
    match(role)
      .with('staff', () => '#233445')
      .with('speaker', () => '#90B44B')
      .with('sponsor', () => '#FFC408')
      .with('attendee', () => '#F17C67')
      .with('attendee + party', () => '#33A6B8')
      .exhaustive()

  const textColor = (role: Role) =>
    match(role)
      .with('sponsor', () => '#35495E')
      .with('staff', 'speaker', 'attendee', 'attendee + party', () => '#fff')
      .exhaustive()

  return { backgroundColor, textColor }
}
