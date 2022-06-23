/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import Page from "../../components/Page";
import HomeAppBar from "./HomeAppBar";
import JobElement from "./JobElement";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);

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
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <HomeAppBar onAfterSubmit={getJobs}/>
      <Page>
        {jobs?.map((job) => (
          <JobElement key={job.id} {...job} onChange={getJobs} />
        ))}
      </Page>
    </>
  );
}
