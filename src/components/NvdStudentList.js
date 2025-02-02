import React from 'react'

export default function NvdStudentList({ renderNvdStudentList }) {
    console.log("Data:", renderNvdStudentList);
    let nvdElement = renderNvdStudentList.map((nvdStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{nvdStudent.nvdId}</td>
                <td>{nvdStudent.nvdName}</td>
                <td>{nvdStudent.nvdAge}</td>
                <td>{nvdStudent.nvdPhone}</td>
                <td>{nvdStudent.nvdEmail}</td>
                <td>{nvdStudent.nvdStatus}</td>
                <td>
                    Edit / Delete
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvdElement}
                </tbody>
            </table>
        </div>
    )
}
