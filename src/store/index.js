import create from "zustand";

import {
  buildMostPopularVideosRequest as buildPopularVideosRequest,
  setMostPopularVideos as setPopularVideos,
} from "./youtube-api";

export default create((set) => ({
  libraryLoaded: false,
  setLibraryLoaded() {
    set(() => ({
      libraryLoaded: true,
    }));
  },
  mostPopularVideos: {
    byId: {},
    mostPopular: {},
  },
  async buildMostPopularVideosRequest() {
    const response = await buildPopularVideosRequest();
    return response.result;
  },
  setMostPopularVideos(response) {
    set((state) => ({
      mostPopularVideos: setPopularVideos(response, state),
    }));
  },
}));
