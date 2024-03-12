import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import { YMaps, Map } from "@pbe/react-yandex-maps";

const App = () => {
  axios
    .get("https://geo.ipify.org/service/account-balance?apiKey=8.8.8.8")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
      <div className="header_1">
        <h1>IP Address Tracker</h1>
        <div className="header_2">
          <input type="text" />
          <FaChevronRight className="icon" />
        </div>
      </div>
      <div className="header_3">
        <div className="header_4">
          <div>
            <p className="header_5">IP Address</p>
            <h1 className="header_6">192.212.174.101</h1>
          </div>
          <div>
            <p className="header_5">Location</p>
            <h1 className="header_6">Brooklyn, NY 10001</h1>
          </div>
          <div>
            <p className="header_5">Timezone</p>
            <h1 className="header_6">UTC -05:00</h1>
          </div>
          <div>
            <p className="header_5">ISP</p>
            <h1 className="header_6">SpaceX Starlink</h1>
          </div>
        </div>
        <div className="ikki">
          <YMaps>
            <div className="maps">
              <Map
                width={""}
                height={430}
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              />
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default App;
