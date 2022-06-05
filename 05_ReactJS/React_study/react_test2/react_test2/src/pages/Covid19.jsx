import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCovid19 } from "../slices/Covid19Slice";

import { useQueryString } from "../hooks/useQueryString";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";
import MenuLink from "../components/MenuLink";
import dayjs from "dayjs";
import { useEffect } from "react";

const Covid19 = memo(() => {
  const { data, loading, error } = useSelector((state) => state.covid19);
  const dispatch = useDispatch();
  const { date_gte, date_lte } = useQueryString();

  React.useEffect(() => {
    dispatch(
      getCovid19({
        gte: date_gte + "T00:00:00Z",
        lte: date_lte + "T00:00:00Z",
      })
    );
  }, [dispatch, date_gte, date_lte]);

  const [chartData, setChartData] = React.useState([]);
  const mountedRef = React.useRef(false);
  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
      const newData = {
        date: [],
      };
      data.forEach((v, i) => {
        newData.date.push(dayjs(v.date).format("YYYY-MM-DD"));
      });
      setChartData(newData);
    }, []);
  }, [data]);

  return (
    <div>
      <nav>
        <MenuLink
          to={`/covid/confirmed?date_gte=${date_gte}&date_lte=${date_lte}`}
        >
          일일확진자
        </MenuLink>
        <MenuLink
          to={`/covid/confirmed_acc?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          누적확진자
        </MenuLink>
        <MenuLink
          to={`/covid/active?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          격리환자
        </MenuLink>
        <MenuLink
          to={`/covid/released?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          격리해제
        </MenuLink>
        <MenuLink
          to={`/covid/released_acc?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          누적격리해제
        </MenuLink>
        <MenuLink
          to={`/covid/death?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          사망자
        </MenuLink>
        <MenuLink
          to={`/covid/death_acc?date_gte=${date_gte}&date_lte=${date_lte} `}
        >
          누적사망자
        </MenuLink>
      </nav>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <Routes>
            <Route
              path="/:category"
              element={<LineChartView chartData={chartData} />}
            />
          </Routes>
        )
      )}
    </div>
  );
});

export default Covid19;
