/* eslint-disable arrow-body-style */
import { Box, CircularProgress } from "@mui/material";
import ReactPaginate from "react-paginate";
import Page from "../../components/Page";
import { useHomePageContext } from "./HomePageContext";
import JobElement from "./JobElement";

export default function JobList() {
  const { isLoading, filteredJobs, pageNum, setPageNum } = useHomePageContext();
  const jobPerPage = 3;
  const pagesVisit = pageNum * jobPerPage;
  const pageCount = Math.ceil(filteredJobs.length / jobPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNum(selected);
  };

  const displayJob = filteredJobs
    .slice(pagesVisit, pagesVisit + jobPerPage)
    .map((job) => {
      return <JobElement key={job.id} {...job} />;
    });

  return (
    <Page>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "200px" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {displayJob}
      <ReactPaginate
        previousLabel="Назад"
        nextLabel="Вперед"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="paginBttns"
        previousLinkClassName="prevBttn"
        nextLinkClassName="nextBttn"
      />
    </Page>
  );
}
