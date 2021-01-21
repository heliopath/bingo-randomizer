import auSettings from '../constants/auSettings'
import nsfwKeywords from '../constants/nsfwKeywords'
import sfwKeywords from '../constants/sfwKeywords'
import ships from '../constants/ships'

import getRandomNumber from '../utils/getRandomNumber'

export function getRandomAuSetting () {
  return auSettings[getRandomNumber(auSettings.length)]
}

export function getRandomKeyword () {
  return getRandomNumber(2) ? nsfwKeywords[getRandomNumber(nsfwKeywords.length)] : sfwKeywords[getRandomNumber(sfwKeywords.length)]
}

export function getRandomShip () {
  return ships[getRandomNumber(ships.length)]
}
