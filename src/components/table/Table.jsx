import React from "react";
import {
  Table,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Card,
} from "reactstrap";
import { get } from "lodash";
import PropTypes from "prop-types";
import "./table.scss";

const CustomTable = (props) => {
  const {
    tableName,
    dataSource,
    columns,
    withActions,
    actionList,
    handleActionSelection,
  } = props;

  const TableHead = () => {
    return (
      <tr>
        {columns?.map((column, index) => {
          return (
            <th key={index} className={`${tableName}-${column?.title}`}>
              {column?.label}
            </th>
          );
        })}
        {withActions && <th className="table-actions">Actions</th>}
      </tr>
    );
  };

  const TableBody = () => {
    return (
      <>
        {dataSource?.map((eachRow, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {columns?.map((eachColumn, columnIndex) => {
                return (
                  <td
                    key={columnIndex}
                    id={`${tableName}${rowIndex}${columnIndex}`}
                  >
                    {eachColumn?.render !== undefined
                      ? eachColumn?.render(eachRow)
                      : Array.isArray(get(eachRow, eachColumn?.key))
                      ? get(eachRow, eachColumn?.key).join(", ")
                      : get(eachRow, eachColumn?.key)}
                  </td>
                );
              })}
              {withActions && (
                <td>
                  <div style={{ paddingLeft: "12px" }}>
                    <UncontrolledDropdown>
                      <DropdownToggle className="actions-dropdown-toggle">
                        <i
                          className="fas fa-ellipsis-h"
                          style={{ color: "rgb(134, 146, 176)" }}
                        />
                      </DropdownToggle>
                      <DropdownMenu right>
                        {actionList?.map((action, index) => {
                          return (
                            <>
                              <DropdownItem
                                key={index}
                                className="actions-dropdown-item"
                                onClick={() =>
                                  handleActionSelection(action.label)
                                }
                              >
                                <i className={action.icon} /> {action.label}
                              </DropdownItem>
                              {action.divider && <DropdownItem divider />}
                            </>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </td>
              )}
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <div>
      {dataSource?.length > 0 ? (
        <Table className="custom-table">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </Table>
      ) : (
        <>
          <Table className="custom-table">
            <thead>
              <TableHead />
            </thead>
          </Table>
          <Card>
            <h1
              className="d-flex justify-content-center"
              style={{ marginTop: "20px", fontFamily: "Roboto, Arial" }}
            >
              No Results Found
            </h1>
          </Card>
        </>
      )}
    </div>
  );
};

export default CustomTable;

CustomTable.defaultProps = {
  tableName: "table",
  dataSource: [],
  columns: [],
  withActions: false,
  actionList: [],
  handleActionSelection: () => {},
};

CustomTable.propTypes = {
  tableName: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  withActions: PropTypes.bool,
  actionList: PropTypes.arrayOf(PropTypes.object),
  handleActionSelection: PropTypes.func,
};
