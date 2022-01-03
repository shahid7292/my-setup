import React from "react";
import { Table } from "reactstrap";

const CustomTable = () => {
  //   const dataSource = [
  //     {
  //       key: "1",
  //       name: "Mike",
  //       age: 32,
  //       address: "10 Downing Street",
  //     },
  //     {
  //       key: "2",
  //       name: "John",
  //       age: 42,
  //       address: "10 Downing Street",
  //     },
  //   ];

  //   const columns = [
  //     {
  //       title: "Name",
  //       dataIndex: "name",
  //       key: "name",
  //     },
  //     {
  //       title: "Age",
  //       dataIndex: "age",
  //       key: "age",
  //     },
  //     {
  //       title: "Address",
  //       dataIndex: "address",
  //       key: "address",
  //     },
  //   ];

  const TableHead = () => {
    return (
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    );
  };

  const TableBody = () => {
    return (
      <>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </>
    );
  };

  return (
    <div>
      <Table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
