import {
  Divider,
  Dialog,
  TextField,
  Box,
  Avatar,
  Typography,
  Card,
  CardHeader,
  Skeleton,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import colors from "../../utils/colors";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export default function CommentBox({
  open,
  handleClose,
  suggestionName,
  suggestionType,
}) {
  const currentUser = useContext(UserContext)

  return (
    <Box
      component="div"
      sx={{
        display: open ? "flex" : "none",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: { xs: "20rem", lg: "23rem" },
        bgcolor: colors.navBackground,
        borderRadius: "1rem",
      }}
    >
      <Dialog open={open} onClose={handleClose}>
        <Card
          elevation={0}
          sx={{
            bgcolor: colors.primary,
            width: "100%",
            zIndex: "100",
            borderRadius: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <CardHeader
            title={
              <>
                <p className="text-base text-white font-bold line-clamp-1">
                  {suggestionName}
                </p>
                <p className="text-xs text-white line-clamp-1">
                  Type: {suggestionType}
                </p>
              </>
            }
            disableTypography
            sx={{
              flexDirection: "row",
              alignItems: "center",
            }}
          />

          {/* <img src={} alt="" /> */}

          <IconButton
            onClick={handleClose}
            sx={{ color: "white", mt: "0.5rem" }}
          >
            <CloseIcon />
          </IconButton>
        </Card>

        <Box
          component="div"
          sx={{
            width: "100%",
            py: "1rem",
            height: "20rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            overflow: "auto",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Card
              variant="outlined"
              sx={{
                width: "60%",
                borderRadius: "0 10px 10px 10px",
                bgcolor: "transparent",
                p: "0.5rem",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur
              </Typography>
            </Card>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "0 10px 10px 10px",
                bgcolor: "transparent",
                p: "0.5rem",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                impedit, aliquam
              </Typography>
            </Card>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "10px 0 10px 10px",
                bgcolor: colors.primary,
                color: "white",
                p: "0.5rem",
                ml: "auto",
              }}
            >
              <Typography variant="body2">
                adipisicing elit. Nemo impedit, aliquam
              </Typography>
            </Card>
            <Avatar src={currentUser.profile_image} sx={{ width: "30px", height: "30px" }} />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "0 10px 10px 10px",
                bgcolor: "transparent",
                p: "0.5rem",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum consectetur adipisicing elit. Nemo impedit, aliquam
              </Typography>
            </Card>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "10px 0 10px 10px",
                bgcolor: colors.primary,
                color: "white",
                p: "0.5rem",
                ml: "auto",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam
              </Typography>
            </Card>
            <Avatar src={currentUser.profile_image} sx={{ width: "30px", height: "30px" }} />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "0 10px 10px 10px",
                bgcolor: "transparent",
                p: "0.5rem",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum dolor sit amet
              </Typography>
            </Card>
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "10px 0 10px 10px",
                bgcolor: colors.primary,
                color: "white",
                p: "0.5rem",
                ml: "auto",
              }}
            >
              <Typography variant="body2">Lorem ipsum</Typography>
            </Card>
            <Avatar src={currentUser.profile_image} sx={{ width: "30px", height: "30px" }} />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "flex-start",
              mx: "1rem",
            }}
          >
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <Card
              variant="outlined"
              sx={{
                maxWidth: "60%",
                borderRadius: "0 10px 10px 10px",
                bgcolor: "transparent",
                p: "0.5rem",
              }}
            >
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur elit. Nemo impedit
              </Typography>
            </Card>
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            width: "100%",
            borderRadius: "0.75rem",
            px: "1rem",
            pb: "1rem",
            pt: "0.5rem",
          }}
        >
          <TextField
            multiline
            maxRows="3"
            size="small"
            fullWidth
            placeholder="Type something..."
          ></TextField>
        </Box>
      </Dialog>
    </Box>
  );
}

// export default NewSuggestionDialog;
