import { useState } from "react";
// icons
import deleteIcon from "../../../../assets/icons/x-letter.svg";
// mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteButton = ({ project }) => {
  const server = import.meta.env.VITE_SERVER;
  const [open, setOpen] = useState(false);

  // functions
  const deleteProject = async (project) => {
    try {
      console.log("deleteProject");
      console.log(`${server}/api/projects?project_id=${project.project_id}`);
      const data = await fetch(
        `${server}/api/projects?project_id=${project.project_id}`,
        {
          method: "DELETE",
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    deleteProject(project);
    setOpen(false);
    window.location.reload();
  };

  const handleDisagree = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <img src={deleteIcon} alt="" />
      </Button>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you confirm that you want to delete this project?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will permanently delete "Form web" project.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
