const AlertMsg = ({ type, msg, errors }) => {
  return (
    <div className="col mx-auto">
      {/* success alert */}
      {type === "success" && (
        <div className="alert alert-success alert-block">{msg}</div>
      )}
      {/* error alert */}
      {type === "error" && (
        <div className="alert alert-danger alert-block">{msg}</div>
      )}
      {/* validations alert */}
      {errors && errors.length > 0 && (
        <div className="alert alert-danger alert-block">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AlertMsg;
