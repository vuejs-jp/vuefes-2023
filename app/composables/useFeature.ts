export function useFeature() {
  const config = useRuntimeConfig()

  return {
    registerTicket: config.public.registerTicket,
    registerNamecard: config.public.registerNamecard,
    showTimetable: config.public.showTimetable,
  }
}
