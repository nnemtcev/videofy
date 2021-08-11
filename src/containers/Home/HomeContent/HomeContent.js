import React, { useEffect } from "react";

import { VideoGrid } from "../../../components/VideoGrid/VideoGrid";
import "./HomeContent.scss";

import useStore from "../../../store";

export function HomeContent() {
  const getPopularVideos = useStore(
    (state) => state.buildMostPopularVideosRequest
  );

  const setMostPopularVideos = useStore((state) => state.setMostPopularVideos);

  const libraryLoaded = useStore((state) => state.libraryLoaded);

  const mostPopularVideos = useStore((state) => state.mostPopularVideos);

  useEffect(() => {
    const loadPopularVideosOnRender = async () => {
      if (libraryLoaded) {
        const response = await getPopularVideos();
        setMostPopularVideos(response);
      }
    };

    loadPopularVideosOnRender();
  }, [libraryLoaded]);

  console.log(mostPopularVideos);

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
