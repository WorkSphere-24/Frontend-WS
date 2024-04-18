import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

// import "./Table.css";

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <>
      <style>
        {`
                .scrolling th {
                  padding: 0.8rem;
                }
                table.scrolling {
                  width: 100%;
                  border-spacing: 0;
                  // border: 2px solid black;
              }
              thead tr th {
                height: 30px;
                line-height: 20px;
            }
              
     
            tbody td,
            thead th {
                width: 200px;
                border-right: 1px solid #b3b3b3 ;
            }
     
            td {
                text-align: center;
            }
                `}
      </style>

      <div className="table-wrapper h-[300px] overflow-auto ">
        <table className=" scrolling table-fixed h-full bg-red-0 border-purple-400 border-[1px] border-solid whitespace-nowrap w-full max-w-full">
            <thead className=" bg-violet-300 text-gray-900 sticky top-0">
                <tr className="p-3 ">
                <th className="p-3 ">Page</th>
                <th className="expand w-[100%] p-3">Description</th>
                <th className="px-[2vw]">Status</th>
                <th className="p-3 ">Actions</th>
                </tr>
            </thead>
          
          <tbody className="tbody overflow-auto">
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <>
                  <style>
                    {`
                .table td {
                  padding: 0.8rem;
                  border-top: 0.5px solid #ddd;
                  overflow: auto;
                  text-overflow: ellipsis;
                }
                `}
                  </style>
                  <tr key={idx} className="p-3 hover:bg-[#eee] h-[50px]">
                    <td>{row.page}</td>
                    <td className="expand w-[100%]">{row.description}</td>
                    <td>
                    <span className={`label p-[0px] flex justify-center items-center label-${row.status}`}>

{(row.status === "working on it") ? <div className="label-draft w-[90%] bg-[#ffd026] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}
{(row.status === "done") ? <div className="label-live w-[90%] bg-[#42a942] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}
{(row.status === "stuck") ? <div className="label-error w-[90%] bg-[#d9534f] rounded-[3px] p-[0.3rem] text-white">{statusText}</div> : null}

</span>

                    </td>
                    <td className="fit">
                      <span className="actions  flex justify-around">
                        <BsFillTrashFill
                          className="delete-btn cursor-pointer text-red-500"
                          onClick={() => deleteRow(idx)}
                        />
                        <BsFillPencilFill
                          className="edit-btn cursor-pointer "
                          onClick={() => editRow(idx)}
                        />
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;