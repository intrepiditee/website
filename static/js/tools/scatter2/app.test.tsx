/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React, { useEffect } from "react";
import Cheerio from "cheerio";
import { when } from "jest-when";
import axios from "axios";
import { App } from "./app";
import { Context, useContextStore } from "./context";

import hierarchy from "../../../data/hierarchy_top.json";
import { waitFor } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

function TestApp(): JSX.Element {
  const context = useContextStore();
  useEffect(() => {
    context.place.setEnclosingPlace({ name: "Delaware", dcid: "geoId/10" });
  }, []);
  return (
    <Context.Provider value={context}>
      <App />
    </Context.Provider>
  );
}

function mockAxios(): () => void {
  const get = axios.get;
  axios.get = jest.fn();

  // Counties in Delaware
  when(axios.get)
    .calledWith(`/api/place/places-in?dcids=geoId/10&placeType=County`)
    .mockResolvedValue({
      data: { "geoId/10": ["geoId/10001", "geoId/10003", "geoId/10005"] },
    });

  // Names of the counties
  when(axios.get)
    .calledWith(
      "/api/place/name?dcid=geoId/10001&dcid=geoId/10003&dcid=geoId/10005"
    )
    .mockResolvedValue({
      data: {
        "geoId/10001": "Kent County",
        "geoId/10003": "New Castle County",
        "geoId/10005": "Sussex County",
      },
    });

  const data = {
    Count_Person: {
      "geoId/10001": 180786,
      "geoId/10003": 558753,
      "geoId/10005": 234225,
    },
    Count_Person_Employed: {
      "geoId/10001": 76726,
      "geoId/10003": 276517,
      "geoId/10005": 104845,
    },
    Count_Establishment: {
      "geoId/10001": 3422,
      "geoId/10003": 16056,
      "geoId/10005": 5601,
    },
    Count_HousingUnit: {
      "geoId/10001": 70576,
      "geoId/10003": 222146,
      "geoId/10005": 135529,
    },
  };

  for (const dcid of ["geoId/10001", "geoId/10003", "geoId/10005"]) {
    // Available statvars
    when(axios.get)
      .calledWith(`/api/place/statsvars/${dcid}`)
      .mockResolvedValue({
        data: [
          "Count_Person_Employed",
          "Count_Establishment",
          "Count_HousingUnit",
        ],
      });

    for (const statVar in data) {
      when(axios.get)
        .calledWith(`/api/stats/value?place=${dcid}&stat_var=${statVar}`)
        .mockResolvedValue({
          data: { value: data[statVar][dcid] },
        });
    }
  }

  // Statvar menu
  when(axios.get)
    .calledWith("../../data/hierarchy_statsvar.json")
    .mockResolvedValue({ data: hierarchy });

  return () => (axios.get = get);
}

function expectCircles(n: number, app: Enzyme.ReactWrapper): void {
  const $ = Cheerio.load(app.html());
  expect($("circle").length).toEqual(n);
}

function expectStat(
  xMean: number,
  yMean: number,
  xStd: number,
  yStd: number,
  app: Enzyme.ReactWrapper
): void {
  const text = app.text();
  expect(text).toContain(`X Mean: ${xMean}`);
  expect(text).toContain(`Y Mean: ${yMean}`);
  expect(text).toContain(`X Standard Deviation: ${xStd}`);
  expect(text).toContain(`Y Standard Deviation: ${yStd}`);
}

test("all functionalities", async (done) => {
  const unmock = mockAxios();
  const app = mount(<TestApp />);

  // Expand these verticals
  app.find("#Demographics a").simulate("click");
  app.find("#Employment a").simulate("click");
  app.find("#Economics a").simulate("click");
  await waitFor(() => expect(app.text()).toContain("Population Density"));

  // Select county as child place type
  app
    .find("#enclosed-place-type")
    .at(0)
    .simulate("change", { target: { value: "County" } });

  // Population density should be filtered out
  await waitFor(() => expect(app.text()).not.toContain("Population Density"));

  // Choose employed for x and establishments for y
  app.find(`[id="Employed"] button`).simulate("click");
  app.find(`[id="Number of Establishments"] button`).simulate("click");

  await waitFor(() => {
    // Title
    expect(app.text()).toContain("Number Of Establishments vs Employed");
    // Stats
    expectStat(152696, 8359.667, 108149.894, 6753.678, app);
    // Points
    expectCircles(3, app);
  });

  // Swap axes
  app.find("#swap-axes").at(0).simulate("click");
  const expectTitle = (title: string) => expect(app.text()).toContain(title);

  expectTitle("Employed vs Number Of Establishments");
  expectStat(8359.667, 152696, 6753.678, 108149.894, app);
  expectCircles(3, app);

  // Per capita
  app
    .find("#per-capita-x")
    .at(0)
    .simulate("change", { target: { checked: true } });
  app
    .find("#per-capita-y")
    .at(0)
    .simulate("change", { target: { checked: true } });
  expectTitle("Employed Per Capita vs Number Of Establishments Per Capita");
  expectStat(0.024, 0.456, 0.005, 0.036, app);
  expectCircles(3, app);

  // Log
  app
    .find("#log-x")
    .at(0)
    .simulate("change", { target: { checked: true } });
  app
    .find("#log-y")
    .at(0)
    .simulate("change", { target: { checked: true } });
  expectCircles(3, app);

  // Choose a third statvar
  app.find("#Housing a").simulate("click");
  app.find(`[id="Housing Units"] button`).simulate("click");
  await waitFor(() =>
    expect(app.find(".modal-title").text()).toContain(
      "Select two of the three statistical variables"
    )
  );

  // Uncheck establishments and check housing
  app
    .find(`input[name="x"]`)
    .simulate("change", { target: { name: "x", checked: false } });
  app
    .find(`input[name="third"]`)
    .simulate("change", { target: { name: "third", checked: true } });
  app.find(".modal-footer button").simulate("click");
  await waitFor(() => {
    expect(app.text()).toContain(
      "Housing Units Per Capita vs Employed Per Capita"
    );
    expectStat(0.456, 0.456, 0.036, 0.107, app);
    expectCircles(3, app);
  });

  unmock();
  done();
});
