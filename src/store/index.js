import create from "zustand";

import {
  buildMostPopularVideosRequest as buildPopularVideosRequest,
  buildVideoCategoriesRequest,
  setMostPopularVideos as setPopularVideos,
  mapCategoryIdToTitle,
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
    categories: {},
    byCategory: {},
  },
  async buildMostPopularVideosRequest(
    amount,
    loadDescription,
    nextPageToken,
    videoCategoryId
  ) {
    const response = await buildPopularVideosRequest(
      amount,
      loadDescription,
      nextPageToken,
      videoCategoryId
    );

    return response.result;
  },
  setMostPopularVideos(response) {
    set((state) => ({
      mostPopularVideos: setPopularVideos(response, state),
    }));
  },
  async fetchVideoCategories() {
    const response = await buildVideoCategoriesRequest();
    return response;
  },
  setVideoCategories(categories) {
    set((state) => ({
      categories: mapCategoryIdToTitle(categories),
    }));
  },
}));
