import { Segmented, Row, Col } from "antd";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import cl from "../styles/Components.module.css";
import { CardVideo, ListVideo } from "../layout/index";

export default function List({ selectedOption, handleOptionChange, videos}) {
  return (
    <>
      <div className={cl.layout}>
        <h3>
          {/* videos on demand
          <span>{onDemand}</span> */}
        </h3>
        <Segmented
          options={[
            {
              value: "List",
              icon: <BarsOutlined />,
            },
            {
              value: "Kanban",
              icon: <AppstoreOutlined />,
            },
          ]}
          selected={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
      <Row gutter={[8, 16]}>
        {videos &&
          videos.map((video) =>
            selectedOption === "List" ? (
              <ListVideo video={video} key={video.etag} />
            ) : (
              <Col span={6} key={video.etag}>
                <CardVideo video={video} />
              </Col>
            )
          )}
      </Row>
    </>
  );
}
