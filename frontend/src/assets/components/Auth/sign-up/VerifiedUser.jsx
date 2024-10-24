const VerifiedUser = () => {
  return (
    <>
      <div className="anim-main-container">
        <div className="check-container">
          <div className="check-background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="check-shadow"></div>
        </div>
        <h1 className="fw-bold fade-in-text">Thank You!</h1>
        <p className="fs-4 fade-in-text">
          Your email has been successfully verified.
        </p>
      </div>
    </>
  );
};

export default VerifiedUser;
