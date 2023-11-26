import { useAuth0 } from "@auth0/auth0-react";
// mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const LoginDialog = ({ open, setOpen }) => {
  const { loginWithRedirect } = useAuth0();

  const handleAgree = () => {
    loginWithRedirect();
  };

  const handleDisagree = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleDisagree}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"You are not logged"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        If you want to comment on this project, you have to log in before.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree}>Disagree</Button>
        <Button onClick={handleAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
