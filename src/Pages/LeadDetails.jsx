import React from "react";
import "./LeadDetails.scss";
// Assuming you have a GlassCard component here, though for the styling issue
// it's the className="detail-card" that matters, which extends .glass-card in your SCSS.
import GlassCard from "../components/GlassCard/GlassCard"; 
import {
  FiMail,
  FiPhone,
  FiCreditCard,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiLink,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiPaperclip,
  FiActivity,
  FiXCircle,
  FiExternalLink,
  FiTwitter,
  FiFacebook,
  FiEdit2,
} from "react-icons/fi";
import { FaCalendarCheck, FaChevronRight } from "react-icons/fa";

// ----------------------------------------------------
// FIXED: DEFINE COLORS AS JAVASCRIPT CONSTANTS
// This prevents the "Uncaught ReferenceError: $text is not defined" error.
// These values match the SCSS variables in LeadDetails.scss.
// ----------------------------------------------------
const COLORS = {
  light: '#f1f1f1',
  faded: '#a0a0a0',
  primary: '#6a0dad', 
};

// Mock Data based on the screenshots/PDF
const leadData = {
  name: "Thomas Fleming",
  company: "On My Goodknits Inc",
  leadOwner: "Nandha Kumar",
  email: "rohan.mehta@innovix.com",
  phone: "+91 9123456789",
  mobile: "(555) 867-5309",
  status: "Completed",
  lastContacted: "24-Jan-2025",

  // Detailed Information (from Screenshot 16/PDF)
  detailed: {
    owner: "Nandhakumar",
    title: "Director of Sales",
    mobile_2: "555-555-5555",
    source: "Advertisement",
    industry: "Data/Telecom OEM",
    revenue: "$200,000.00",
    email_opt_out: "-",
    modified_by: "Nandhakumar",
    modified_date: "Fri, 7 Apr 2023 11:04 AM",

    company_2: "Oh My Goodknits Inc",
    lead_name_2: "Ms. Carissa Kidman (Sample)",
    email_2: "carissa-kidman@yahoo.com",
    fax: "-",
    website: "http://www.truhlarandtruhlarattys.com",
    status_2: "Contact in Future",
    num_employees: "-",
    rating: "-",
    created_by: "Nandhakumar",
    created_date: "Fri, 7 Apr 2023 11:03 AM",
    skype_id: "carissa-kidman",
  },

  // Address Information (from Screenshot 16)
  address: {
    street: "5 Boston Ave #88",
    state: "SD",
    country: "United States",
    city: "Sioux Falls",
    zip: "57105",
  },

  description: "-", // from Screenshot 16
};

// Data structure for the Related Lists Sidebar
const relatedLists = [
  { name: "Notes", icon: <FiMessageSquare className="icon" />, path: "notes" },
  {
    name: "Attachments",
    icon: <FiPaperclip className="icon" />,
    path: "attachments",
  },
  {
    name: "Open Activities",
    icon: <FiActivity className="icon" />,
    path: "open-activities",
  },
  {
    name: "Closed Activities",
    icon: <FiXCircle className="icon" />,
    path: "closed-activities",
  },
  {
    name: "Invited Messages",
    icon: <FaCalendarCheck className="icon" />,
    path: "invited-messages",
  },
  { name: "Emails", icon: <FiMail className="icon" />, path: "emails" },
  { name: "Social", icon: <FiUser className="icon" />, path: "social" },
];

// Helper component for a quick info pair (like Lead Owner: Nandha Kumar)
const QuickInfo = ({ label, value }) => (
  <div className="quick-info-grid">
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

// Helper component for the two-column Lead Information layout
const DetailedInfoPair = ({ label, value }) => (
  <div className="info-pair">
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

const LeadDetails = () => {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const [activeRelatedList, setActiveRelatedList] = React.useState("Notes");
  const [activeEmailTab, setActiveEmailTab] = React.useState("Mail");

  // Function to render the currently selected content based on the left sidebar
  const renderRelatedContent = () => {
    switch (activeRelatedList) {
      case "Notes":
        return (
          <>
            <div className="related-sub-section">
              <div className="sub-header">
                <h4>Notes</h4>
                <span className="action-btn">
                  Recent Last <FaChevronRight size={12} />
                </span>
              </div>
              <p
                style={{
                  // FIXED: Used JS constant
                  color: leadData.description === "-" ? COLORS.faded : COLORS.light, 
                  margin: "5px 0",
                }}
              >
                Add a note...
              </p>
            </div>
            <div className="related-sub-section">
              <p className="no-records">No records found</p>
            </div>
          </>
        );
      case "Attachments":
        return (
          <div className="related-sub-section">
            <div className="sub-header">
              <h4>Attachments</h4>
              <a href="#attach" className="action-btn">
                Attach
              </a>
            </div>
            <p className="no-records">No Attachments</p>
            <div className="related-sub-section">
              <p className="no-records">No Attachments</p>
            </div>
          </div>
        );
      case "Open Activities":
        return (
          <div className="related-sub-section">
            <div className="sub-header">
              <h4>Open Activities</h4>
              <a href="#add" className="action-btn">
                Add New
              </a>
            </div>
            <p className="no-records">No records found</p>
          </div>
        );
      case "Closed Activities":
        return (
          <div className="related-sub-section">
            <h4>Closed Activities</h4>
            <p className="no-records">No records found</p>
          </div>
        );
      case "Emails":
        return (
          <div className="related-sub-section">
            <div className="sub-header">
              <h4>Emails</h4>
              <a href="#compose" className="action-btn">
                Compose Email
              </a>
            </div>
            <div className="email-tabs">
              <span
                className={activeEmailTab === "Mail" ? "active" : ""}
                onClick={() => setActiveEmailTab("Mail")}
              >
                Mail
              </span>
              <span
                className={activeEmailTab === "Draft" ? "active" : ""}
                onClick={() => setActiveEmailTab("Draft")}
              >
                Draft
              </span>
              <span
                className={activeEmailTab === "Scheduled" ? "active" : ""}
                onClick={() => setActiveEmailTab("Scheduled")}
              >
                Scheduled
              </span>
            </div>
            <p className="no-records">No records found</p>
          </div>
        );
      case "Social":
        return (
          <>
            <div className="related-sub-section">
              <div className="sub-header">
                <h4>Social</h4>
              </div>
              <div className="social-associate">
                <FiTwitter /> Associate Twitter
              </div>
              <div className="social-associate">
                <FiFacebook /> Associate Facebook
              </div>
            </div>
            <div className="related-sub-section">
              <p className="no-records" style={{ textAlign: "left" }}>
                You cannot search a profile in Facebook. This has to be
                associated from the Social Tab.
              </p>
              <FiUser
                size={100}
                style={{
                  display: "block",
                  margin: "20px auto",
                  color: COLORS.faded, // FIXED: Used JS constant
                }}
              />
            </div>
          </>
        );
      case "Invited Messages":
        return (
          <div className="related-sub-section">
            <h4>Invited Messages</h4>
            <p className="no-records">No records found</p>
          </div>
        );
      case "Campaigns":
        return (
          <div className="related-sub-section">
            <div className="sub-header">
              <h4>Campaigns</h4>
              <a href="#add" className="action-btn">
                Add Campaigns
              </a>
            </div>
            <p className="no-records">No records found</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lead-details-page">
      {/* Header Section */}
      <header className="lead-header">
        <div className="main-info">
          <img
            className="profile-pic"
            src="path/to/profile/image.jpg"
            alt="Nelson"
          />
          <div className="text-info">
            <h1>
              Nelson <FiEdit2 size={16} style={{ color: "#90ee90" }} />
            </h1>
            <p>On My Goodknits Inc</p>
          </div>
        </div>
        <div className="actions">
          <span className="last-contacted">
            Last contacted on: {leadData.lastContacted}
          </span>
          <button className="email-btn">
            <FiMail /> Send Email
          </button>
          <button className="convert-btn">
            <FiLink /> Convert
          </button>
          <button className="edit-btn">
            <FiEdit2 /> Edit
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="lead-content">
        {/* LEFT COLUMN: Related Lists Sidebar */}
        <div className="related-lists-sidebar">
          <div
            style={{
              marginBottom: "15px",
              color: COLORS.light, // FIXED: Used JS constant
              fontWeight: "bold",
            }}
          >
            Related Lists
          </div>
          {relatedLists.map((item) => (
            <div
              key={item.name}
              className={`related-list-item ${
                item.name === activeRelatedList ? "active" : ""
              }`}
              onClick={() => setActiveRelatedList(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Details Area */}
        <div className="details-area">
          {/* Tabs Navigation (Overview/Timeline) */}
          <nav className="tabs-nav">
            <span
              className={activeTab === "Overview" ? "active" : ""}
              onClick={() => setActiveTab("Overview")}
            >
              Overview
            </span>
            <span
              className={activeTab === "Timeline" ? "active" : ""}
              onClick={() => setActiveTab("Timeline")}
            >
              Timeline
            </span>
          </nav>

          {activeTab === "Overview" && (
            <div className="detail-section">
              {/* Quick Info (Top Section) */}
              <GlassCard className="detail-card">
                <QuickInfo label="Lead Owner" value={leadData.leadOwner} />
                <QuickInfo label="Email" value={leadData.email} />
                <QuickInfo label="Phone" value={leadData.phone} />
                <QuickInfo label="Mobile" value={leadData.mobile} />
                <QuickInfo label="Lead Status" value={leadData.status} />
              </GlassCard>

              {/* Lead Information */}
              <GlassCard className="detail-card">
                <h3 style={{ marginBottom: "0" }}>Lead Information</h3>
                <span
                  style={{ color: COLORS.faded, fontSize: "0.9rem" }} // FIXED: Used JS constant
                >
                  Hide Details
                </span>
                <div className="section-separator" />

                <div className="quick-info-grid two-column-layout">
                  <DetailedInfoPair
                    label="Lead Owner"
                    value={leadData.detailed.owner}
                  />
                  <DetailedInfoPair
                    label="Company"
                    value={leadData.detailed.company_2}
                  />
                  <DetailedInfoPair
                    label="Title"
                    value={leadData.detailed.title}
                  />
                  <DetailedInfoPair
                    label="Lead Name"
                    value={leadData.detailed.lead_name_2}
                  />
                  <DetailedInfoPair
                    label="Phone"
                    value={leadData.detailed.mobile_2}
                  />
                  <DetailedInfoPair
                    label="Email"
                    value={leadData.detailed.email_2}
                  />
                  <DetailedInfoPair
                    label="Mobile"
                    value={leadData.detailed.mobile_2}
                  />
                  <DetailedInfoPair label="Fax" value={leadData.detailed.fax} />
                  <DetailedInfoPair
                    label="Lead Source"
                    value={leadData.detailed.source}
                  />
                  <DetailedInfoPair
                    label="Website"
                    value={leadData.detailed.website}
                  />
                  <DetailedInfoPair
                    label="Industry"
                    value={leadData.detailed.industry}
                  />
                  <DetailedInfoPair
                    label="Lead Status"
                    value={leadData.detailed.status_2}
                  />
                  <DetailedInfoPair
                    label="Annual Revenue"
                    value={leadData.detailed.revenue}
                  />
                  <DetailedInfoPair
                    label="No. of Employees"
                    value={leadData.detailed.num_employees}
                  />
                  <DetailedInfoPair
                    label="Email Opt Out"
                    value={leadData.detailed.email_opt_out}
                  />
                  <DetailedInfoPair
                    label="Rating"
                    value={leadData.detailed.rating}
                  />
                  <DetailedInfoPair
                    label="Modified By"
                    value={`${leadData.detailed.modified_by} / ${leadData.detailed.modified_date}`}
                  />
                  <DetailedInfoPair
                    label="Created By"
                    value={`${leadData.detailed.created_by} / ${leadData.detailed.created_date}`}
                  />
                  <DetailedInfoPair
                    label="Skype ID"
                    value={leadData.detailed.skype_id}
                  />
                  <DetailedInfoPair label=" " value=" " />{" "}
                  {/* Blank pair for alignment */}
                </div>
              </GlassCard>

              {/* Address Information */}
              <GlassCard className="detail-card">
                <h3>Address Information</h3>
                <div className="quick-info-grid two-column-layout">
                  <DetailedInfoPair
                    label="Street"
                    value={leadData.address.street}
                  />
                  <DetailedInfoPair
                    label="City"
                    value={leadData.address.city}
                  />

                  <DetailedInfoPair
                    label="State"
                    value={leadData.address.state}
                  />
                  <DetailedInfoPair
                    label="Zip Code"
                    value={leadData.address.zip}
                  />

                  <DetailedInfoPair
                    label="Country"
                    value={leadData.address.country}
                  />
                  <DetailedInfoPair label=" " value=" " />
                </div>
              </GlassCard>

              {/* Description Information */}
              <GlassCard className="detail-card">
                <h3>Description Information</h3>
                <p
                  style={{
                    // FIXED: Used JS constant
                    color: leadData.description === "-" ? COLORS.faded : COLORS.light,
                  }}
                >
                  {leadData.description}
                </p>
              </GlassCard>

              {/* Content based on the Active Related List */}
              <GlassCard className="detail-card">
                {renderRelatedContent()}
              </GlassCard>
            </div>
          )}

          {activeTab === "Timeline" && (
            <GlassCard className="detail-card">
              <h3>Timeline View</h3>
              <p style={{ color: COLORS.faded }}> {/* FIXED: Used JS constant */}
                Timeline content will be displayed here.
              </p>
            </GlassCard>
          )}
        </div>
      </main>
    </div>
  );
};

export default LeadDetails;