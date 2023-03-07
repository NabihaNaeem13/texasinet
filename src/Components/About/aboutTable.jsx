import { FaCheck } from "react-icons/fa";
import React from "react";

const AboutTable = () => {
  return (
    <>
      <div className="col-md-9 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th className="text-center table-title" scope="col">
                STANDARD MSPs
              </th>
              <th className="text-center table-title" scope="col">
                TEXASiNET
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="table-row" scope="row">
                Server Monitoring & Maintenance
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Network Monitoring & Management
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Help Desk Services
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Basic Security
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Backup Solution
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Procurement Services
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Monthly IT Operational Meetings
              </th>
              <td className="text-center">
                <FaCheck style={{ color: "black", fontSize: "1.5rem" }} />
              </td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Quarterly Business Reviews
              </th>
              <td className="text-center"></td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Support Application
              </th>
              <td className="text-center"></td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Regular Proactive On-Site Visits
              </th>
              <td className="text-center"></td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
            <tr>
              <th className="table-row" scope="row">
                Dedicated Project Team
              </th>
              <td className="text-center"></td>
              <td className="text-center">
                <FaCheck style={{ color: "red", fontSize: "1.5rem" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AboutTable;

