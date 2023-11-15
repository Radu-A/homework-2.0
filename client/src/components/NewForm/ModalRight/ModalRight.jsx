import { useNavigate } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #2F4265",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const ModalRight = ({ openModalRight, setOpenModalRight }) => {
  const navigate = useNavigate();
  const handleCloseModalRight = () => {
    setOpenModalRight(false);
    navigate("/dashboard");
  };

  return (
    <Modal
      open={openModalRight}
      onClose={handleCloseModalRight}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Congratulations
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Project created successfully.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalRight;
