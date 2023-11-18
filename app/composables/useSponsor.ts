import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSponsor() {
  const isPlatinum = (categories: (SponsorCategory | OptionCategory)[]) =>
    categories.some((category) => category === 'platinum')
  const isBronze = (categories: (SponsorCategory | OptionCategory)[]) =>
    categories.some((category) => category === 'bronze')

  const isMoreSilver = (categories: (SponsorCategory | OptionCategory)[]) =>
    categories.some(
      (category) => category === 'platinum' || category === 'gold' || category === 'silver',
    )

  const isOptions = (categories: (SponsorCategory | OptionCategory)[]) =>
    categories.every(
      (category) =>
        category !== 'platinum' &&
        category !== 'gold' &&
        category !== 'silver' &&
        category !== 'bronze',
    )

  const isBasicBy = (category: SponsorCategory | OptionCategory) =>
    category === 'platinum' || category === 'gold' || category === 'silver' || category === 'bronze'

  const getCategoryType = (category: SponsorCategory | OptionCategory): string => {
    return isBasicBy(category) ? `sponsor.${category}` : 'sponsor.options'
  }

  return { isPlatinum, isBronze, isMoreSilver, isOptions, isBasicBy, getCategoryType }
}
