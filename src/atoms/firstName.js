import { atom } from 'recoil'

export const firstName = atom({
  key: 'firstName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value
});