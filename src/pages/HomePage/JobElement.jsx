import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DeleteDialog from "../../components/DeleteDialog";
import JobElementEdit from "./JobElementEdit";

export default function JobElement({
  id,
  title,
  description,
  price,
  onChange,
  customFields,
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const openEdit = () => setIsEditOpen(true);

  const clickToDelete = async () => {
    await fetch(`https://tms-js-pro-back-end.herokuapp.com/api/jobs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.token}`,
      },
    });
    onChange();
  };

  const [isDeleteConfirmDialogOpen, setIsDeleteConfirmDialogOpen] =
    useState(false); 
  const DeleteConfirmOpen = () => setIsDeleteConfirmDialogOpen(true);
  const DeleteConfirmClose = () => setIsDeleteConfirmDialogOpen(false);

  return (
    <Paper sx={{ p: 2, width: 700, m: "30px auto", bgcolor: "primary.light" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="column">
          <Typography color="primary.main" sx={{ fontSize: "25px" }}>
            {title}
          </Typography>
          <Typography color="secondary.light" sx={{ fontSize: "18px" }}>
            {description}
          </Typography>
          <Typography color="secondary.main" sx={{ fontSize: "12px", mt: 1 }}>
            Опыт работы - {customFields?.experience}
          </Typography>
        </Stack>
        <Stack sx={{ width: "100px" }}>
          <Typography color="secondary.light" sx={{ fontSize: "15px" }}>
            Оплата: <br />
            {price} BYN
          </Typography>
          <Button
            sx={{ mt: 2 }}
            type="button"
            variant="outlined"
            size="small"
            onClick={DeleteConfirmOpen}
          >
            УДАЛИТЬ
          </Button>
          <Button
            sx={{ mt: 1 }}
            type="button"
            variant="outlined"
            size="small"
            onClick={openEdit}
          >
            ИЗМЕНИТЬ
          </Button>
        </Stack>
      </Container>
      <JobElementEdit
        id={id}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onAfterSubmit={onChange}
      />
      <DeleteDialog
        title="Желаете удалить?"
        text="Вы уверены? Отменить это действие будет невозможно..."
        open={isDeleteConfirmDialogOpen}
        onConfirm={clickToDelete}
        onClose={DeleteConfirmClose}
      />
    </Paper>
  );
}
