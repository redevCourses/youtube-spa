import cl from '../styles/Components.module.css'
import handleVideoClick from "../../utils/helpers";

export default function ListVideo({video}) {
  return (
    <div className={cl.videoList}>
      <div className={cl.videoItem}>
        <img
          alt={video.snippet.title}
          src={video.snippet.thumbnails.high.url}
          width={300}
          height={220}
        />
        <div className={cl.videoDescription}>
          <h2 onClick={() => handleVideoClick(video.id.videoId)} style={{cursor: 'pointer'}}>
            {video.snippet.title}
          </h2>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}
