import { defineStore } from 'pinia'

export const usePlanetStore = defineStore('planetStore', {
  state: () => ({
    planets: [
      {
        name: 'Mercure',
        size: '4,880 km',
        distance: '57,9 millions km',
        image: require('@/assets/mercury.png')
      },
      {
        name: 'Vénus',
        size: '12,104 km',
        distance: '108,2 millions km',
        image: require('@/assets/venus.png')
      },
      {
        name: 'Terre',
        size: '12,742 km',
        distance: '149,6 millions km',
        image: require('@/assets/earth.png')
      },
      {
        name: 'Mars',
        size: '6,779 km',
        distance: '227,9 millions km',
        image: require('@/assets/mars.png')
      }
    ]
  })
})
