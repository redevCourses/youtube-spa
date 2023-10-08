import {Card} from 'antd'
import cl from '../styles/Components.module.css'
import handleVideoClick from  '../../utils/helpers'

export default function CardVideo({ video }) {
  const { Meta } = Card;
    const shortStr = (str) => {
      if (str.length > 60) {
        return str.slice(0, 60) + "...";
      } else {
        return str;
      }
    }
  return (
    <div className={cl.cards}>
      <Card
        onClick={() => handleVideoClick(video.id.videoId)}
        hoverable
        style={{
          width: 220,
        }}
        cover={
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.high.url}
          />
        }
      >
        <Meta
          title={video.snippet.title}
          description={shortStr(video.snippet.description)}
        />
      </Card>
    </div>
  );
}