import { Modal, Input, Select, Col, InputNumber, Row, Slider } from "antd";
import { useState, useEffect } from "react";
import cl from '../styles/Components.module.css';
import { useDispatch } from "react-redux";
import {editFav} from '../../redux/favsSlice'

export default function EditModal({ open, onCancel, record }){
const [prevSearch, setPrevSearch] = useState(record.search)
const [search, setSearch] = useState(prevSearch);
const [sort, setSort] = useState(record.sort);
const [result, setResult] = useState(record.result);

const dispatch = useDispatch();

const handleSubmit = () => {
  const newData = {
    prevSearch: prevSearch,
    newSearch: search,
    newResult: result,
    newSort: sort,
  };
  dispatch(editFav(newData));
  onCancel();
};

useEffect(() => {
  setPrevSearch(record.search);
  setSearch(prevSearch);
  setSort(record.sort);
  setResult(record.result);
}, [record]);


    return (
      <Modal
        title="Edit Youtube search path"
        open={open}
        onCancel={onCancel}
        style={{ maxWidth: "400px" }}
        onOk={() => handleSubmit()}
      >
        <form className={cl.modal}>
          <Input placeholder={prevSearch} size="large" disabled />
          <Input
            placeholder="Edit your search here"
            size="large"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            size="large"
            showSearch
            style={{ width: "inherit" }}
            placeholder="Sort"
            optionFilterProp="children"
            value={sort}
            onChange={(value) => setSort(value)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "relevance",
                label: "Relevance",
              },
              {
                value: "date",
                label: "Date",
              },
              {
                value: "rating",
                label: "Rating",
              },
              {
                value: "viewCount",
                label: "Views",
              },
              {
                value: "title",
                label: "Title",
              },
            ]}
          />
          <Row>
            <Col span={12}>
              <Slider
                style={{ width: "160px" }}
                min={1}
                max={25}
                onChange={(value) => setResult(value)}
                value={typeof result === "number" ? result : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={20}
                value={result}
                onChange={(value) => setResult(value)}
              />
            </Col>
          </Row>
        </form>
      </Modal>
    );
}