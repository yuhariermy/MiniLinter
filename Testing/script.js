import { sleep } from "k6";
import http from "k6/http";

export const options = {
  ext: {
    loadimpact: {
      distribution: {
        "amazon:sg:singapore": {
          loadZone: "amazon:sg:singapore",
          percent: 100,
        },
      },
      apm: [],
    },
  },
  thresholds: {},
  stages: [
    { target: 50, duration: "10s" },
    { target: 20, duration: "5s" },
  ],
  //   scenarios: {
  //     Scenario_1: {
  //     //   executor: 'ramping-vus',
  //     //   gracefulStop: '30s',
  //       gracefulRampDown: '30s',
  //       exec: 'scenario_1',
  //     },
  //   },
};

export default function () {
  let response;

  // Tokped
  //   response = http.get(
  //     "https://www.tokopedia.com/fixcomart/tekiro-kunci-l-panjang-5-mm-hex-key-long?extParam=src%3Dmultiloc%26whid%3D0"
  //   );

  // KM
  response = http.get("https://kmspace.wika.co.id/");

  // Automatically added sleep
  sleep(1);
}
