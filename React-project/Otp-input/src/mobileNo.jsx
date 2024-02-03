import { useState } from "react";
import { useNavigate } from "react-router-dom";
const myMobile = "8983868905";
let temp = null;
let currentvalue = "";
function MobileNo() {
  const navigate = useNavigate();
  const [no, setNo] = useState(null);
  const [flag, setFlage] = useState(false);
  const checkMobile = () => {
    if (currentvalue === myMobile) {
      setFlage(true);
    } else {
      setFlage(false);
    }
  };

  const handleData = (text) => {
    clearTimeout(temp);
    temp = setTimeout(() => {
      currentvalue = text;
      checkMobile();
    }, 500);
    setNo(text);
  };

  return (
    <div>
      <h1>MOBILE No</h1>
      <input
        type="number"
        placeholder="Mobile Number"
        value={no}
        style={{ height: 30, padding: 4 }}
        onChange={(event) => handleData(event.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button disabled={!flag} onClick={() => navigate("/otp-page")}>
          submit
        </button>
      </div>
    </div>
  );
}
export default MobileNo;
