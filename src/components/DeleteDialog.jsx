import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteDialog({
  title,
  text,
  onClose,
  onConfirm,
  ...otherProps
}) {
  return (
    <Dialog {...{ onClose, ...otherProps }}>
      <DialogTitle
        sx={{ fontSize: "25px", color: "secondary.main", textAlign: "center" }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: "20px",
            color: "secondary.light",
            textAlign: "center",
          }}
        >
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ m: "30px auto" }}>
        <Button onClick={onClose}>ОТМЕНА</Button>
        <Button variant="contained" onClick={onConfirm}>
          ПОДТВЕРДИТЬ
        </Button>
      </DialogActions>
    </Dialog>
  );
}
