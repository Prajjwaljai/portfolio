import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.isMinimized = false;
        win.isMaximized = false;  
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isMinimized = true;
        win.isOpen = false;
      }),

    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isMaximized = !win.isMaximized;
        win.isMinimized = false;
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        
      }),
  }))
);

export default useWindowStore;
