import { atom } from 'recoil'

export const firstName = atom({
  key: 'firstName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value
});

export const login = atom({
  key: 'login', // unique ID (with respect to other atoms/selectors)
  default: false, // default value
});

export const totalCartPrice = atom({
  key: "totalCartPrice",
  default: 1
})

export const cantidadStock = atom({
  key: "cantidadStock",
  default: 0
})