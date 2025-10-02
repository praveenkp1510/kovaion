import React, { useState, useMemo } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaUserPlus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Table.scss";


const mockLeadsTableData = [
  {
    id: 1,
    name: "Alpha Systems Inc.",
    number: "987-654-3210",
    description: "Looking for Q3 software update.",
    status: "Open",
    source: "Website",
    amount: "$50,000",
    interest: "High",
  },
  {
    id: 2,
    name: "Beta Consulting",
    number: "123-456-7890",
    description: "Inquired about marketing services.",
    status: "Open",
    source: "Referral",
    amount: "$15,000",
    interest: "Medium",
  },
  {
    id: 3,
    name: "Gamma Solutions",
    number: "555-123-4567",
    description: "Requested pricing for hardware.",
    status: "Closed",
    source: "Cold Call",
    amount: "$120,000",
    interest: "High",
  },
  {
    id: 4,
    name: "Delta Corp",
    number: "111-222-3333",
    description: "Follow-up on previous proposal.",
    status: "Open",
    source: "Campaign",
    amount: "$5,000",
    interest: "Low",
  },
  {
    id: 5,
    name: "Epsilon Tech",
    number: "444-555-6666",
    description: "Needs custom development quote.",
    status: "Qualified",
    source: "Website",
    amount: "$250,000",
    interest: "High",
  },
  {
    id: 6,
    name: "Zeta Networks",
    number: "777-888-9999",
    description: "Interested in cloud migration.",
    status: "Open",
    source: "Partner",
    amount: "$30,000",
    interest: "Medium",
  },
  {
    id: 7,
    name: "Eta Analytics",
    number: "000-111-2222",
    description: "Demo scheduled for next week.",
    status: "Open",
    source: "Website",
    amount: "$8,000",
    interest: "Medium",
  },
  {
    id: 8,
    name: "Theta Dynamics",
    number: "333-444-5555",
    description: "Budget discussion pending.",
    status: "Qualified",
    source: "Referral",
    amount: "$75,000",
    interest: "High",
  },
  {
    id: 9,
    name: "Iota Innovations",
    number: "666-777-8888",
    description: "Final contract review.",
    status: "Closed",
    source: "Campaign",
    amount: "$40,000",
    interest: "Low",
  },
  {
    id: 10,
    name: "Kappa Enterprises",
    number: "999-000-1111",
    description: "New lead from recent event.",
    status: "Open",
    source: "Event",
    amount: "$10,000",
    interest: "Medium",
  },
  {
    id: 11,
    name: "Lambda Solutions",
    number: "123-098-7654",
    description: "Needs immediate support.",
    status: "Open",
    source: "Website",
    amount: "$22,000",
    interest: "High",
  },
  {
    id: 12,
    name: "Mu Technologies",
    number: "456-321-9870",
    description: "Follow up on a stale deal.",
    status: "Open",
    source: "Cold Call",
    amount: "$18,000",
    interest: "Low",
  },
  {
    id: 13,
    name: "Nu Ventures",
    number: "789-654-3210",
    description: "Scheduled a technical deep-dive.",
    status: "Qualified",
    source: "Partner",
    amount: "$90,000",
    interest: "High",
  },
];

const headers = [
  "S.No",
  "Name",
  "Number",
  "Description",
  "Status",
  "Source",
  "Amount",
  "Interest",
  "Action",
];
const ITEMS_PER_PAGE = 8;

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data] = useState(mockLeadsTableData);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 2) {
      endPage = Math.min(totalPages, 5);
    } else if (currentPage >= totalPages - 1) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "blue";
      case "qualified":
        return "green";
      case "closed":
        return "red";
      case "contacted":
        return "yellow";
      default:
        return "gray";
    }
  };

  return (
    <div className="app-container">
      <div className="table-wrapper">
        {/* Table Header */}
        <div className="table-header">
          <div className="header-left">
            <h2>All Leads</h2>
            <p>Find all leads in a single place</p>
          </div>
          <div className="header-right">
            <div className="search-input">
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="filter-button" title="Filter">
              <FaFilter />
            </button>
            <button className="add-button">
              <FaUserPlus /> Add Leads
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.number}</td>
                  <td>{lead.description}</td>
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(lead.status)}`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td>{lead.source}</td>
                  <td
                    className={`amount ${
                      lead.amount.includes("-") ? "negative" : "positive"
                    }`}
                  >
                    {lead.amount}
                  </td>
                  <td>{lead.interest}</td>
                  <td className="">
                    <FaEye className="icon-icon" title="View Lead Details" />
                    <FaEdit className="icon-icon" title="Edit Lead" />
                    <FaTrash className="icon-icon" title="Delete Lead" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className={`page-control ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          <div className="page-numbers">
            {getPageNumbers().map((page) => (
              <span
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            ))}
          </div>

          {totalPages > 5 && currentPage + 2 < totalPages && (
            <span className="text-gray-400">...</span>
          )}
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span
              key={totalPages}
              className={totalPages === currentPage ? "active" : ""}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </span>
          )}

          <button
            className={`page-control ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
