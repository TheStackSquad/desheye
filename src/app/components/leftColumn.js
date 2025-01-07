'use client'
import '../../css/LeftColumn.css';

const LeftColumn = () => {
  return (
    <div className="left-column">
    {/* Left Column Content */}
    <div className="info-card">
      <div className="profile-image"></div>
      <h2 className="info-title">General Information</h2>
      <div className="info-list">
        <div className="info-item">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div className="info-content">
            <div className="info-label">Name:</div>
            <div className="info-value">Desheye Akalla</div>
          </div>
        </div>

        <div className="info-item">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.5 10.5C8.833 9.5 12 8 12 8s3.167 1.5 5.5 2.5M12 8v8.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.5 14.5s1.833-1.5 3.5-1.5 3.5 1.5 3.5 1.5"
            />
          </svg>
          <div className="info-content">
            <div className="info-label">Tel:</div>
            <div className="info-value">+234-815764221</div>
          </div>
        </div>

        <div className="info-item">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26c.72.48 1.6.48 2.32 0L21 8m-9 6v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5"
            />
          </svg>
          <div className="info-content">
  <div className="info-label">Email:</div>
  <div className="info-value">
    <a href="mailto:thefelainme@gmail.com"
      className="linkedinValue"
    >thefelainme@gmail.com</a>
  </div>
</div>

        </div>

        <div className="info-item">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.64 11.49l-1.2.6a3 3 0 00-.54 4.88l.66.66a3 3 0 004.88-.54l.6-1.2a2 2 0 00-.26-2.4l-2.2-2.2a2 2 0 00-2.4-.26zM15 7h.01"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 4h4v4m0-4L10 15"
            />
          </svg>
          <div className="info-content">
            <div className="info-label">WhatsApp:</div>
            <div className="info-value">+234 816 711 8379</div>
          </div>
        </div>

        <div className="info-item">
          <svg
            className="info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8a6 6 0 100 12 6 6 0 000-12zM16 8v4h4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.5 16H9m-4 0h1.5M16 12v4h4"
            />
          </svg>
          <div className="info-content">
            <div className="info-label">LinkedIn:</div>
            <div className="info-value linkedinValue">
              <a
                href="https://linkedin.com/in/a
                desheye"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedinValue"
              >
                linkedin.com/in/adesheye
              </a>
            </div>
          </div>
        </div>

        {/* Similar structure for Location and Date of Birth */}
      </div>
    </div>
  </div>
  );
};

export default LeftColumn;