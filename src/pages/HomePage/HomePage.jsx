/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import HomeAppBar from "./HomeAppBar";
import HomePageContextProvider from "./HomePageContext";
import JobList from "./JobList";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);

  const filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(value.toLowerCase());
  });

  const getJobs = async () => {
    await fetch("https://tms-js-pro-back-end.herokuapp.com/api/jobs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setJobs(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getJobs();
  }, []);

  return (
    <HomePageContextProvider
      context={{
        value,
        setValue,
        getJobs,
        isLoading,
        filteredJobs,
        pageNum,
        setPageNum,
      }}
    >
      <HomeAppBar />
      <JobList />
    </HomePageContextProvider>
  );
}
