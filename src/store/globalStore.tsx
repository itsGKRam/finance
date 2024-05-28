import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const globalStorage = create(
  persist(
    (set, get) => ({
      bears: 0,
    }),
    {
      name: 'global-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
