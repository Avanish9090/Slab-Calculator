import { useState } from "react";
function Detail() {
  const [length, setlength] = useState("");
  const [width, setwidth] = useState("");
  const [beem1, setbeem1] = useState("");
  const [beem2, setbeem2] = useState("");
  const [beem1h, setbeem1h] = useState("");
  const [beem2h, setbeem2h] = useState("");
  const [sqft, setsqft] = useState(null);

  const lengthChange = (e) => {
    setlength(e.target.value);
  };
  const widthChange = (e) => {
    setwidth(e.target.value);
  };
  const beem1Change = (e) => {
    setbeem1(e.target.value);
  };
  const beem2Change = (e) => {
    setbeem2(e.target.value);
  };
  const beem1hChange = (e) => {
    setbeem1h(e.target.value);
  };
  const beem2hChange = (e) => {
    setbeem2h(e.target.value);
  };

  const handleClear = () => {
    setlength("");
    setbeem1("");
    setbeem1h("");
    setbeem2("");
    setbeem2h("");
    setwidth("");
    setsqft("");
  };

  const result = (parseFloat(length) || 0) * (parseFloat(width) || 0);

  const beem1Result =
    (parseFloat(beem1) || 0) *
    (parseFloat(beem1h) || 0) *
    (parseFloat(length) || 0);
  const beem2Result =
    (parseFloat(beem2) || 0) *
    (parseFloat(beem2h) || 0) *
    (parseFloat(width) || 0);

  function finalResult() {
    const final = result + beem1Result + beem2Result;
    setsqft(final);
  }

  return (
    <section className="details">
      <h1>
        Information of how to caculate the area of slab (सम्पूर्ण जानकारी की
        कैसे पूरी छत का माप करे। )
      </h1>
      <div style={{ textAlign: "center" }}>
        <p>हम पूरी छत को तीन भागो में देखते है - लम्बाई , चौड़ाई और मोटाई । </p>
        <img src="./details_slab.png" alt="details" />
        <p>Thickness = मोटाई , length = लम्बाई , width = चौड़ाई</p>
      </div>
      <hr />
      <h1>
        Calculate your total area in sqft(स्लैब का माप स्क्वायर(sqft) फ़ीट में
        ज्ञात करे )
      </h1>
      <h2>Every messurement should be in feet</h2>
      <div style={{ textAlign: "center" }}>
        छत की लम्बाई:
        <input
          type="text"
          value={length}
          onChange={lengthChange}
          placeholder="length"
        />
        <br />
        छत की चौड़ाई:
        <input
          type="text"
          value={width}
          onChange={widthChange}
          placeholder="width"
        />
        <br />
        <p>
          लम्बाई * चौड़ाई:
          <span style={{ color: "red" }}>{result}</span> फ़ीट
        </p>
        <br />
        <p>कुल बीमों की संख्या जिसकी लम्बाई {length} फ़ीट हो </p>
        <input
          type="text"
          value={beem1}
          onChange={beem1Change}
          placeholder="संख्या"
        />{" "}
        *
        <input
          type="text"
          value={beem1h}
          onChange={beem1hChange}
          placeholder="बीमों की मोटाई/उचाई "
        />
        <br />
        <p>कुल बीमों की संख्या जिसकी लम्बाई {width} फ़ीट हो </p>
        <input
          type="text"
          value={beem2}
          onChange={beem2Change}
          placeholder="संख्या"
        />{" "}
        *
        <input
          type="text"
          value={beem2h}
          onChange={beem2hChange}
          placeholder="बीमों की मोटाई/उचाई"
        />
        <br />
        <button onClick={finalResult} style={{ marginTop: "20px" }}>
          Click
        </button>
        <button style={{ marginLeft: "5px" }} onClick={handleClear}>
          clear
        </button>
        {sqft !== null && (
          <p>
            छत की कुल माप sqft में :{" "}
            <span style={{ color: "red" }}>{sqft}</span>
          </p>
        )}
      </div>
    </section>
  );
}
export default Detail;

export function Rmc() {
  //rmc logic
  const [cubic, setcubic] = useState("");
  const [sariya, setsariya] = useState("53");
  const cubicResult = cubic / 80.9;

  const cubicChange = (e) => {
    setcubic(e.target.value);
  };

  const sariyaChange = (e) => {
    setsariya(e.target.value);
  };

  //claculator logic
  const [display, setdisplay] = useState("");

  const changeDisplay = (value) => {
    setdisplay((prevInput) => prevInput + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setdisplay(result.toString());
    } catch {
      setdisplay("error");
    }
  };

  const clear = () => {
    setdisplay("");
  };

  const setClear = () => {
    setcubic("");
    setsariya("");
  };

  return (
    <div
      id="details"
      className="rmc-section"
      style={{ backgroundImage: `url('./rmc_slab.webp')` }}
    >
      <h1>RMC-Ready Mix Concrete</h1>
      <div style={{ textAlign: "center" }}>
        <h1>Rmc Details</h1>
        <p>
          RMC का उपयोग तब किया जाता है जब आपके स्लैब के लिए उतरने वाले सामान की
          पर्याप्त जगह न हो या तो आपके घर रोड से हटकर हो जहा पर सामान और अन्य
          जरुरी चीजे पहुंचने में दिक्कत आ सकती है। तो ऐसी स्थिति में RMC ये
          तरीका सबसे उपयोगी है ! लिफ्ट स्लैब और रंक स्लैब की लागत में लगभग कोई
          अंतर नहीं है और इसका स्लैब काफी मजबूत और टिकाऊ होता है !
        </p>
        <div className="rmc-container">
          <div className="rmc-left">
            <h2>Concrete Ratio Details</h2>
            <p>
              हम RMC में बालू , सीमेंट और गिट्टी के मिलावट को Cubic Meter में
              मापते है| कंक्रीट का ग्रेड :
            </p>
            <img src="./ratio_slab.jpg" alt="image" />
            <p>
              सभी मिलावटों की कीमत अलग अलग होती है। जिसमे सबसे ज्यादा M20 , M25
              चलन वाले मिलावट है। RMC के लिए हम छत /स्लैब को cubic meter में
              मापते है।
            </p>
            Sqft to meter cube:
            <input
              type="text"
              value={cubic}
              onChange={cubicChange}
              placeholder="in sqft"
            />
            <p>
              Approximate cubic meter ={" "}
              <span style={{ color: "red" }}>{cubicResult.toFixed(2)}</span> for
              4.5 inch slab
            </p>
            <hr />
            <h1>Total Cost</h1>
            <h2>Rmc का खर्चा : {(cubicResult * 5300).toFixed(2)} </h2>
            <h2>कुल सरिया : {(cubic / 100).toFixed(2)} कुंटल</h2>
            वर्तमान सरिया का रेट :
            <input type="text" value={sariya} onChange={sariyaChange} />
            <p>कुल सरिया का खर्चा : {(cubic * sariya).toFixed(2)}</p>
            <h2>
              छत /स्लैब का कुल खर्चा RMC में{" "}
              <span style={{ color: "green" }}>
                {(cubic * sariya + cubicResult * 5300).toFixed(2)}
              </span>
            </h2>
            <button onClick={setClear}>clear</button>
          </div>
          <div className="rmc-right">
            <h1>Calculator</h1>
            <div id="calculator" className="calculator">
              <input
                className="display"
                type="text"
                value={display}
                placeholder="00"
                onChange={changeDisplay}
                readOnly
              />
            </div>
            <div className="buttons">
              <button onClick={clear}>AC</button>
              <button onClick={() => changeDisplay("/")}>/</button>
              <button onClick={() => changeDisplay("*")}>*</button>

              <button onClick={() => changeDisplay("7")}>7</button>
              <button onClick={() => changeDisplay("8")}>8</button>
              <button onClick={() => changeDisplay("9")}>9</button>

              <button onClick={() => changeDisplay("4")}>4</button>
              <button onClick={() => changeDisplay("5")}>5</button>
              <button onClick={() => changeDisplay("6")}>6</button>

              <button onClick={() => changeDisplay("1")}>1</button>
              <button onClick={() => changeDisplay("2")}>2</button>
              <button onClick={() => changeDisplay("3")}>3</button>

              <button onClick={() => changeDisplay("00")}>00</button>
              <button onClick={() => changeDisplay("0")}>0</button>
              <button onClick={() => changeDisplay("+")}>+</button>
              <button onClick={() => changeDisplay(".")}>.</button>
              <button onClick={() => changeDisplay("-")}>-</button>
              <button onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
