import React, { useEffect } from "react";

import { VideoGrid } from "../../../components/VideoGrid/VideoGrid";
import "./HomeContent.scss";

import useStore from "../../../store";

// The HomeContent component displays trending videos
// and the most popular videos for each category

export function HomeContent() {
  const fetchMostPopularVideos = useStore(
    (state) => state.buildMostPopularVideosRequest
  );

  const setMostPopularVideos = useStore((state) => state.setMostPopularVideos);

  const isLibraryLoaded = useStore((state) => state.libraryLoaded);

  const mostPopularVideos = useStore((state) => state.mostPopularVideos);

  const fetchVideoCategories = useStore((state) => state.fetchVideoCategories);

  const setVideoCategories = useStore((state) => state.setVideoCategories);

  useEffect(() => {
    const fetchMostPopularVideosAndCategories = async () => {
      // Fetch data from the YouTube API only if
      // the Google API has loaded
      if (isLibraryLoaded) {
        // Fetch the most popular videos and set them in global state
        const response = await fetchMostPopularVideos();
        setMostPopularVideos(response);

        // Fetch the video categories and set them in global state
        const videoCategories = await fetchVideoCategories();
        setVideoCategories(videoCategories.result.items);
        const mostPopularVideosInEachCategory = [];

        const requests = videoCategories.result.items.forEach((category) => {
          const { id } = category;
          const mostPopularVideosInCategory = fetchMostPopularVideos(
            12,
            false,
            null,
            id
          ).catch((error) => error);
          mostPopularVideosInEachCategory.push(mostPopularVideosInCategory);
        });

        Promise.all(mostPopularVideosInEachCategory).then(
          (resolvedPromises) => {
            resolvedPromises.forEach((promise) => console.log(promise));
          }
        );
      }
    };

    fetchMostPopularVideosAndCategories();
  }, [isLibraryLoaded]);

  return (
    <div className="home-content">
      <div className="responsive-video-grid-container">
        <VideoGrid
          videos={Object.values(mostPopularVideos.byId)}
          title="Trending"
        />
        <VideoGrid title="Autos & Vehicles" hideDivider />
      </div>
    </div>
  );
}
