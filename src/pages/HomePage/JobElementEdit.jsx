/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useHomePageContext } from "./HomePageContext";

export default function JobElementEdit({ id, onClose, ...otherProps }) {
  const { getJobs } = useHomePageContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [experience, setExperience] = useState("");

  const loadJob = () => {
    fetch(`https://tms-js-pro-back-end.herokuapp.com/api/jobs/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setExperience(data.customFields.experience);
      });
  };

  useEffect(() => {
    if (!id) return;
    loadJob();
  }, []);

  const editOrAddJob = async () => {
    const idOrNot = id ? `/${id}` : "";
    await fetch(
      `https://tms-js-pro-back-end.herokuapp.com/api/jobs${idOrNot}`,
      {
        method: id ? "PUT" : "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.token}`,
        },
        body: JSON.stringify({
          title,
          description,
          price,
          customFields: { experience },
        }),
      }
    );
    getJobs();
    onClose();
  };

  return (
    <Dialog {...{ onClose, ...otherProps }}>
      <DialogTitle
        sx={{ fontSize: "25px", color: "secondary.main", textAlign: "center" }}
      >
        {id
          ? "Желаете внести изменение?"
          : "Желаете добавить работу? Тогда заполните форму ниже!"}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <DialogContentText
          sx={{
            fontSize: "15px",
            color: "secondary.light",
          }}
        >
          Название работы:
        </DialogContentText>
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
        <DialogContentText
          sx={{
            fontSize: "15px",
            color: "secondary.light",
          }}
        >
          Описание работы:
        </DialogContentText>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DialogContentText
          sx={{
            fontSize: "15px",
            color: "secondary.light",
          }}
        >
          Заработная плата:
        </DialogContentText>
        <TextField value={price} onChange={(e) => setPrice(e.target.value)} />
        <DialogContentText
          sx={{
            fontSize: "15px",
            color: "secondary.light",
          }}
        >
          Опыт работы:
        </DialogContentText>
        <TextField
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ m: "30px auto" }}>
        <Button onClick={onClose}>ОТМЕНИТЬ</Button>
        <Button onClick={editOrAddJob} autoFocus variant="contained">
          {id ? "Изменить" : "Добавить"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
