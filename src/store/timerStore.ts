import { create } from 'zustand'

type TimerStore = {
    timerValue: number
    setTimerValue: (value: number) => void
}

export const useTimerStore = create<TimerStore>((set) => ({
    timerValue: 0,
    setTimerValue: (value) => set({ timerValue: value }),
}))