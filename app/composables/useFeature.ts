export function useFeature() {
  const config = useRuntimeConfig()

  return {
    sampleFeature: config.sampleFeature,
  }
}
