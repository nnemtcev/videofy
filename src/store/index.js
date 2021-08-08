import create from "zustand";

export default create((set) => ({
  libraryLoaded: false,
  setLibraryLoaded: () =>
    set(() => ({
      libraryLoaded: true,
    })),
}));
