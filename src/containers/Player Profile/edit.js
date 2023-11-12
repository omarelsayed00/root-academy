import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";

export default function MenuListComposition(props) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const onImageChange = (event) => {
    console.log("Edit image");
    console.log(URL.createObjectURL(event.target.files[0]));
    props.setImage(URL.createObjectURL(event.target.files[0]));
    setOpen(false);
  };

  const deleteImage = () => {
    props.setImage("/images/userIcon.png");
    setOpenDialog(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{
            width: "10px",
            padding: "0px 0px",
            margin: "0px 0px",
            justifyContent: "right",
          }}
        >
          <Image src="/images/edit.svg" width={20} height={20} alt="" />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "right top",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <div>
                      <label htmlFor="file-input">
                        <MenuItem>رفع صورة</MenuItem>
                      </label>
                      {/* Hidden file input */}
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={onImageChange}
                        style={{ display: "none" }}
                      />
                    </div>

                    <MenuItem onClick={() => setOpenDialog(true)}>
                      حذف الصورة
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"هل انت متأكد من حذف الصورة؟ "}
          </DialogTitle>

          <DialogActions>
            <Button style={{ fontSize: "18px" }} onClick={deleteImage}>
              حذف
            </Button>
            <Button
              style={{ fontSize: "18px" }}
              onClick={() => setOpenDialog(false)}
              autoFocus
            >
              إلغاء
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Stack>
  );
}
