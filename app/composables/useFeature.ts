export function useFeature() {
  const config = useRuntimeConfig()

  return {
    registerTicket: config.public.registerTicket,
    registerNamecard: config.public.registerNamecard,
    showTimetable: config.public.showTimetable === 'true',
    showSpeakerInfo: config.public.showSpeakerInfo,
    switchLocale: config.public.switchLocale,
  }
}
