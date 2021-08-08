/*
  Util - Youtube API boilerplate code
 */

export function buildApiRequest(requestMethod, path, params, properties) {
  params = removeEmptyParams(params);
  let request;
  if (properties) {
    let resource = createResource(properties);
    request = window.gapi.client.request({
      body: resource,
      method: requestMethod,
      path: path,
      params: params,
    });
  } else {
    request = window.gapi.client.request({
      method: requestMethod,
      path: path,
      params: params,
    });
  }
  return request;
}

function removeEmptyParams(params) {
  for (var p in params) {
    if (!params[p] || params[p] === "undefined") {
      delete params[p];
    }
  }
  return params;
}

function createResource(properties) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) === "[]") {
      var adjustedName = p.replace("[]", "");
      if (value) {
        normalizedProps[adjustedName] = value.split(",");
      }
      delete normalizedProps[p];
    }
  }
  for (var prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      var propArray = prop.split(".");
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[prop];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    }
  }
  return resource;
}

export function buildMostPopularVideosRequest(
  amount = 12,
  loadDescription = false,
  nextPageToken
) {
  // fields is for preventing overfetching of data from the YouTube API
  let fields =
    "nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,localized/title,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)";

  if (loadDescription) {
    fields += ",items/snippet/description";
  }

  return buildApiRequest(
    "GET",
    "/youtube/v3/videos",
    {
      part: "snippet,statistics,contentDetails",
      chart: "mostPopular",
      maxResults: amount,
      regionCode: "US",
      pageToken: nextPageToken,
      fields,
    },
    null
  );
}

export function setMostPopularVideos(response, prevState) {
  // Maps the ID of the video to the video object itself
  const videoMap = response.items.reduce((accumulator, video) => {
    accumulator[video.id] = video;
    return accumulator;
  }, {});

  let items = Object.keys(videoMap);
  if (response.hasOwnProperty("prevPageToken") && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    nextPageToken: response.nextPageToken,
    items,
  };

  return {
    ...prevState,
    mostPopular,
    byId: { ...prevState.byId, ...videoMap },
  };
}
