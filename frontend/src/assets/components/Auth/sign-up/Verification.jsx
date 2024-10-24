import "./sign-up.css";
import { useState, useEffect } from "react";
import AuthUser from "../AuthUser";
import { toast } from "react-toastify";
import VerifiedUser from "./VerifiedUser";
import { useNavigate } from "react-router-dom";

const Verification = ({ userEmail }) => {
  const { http } = AuthUser();
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleVerificationCode = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const response = await http.post("verify", {
        email: userEmail,
        code,
      });
      console.log("Backend Response:", response.data);

      if (response.data.message == "Email verified successfully.") {
        setIsVerified(true);
        setTimeout(() => {
          navigate('/')
        }, 5000);
      } else {
        toast.error(
          response.data.error || "Verification failed! Please check your code."
        );
      }
    } catch (error) {
      console.log("Error verifying email", error);
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVerified, navigate]);

  if (isVerified) {
    return <VerifiedUser />;
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
          <div className="col mx-auto">
            <div className="card my-4">
              <div className="card-body">
                <div className="border p-4 rounded text-center">
                  <svg
                    width="100px"
                    height="100px"
                    viewBox="0 0 512 512"
                    id="Layer_1"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <g id="Message_and_nofitications">
                          <circle
                            className="st0"
                            cx="255.4"
                            cy="256"
                            r="215.6"
                          />

                          <g id="Bottom_line_15_">
                            <line
                              className="st34"
                              x1="455.1"
                              x2="471"
                              y1="471.6"
                              y2="471.6"
                            />

                            <line
                              className="st34"
                              x1="77.2"
                              x2="438.7"
                              y1="471.6"
                              y2="471.6"
                            />

                            <line
                              className="st34"
                              x1="39.8"
                              x2="60.7"
                              y1="471.6"
                              y2="471.6"
                            />
                          </g>

                          <g id="_x33_rd_notification_shadow">
                            <circle
                              className="st14"
                              cx="375.5"
                              cy="214.3"
                              r="35"
                            />
                          </g>

                          <g id="Envelope">
                            <path
                              className="st42"
                              d="M406.9,292.5v152.6c0,14.1-11.4,25.5-25.5,25.5h-252c-14.1,0-25.5-11.4-25.5-25.5V292.5       c0-2.7,0.5-5.4,1.6-7.9c1.1-2.7,2.7-5.2,4.9-7.2l122.5-116.9c12.6-12,32.4-12,45.1,0l122.5,116.9c2.2,2.1,3.8,4.5,4.9,7.2       C406.3,287.1,406.9,289.8,406.9,292.5z"
                              id="Shape_77_"
                            />

                            <g id="Outer">
                              <path
                                className="st43"
                                d="M405.3,284.7l-43.6,29.4l-69.5,46.8c-22.2,15-51.3,15-73.6,0l-69.5-46.8l-43.6-29.4"
                              />

                              <g id="Lines_33_">
                                <line
                                  className="st25"
                                  id="Bottom_68_"
                                  x1="206.2"
                                  x2="214.2"
                                  y1="418.2"
                                  y2="424.4"
                                />

                                <line
                                  className="st25"
                                  id="Middle_56_"
                                  x1="206.2"
                                  x2="222.3"
                                  y1="410.5"
                                  y2="422.8"
                                />

                                <line
                                  className="st25"
                                  id="Top_70_"
                                  x1="217.8"
                                  x2="222.3"
                                  y1="411.6"
                                  y2="415"
                                />
                              </g>

                              <g id="Vertical_line_5_">
                                <line
                                  className="st3"
                                  id="Bottom_67_"
                                  x1="392.6"
                                  x2="392.6"
                                  y1="348.9"
                                  y2="371.4"
                                />

                                <line
                                  className="st3"
                                  id="Top_69_"
                                  x1="392.6"
                                  x2="392.6"
                                  y1="330.4"
                                  y2="336.3"
                                />
                              </g>

                              <path
                                className="st37"
                                d="M396.8,448.3c-0.9,4.5-4.1,8.2-8.3,9.8"
                                id="Bottom_line_14_"
                              />

                              <g className="st44" id="Content_14_">
                                <path
                                  className="st28"
                                  d="M175,431.9h-38.2c-3,0-5.4-2.4-5.4-5.4v-18.3c0-3,2.4-5.4,5.4-5.4H175         c3,0,5.4,2.4,5.4,5.4v18.3C180.4,429.5,178,431.9,175,431.9z"
                                  id="Bottom_66_"
                                />

                                <path
                                  className="st28"
                                  d="M174.6,390.7h-38.2c-3,0-5.4-2.4-5.4-5.4V367c0-3,2.4-5.4,5.4-5.4h38.2         c3,0,5.4,2.4,5.4,5.4v18.3C179.9,388.3,177.5,390.7,174.6,390.7z"
                                  id="Top_68_"
                                />
                              </g>
                            </g>

                            <g id="Inner">
                              <g id="Letter">
                                <path
                                  className="st45"
                                  d="M361.7,270.8v43.3l-80.5,54.2c-15.6,10.5-35.9,10.5-51.5,0l-80.5-54.2v-43.3         c0-1.9,1.5-3.4,3.4-3.4h205.7C360.1,267.3,361.7,268.9,361.7,270.8z"
                                  id="Shape_76_"
                                />

                                <g id="Content_13_">
                                  <line
                                    className="st34"
                                    id="Bottom_65_"
                                    x1="202.3"
                                    x2="308.5"
                                    y1="330.4"
                                    y2="330.4"
                                  />

                                  <line
                                    className="st34"
                                    id="Middle_55_"
                                    x1="202.3"
                                    x2="308.5"
                                    y1="315.7"
                                    y2="315.7"
                                  />

                                  <line
                                    className="st34"
                                    id="Top_67_"
                                    x1="202.3"
                                    x2="308.5"
                                    y1="300.9"
                                    y2="300.9"
                                  />
                                </g>
                              </g>

                              <g>
                                <g>
                                  <path
                                    className="st37"
                                    d="M246.8,172.2c4.8-4.6,12.4-4.6,17.2,0"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>

                          <g id="Nofitications">
                            <g id="_x33_rd_19_">
                              <circle
                                className="st41"
                                cx="361.7"
                                cy="205.5"
                                id="Shape_75_"
                                r="35"
                              />

                              <g id="Sparkles_21_">
                                <line
                                  className="st24"
                                  id="_x32_nd_21_"
                                  x1="426.6"
                                  x2="418.2"
                                  y1="169.6"
                                  y2="174.7"
                                />

                                <line
                                  className="st24"
                                  id="_x33_rd_20_"
                                  x1="432"
                                  x2="423.3"
                                  y1="183.6"
                                  y2="183.8"
                                />

                                <line
                                  className="st24"
                                  id="_x31_st_21_"
                                  x1="411.5"
                                  x2="415.3"
                                  y1="166.6"
                                  y2="158.1"
                                />
                              </g>
                            </g>

                            <g id="_x32_nd_19_">
                              <circle
                                className="st14"
                                cx="331.4"
                                cy="128"
                                id="Shadow_53_"
                                r="35"
                              />

                              <circle
                                className="st39"
                                cx="317.1"
                                cy="117.2"
                                id="Shape_74_"
                                r="35"
                              />

                              <g id="Sparkles_20_">
                                <line
                                  className="st24"
                                  id="_x33_rd_18_"
                                  x1="308.1"
                                  x2="306.4"
                                  y1="56.8"
                                  y2="65.3"
                                />

                                <line
                                  className="st24"
                                  id="_x32_nd_20_"
                                  x1="293.2"
                                  x2="296.5"
                                  y1="59.3"
                                  y2="68.6"
                                />

                                <line
                                  className="st24"
                                  id="_x31_st_20_"
                                  x1="287.3"
                                  x2="279.7"
                                  y1="73.5"
                                  y2="68"
                                />
                              </g>
                            </g>

                            <g id="_x31_st_18_">
                              <circle
                                className="st14"
                                cx="237.3"
                                cy="105.5"
                                id="Shadow_52_"
                                r="35"
                              />

                              <circle
                                className="st38"
                                cx="220.4"
                                cy="98.3"
                                id="Shape_73_"
                                r="35"
                              />

                              <g id="Sparkles_19_">
                                <line
                                  className="st24"
                                  id="_x33_rd_17_"
                                  x1="172"
                                  x2="166.3"
                                  y1="124.9"
                                  y2="132.3"
                                />

                                <line
                                  className="st24"
                                  id="_x32_nd_18_"
                                  x1="158"
                                  x2="167.3"
                                  y1="118.6"
                                  y2="115.5"
                                />

                                <line
                                  className="st24"
                                  id="_x31_st_19_"
                                  x1="155.9"
                                  x2="164.4"
                                  y1="103.6"
                                  y2="105.5"
                                />
                              </g>
                            </g>
                          </g>
                        </g>

                        <path
                          className="st46"
                          d="M357.3,198.2c0,0,6.5-4.4,9,1.3c2.8,6.4-10.3,15-10.3,15h11.4"
                        />

                        <polyline
                          className="st46"
                          points="324.2,120.1 307.2,120.1 319.3,105 319.3,126.1    "
                        />

                        <polyline
                          className="st46"
                          points="212.2,92.5 218.8,86.1 218.8,107.3    "
                        />
                      </g>
                    </g>
                  </svg>
                  <p className="text-uppercase fs-4 fw-bold mt-3 mb-0 verify-mail">
                    Just one more step,
                  </p>
                  <p className="text-uppercase fs-4 fw-bold verify-mail">
                    Let's Verify your Email
                  </p>
                  <p>
                    We already send a code to
                    <strong className="text-primary ps-1">{userEmail}</strong>,
                    please check your inbox and insert it below to verify your
                    email.
                  </p>
                  <form onSubmit={handleVerificationCode}>
                    <input
                      type="text"
                      className="form-control"
                      id="verify-pin"
                      name="code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Enter your verification code"
                      required
                      maxLength={6}
                    />
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn text-white d-flex justify-content-center align-items-center gap-2 mt-3"
                          id="custom-bg-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Verifying..." : "Verify"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
