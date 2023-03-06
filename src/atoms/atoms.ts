import { atom } from 'recoil'

export const firstName = atom({
  key: 'firstName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value
});

export const login = atom({
  key: 'login', // unique ID (with respect to other atoms/selectors)
  default: false, // default value
});