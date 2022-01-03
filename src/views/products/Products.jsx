import React from "react";
import CustomTable from "../../components/table/Table.jsx";
import CommonContainer from "../../helpers/CommonContainer.jsx";

function Products() {
  return (
    <CommonContainer>
      Products
      <CustomTable
        withActions
        actionList={[
          { label: "Edit", icon: "fas fa-pencil-alt" },
          { label: "Delete", icon: "fas fa-trash" },
        ]}
        handleActionSelection={(label) => {
          console.log("action", label);
        }}
        dataSource={[
          {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
          },
          {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
          },
        ]}
        columns={[
          {
            label: "Name",
            key: "name",
          },
          {
            label: "Age",
            key: "age",
          },
          {
            label: "Address",
            key: "address",
            render: (data) => {
              return (
                <div>
                  {data.name +
                    ":" +
                    data.address +
                    " long string to check overflow with table"}
                </div>
              );
            },
          },
        ]}
      />
    </CommonContainer>
  );
}

export default Products;
