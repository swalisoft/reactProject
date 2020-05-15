
import {useState} from 'react';

function useGetApi(API){
  const [ videos, setVideos] = useState({"trends":[], "mylist":[], "originals":[]});

  fetch(API)
    .then(response => response.json())
    .then(data => setVideos(data))

  return [ videos ]
}

export default useGetApi;