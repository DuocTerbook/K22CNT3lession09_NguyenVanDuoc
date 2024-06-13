import React, { useEffect, useState } from 'react'
import axios from "axios";
import NvdStudentList from './components/NvdStudentList'

export default function App() {
  // sử dụng hàm useState của hook
  const [nvdStudentList, setNvdStudentList] = useState([]);
  // Get data from api
  const nvdGetStudent = async () => {
    try {
      const response = await axios.get("https://666a59277013419182cef0a1.mockapi.io/api/nvdv1/nvdStudent");
      setNvdStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    nvdGetStudent();
  }, []);
  return (
    <div className='contrainer border mt-5 p-3'>
      <h1 className='text-center my-3'>Sử lý chức năng CRUD - Hook - API</h1>
      <hr />
      <NvdStudentList renderNvdStudentList = {nvdStudentList} />
    </div>
  )
}