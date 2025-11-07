import { proxy } from "valtio";
// Valtio creates a "magic" state object. When you change state.color, every component watching it automatically re-renders. It's like a global variable that triggers updates everywhere.

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['react', 'three2', 'pmndrs'],
  color: '#EFBD4E',
  decal: 'three2'
})

export {state}
