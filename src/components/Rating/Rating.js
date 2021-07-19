import React from "react";
import { Icon, Progress } from "semantic-ui-react";

import "./Rating.scss";

// The Rating component renders the number of likes and dislikes
// that the current video has received, and also shows a
// progress bar displaying the ratio between likes and dislikes

export function Rating({ likeCount, dislikeCount }) {
  let progress = null;
  if (likeCount && dislikeCount) {
    const percent = 100 * (likeCount / (likeCount + dislikeCount));
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }

  return <div>Rating</div>;
}
