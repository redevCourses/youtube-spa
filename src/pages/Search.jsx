import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Input, Space, Button } from "antd";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import Header from '../components/header/Header'
import { useNavigate } from "react-router-dom";
import { fetchVideos } from "../redux/videoSlice";
import { addFav } from "../redux/favsSlice";
import List from '../components/list/List'
import { useParams } from "react-router-dom";

export default function Search(){
const [selectedOption, setSelectedOption] = useState("List");
const [query, setQuery] = useState({
  search: "",
});
const videos = useSelector((state) => state.videos.videos);
const favs = useSelector((state) => state.favs.favs)
const dispatch = useDispatch();
const record = { search: query.search, result: 10, sort: "relevance" };
const btn = `Go to favorites`;
const navigate = useNavigate();
const { onDemand } = useParams();

  useEffect(() => {
    if (onDemand) {
      dispatch(fetchVideos(record));
      navigate({
        pathname: "/youtube-spa/search",
        search: `?onDemand=${record.search}`,
      });
    }
  }, [dispatch, onDemand]);

  const handleSearch = () => {
    dispatch(
      fetchVideos(record)
    );
        navigate({
          pathname: "/youtube-spa/search",
          search: `?onDemand=${record.search}`,
        });
  };

    const nav = () => {
      navigate("/youtube-spa/favorites");
    }

     const handleFavorite = (event) => {
       event.stopPropagation();
       dispatch(addFav(query));
     };

    const isFavorite = (str) => {
      console.log(favs)
      return (
        !query.search ||
        favs.some(
          (item) =>
            typeof item.search === "string" &&
            item.search.trim().toLowerCase() ===
              query.search.trim().toLowerCase()
        )
      );
    };

    return (
      <>
        <Header btn={btn} nav={nav} />
        <div className="main search">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              size="large"
              placeholder="Enter a request"
              value={query.search}
              onChange={(e) =>
                setQuery(() => {
                  return {
                    search: e.target.value,
                  };
                })
              }
              addonBefore={
                <div
                  onClick={handleFavorite}
                  className={isFavorite(query.search) ? "disabled" : ""}
                >
                  {isFavorite(query.search) ? (
                    <HeartTwoTone style={{ fontSize: "20px" }} />
                  ) : (
                    <HeartOutlined style={{ fontSize: "20px" }} />
                  )}
                </div>
              }
            />
            <Button size="large" type="primary" onClick={handleSearch}>
              Search
            </Button>
          </Space.Compact>
          {videos.length > 0 && (
            <List
              videos={videos}
              selectedOption={selectedOption}
              handleOptionChange={value => setSelectedOption(value)}
            />
          )}
        </div>
      </>
    );
}