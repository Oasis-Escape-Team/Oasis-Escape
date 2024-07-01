import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Allaccod.css";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Allaccomod = () => {
  const [accos, setAccos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7420/api/disaccomod/allaccomodations",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setAccos(response.data);
      } catch (error) {
        console.error(
          "Error fetching accomodations:",
          error.response || error.message || error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAccos();
  }, []);

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  return (
    <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="cards-flex">
            {chunkArray(accos, 1).map((chunk, index) => (
              <div key={index}>
                {chunk.map((acco) => (
                  <div className="card-box" as={Link} to={`/booking/${acco._id}`} key={acco._id}>
                    {acco.image && (
                      <Link to={`/booking/${acco._id}`} ><img
                        src={require(`../../uploads/${acco.image}`)}
                        className="card-img"
                        alt="Accommodation"
                        height={"250px"}
                      /></Link>
                    )}
                    <div className="card-info-flex">
                      <h5 className="card-title">{acco.propertyName}</h5>
                      <div className="card-rating">
                        <StarRateRoundedIcon/>
                        <p>4.8</p>
                      </div>
                    </div>


                      <p style={{ margin: 0, color: "var(--font-grey)" }}>
                        Beach and sea views
                      </p>
                      <p style={{ margin: 0, color: "var(--font-grey)" }}>
                        19-25 May
                      </p>
                      <p style={{ margin: 0, color: "var(--font-grey)" }}>
                        <span style={{ fontWeight: "600" }}>₹{acco.price}</span>{" "}
                        night
                      </p>
                      {/* <Link className="btn btn-primary" to={`/booking/${acco._id}`} style={{ backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>Book Now</Link> */}
                    </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default Allaccomod;
