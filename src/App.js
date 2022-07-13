import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import axiosInstance from './Config/axios';
import { useEffect, useState } from 'react';

function App() {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState();

  useEffect(() => {
    fetchData(1);
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Trips',
      dataIndex: 'trips',
    },
  ];

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/v1/passenger?page=${page}&size=10`
      );
      console.log('Response', response.data);
      setDataSource(response.data.data);
      setTotalPages(response.data.totalPages);
      setKey(response.data.data._id);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecords = (page) => {
    setLoading(true);
    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
    ).then((res) => {
      res.json().then((response) => {
        setDataSource(response.data);
        setTotalPages(response.totalPages);
        setLoading(false);
        console.log(response);
      });
    });
  };

  return (
    <div className="App">
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        key={key}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchData(page);
          },
        }}
      ></Table>
    </div>
  );
}

export default App;
