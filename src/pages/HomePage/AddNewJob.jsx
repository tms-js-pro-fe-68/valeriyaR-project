import { Button } from "@mui/material";
import { useState } from "react";
import JobElementEdit from "./JobElementEdit";

export default function AddNewJob() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  return (
    <>
      <Button type="button" variant="contained" onClick={open}>
        РАЗМЕСТИТЬ ЗАКАЗ
      </Button>

      <JobElementEdit
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
