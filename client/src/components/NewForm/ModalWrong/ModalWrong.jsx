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

const ModalWrong = ({ openModalWrong, setOpenModalWrong }) => {

  const handleCloseModalWrong = () => {
    setOpenModalWrong(false);
  };
  return (
    <Modal
      open={openModalWrong}
      onClose={handleCloseModalWrong}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Something went wrong
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Try it again later.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalWrong;
