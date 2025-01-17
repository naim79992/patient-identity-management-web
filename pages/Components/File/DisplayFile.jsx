import React, { useContext, useState } from "react";
import Styles from "./DisplayFile.module.css";
import { EducationContext } from "@/context/Education";

const DisplayFile = ({ userData }) => {
  const { patientData } = useContext(EducationContext);
  const [data, setData] = useState("");
  const getData = async () => {
    let dataArray;

    try {
      dataArray = await userData[8];
      console.log("data image", dataArray);
    } catch (error) {
      alert(error);
    }

    const isEmpty = Object.keys(dataArray).length === 0;
    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a
            href={`https://turquoise-calm-ant-218.mypinata.cloud/ipfs${item.substring(6)}?pinataGatewayToken=58xMykhdv5Kt3vFsSwUoiKaamt03r1kGnZp9dc3nuU62URBpVBJGq0kFWIxDo4vb&_gl=1*1vorjfi*_ga*MTc4MDI5NDc4My4xNzAwMDczMjUz*_ga_5RMPXG14TE*MTcwMDA3MzI1My4xLjEuMTcwMDA3NTk4Ni42MC4wLjA.`}
            key={i}
            target="_blank"
          >
            <img className="h-60 w-60 my-10 rounded-0"
              src={`https://turquoise-calm-ant-218.mypinata.cloud/ipfs${item.substring(6)}?pinataGatewayToken=58xMykhdv5Kt3vFsSwUoiKaamt03r1kGnZp9dc3nuU62URBpVBJGq0kFWIxDo4vb&_gl=1*1vorjfi*_ga*MTc4MDI5NDc4My4xNzAwMDczMjUz*_ga_5RMPXG14TE*MTcwMDA3MzI1My4xLjEuMTcwMDA3NTk4Ni42MC4wLjA.
`}
              alt="img" />

          </a>
        );
      });

      setData(images);
    } else {
      alert("No file to display");
    }
  };

  return (
    <div className="container pt-4 ">
      <div className='d-flex justify-around flex-wrap'>{data}</div>
      {console.log("data", data)}
      <button
        className="btn btn-success block  m-auto "
        style={{ backgroundColor: "green" }}
        onClick={getData}
      >
        Show Documents
      </button>
    </div>
  );
};

export default DisplayFile;
