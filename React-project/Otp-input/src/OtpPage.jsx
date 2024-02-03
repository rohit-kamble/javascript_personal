import { useState, useRef, useEffect } from "react";

function OtpPage() {
  const [otpInput, setOtpInput] = useState(Array(4).fill(""));
  const ref = useRef([]);
  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleChange = (event, idx) => {
    const todo = [...otpInput];
    // console.log("----", event.target.value);
    if (event.target.value === "") return;
    todo[idx] = event.target.value.substring(
      ref.current[idx].value.length - 1,
      ref.current[idx].value.length
    );
    setOtpInput(todo);

    if (ref.current[idx].value.length > 0) {
      //   console.log("***");
      ref.current[idx + 1].focus();
    }
    // if (ref.current[idx].value.length === 1 && idx === ref.current.length - 1) {
    //   ref.current[idx].focus();
    // }
  };

  const handleBack = (event, idx) => {
    const todo = [...otpInput];
    if (event.code === "Backspace") {
      if (todo[idx]) {
        todo[idx] = "";
        setOtpInput(todo);
      } else {
        ref.current[idx - 1].focus();
        ref.current[idx].value.setSelectionRange(1, 1);
      }
    }
    if (event.code === "ArrowLeft") {
      console.log("left", ref.current[idx - 1].value);

      ref.current[idx - 1].focus();
      todo[idx - 1].setSelectionRange(1, 1);
    }
    if (event.code === "ArrowRight") {
      ref.current[idx + 1].focus();
      ref.current[idx + 1].value.setSelectionRange(1, 1);
    }
  };
  const handleClick = (idx) => {
    ref.current[idx].value.setSelectionRange(1, 1);
  };
  return (
    <div>
      <h3>Otp Screen</h3>
      <div>
        {otpInput.map((item, index) => {
          //   console.log("ref?.current[index]?.value", ref?.current[index]?.value);
          return (
            <input
              type="text"
              ref={(input) => (ref.current[index] = input)}
              key={index}
              value={item}
              style={{
                margin: "20px 8px 0",
                width: 40,
                height: 40,
                textAlign: "center",
              }}
              onChange={(event) => handleChange(event, index)}
              onKeyDown={(event) => handleBack(event, index, item)}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
export default OtpPage;
