import {
  Box,
  Card,
  CardHeader,
  Avatar,
  Typography,
  Skeleton,
  TextField,
  Divider,
} from "@mui/material";
import colors from "../../utils/colors";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import LabeledDivider from "../../components/LabeledDivider";

export default function MessagesPage({}) {
  const currentUser = useContext(UserContext);

  const chatNames = [
    { name: "Cathlyn Lapid", initials: "CL", color: colors.primary },
    { name: "Alex Camaddo", initials: null, color: null },
    { name: "Mel Palana", initials: "MP", color: colors.primary },
    { name: "Charles Clemente", initials: null, color: colors.primary },
    { name: "Mae De Guzman", initials: "MD", color: null },
    { name: "John Mosing", initials: null, color: colors.primary },
    { name: "Mathew Cabana", initials: "MC", color: colors.primary },
    { name: "Prince Miranda", initials: null, color: null },
    { name: "Cathlyn Lapid", initials: "CL", color: colors.primary },
    { name: "Alex Camaddo", initials: "AC", color: colors.primary },
    { name: "Mel Palana", initials: null, color: null },
  ];

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        gap: "1rem",
        px: "1rem",
      }}
    >
      <Box
        component="div"
        sx={{ height: "90dvh", width: { xs: "100%", md: "75%" } }}
      >
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
            avatar={
              <>
                {currentUser ? (
                  currentUser?.profile_image ? (
                    <Avatar aria-label="profile" alt="avatar" />
                  ) : (
                    <Avatar />
                  )
                ) : (
                  <Skeleton variant="circular" width={40} height={40} />
                )}
              </>
            }
            title={
              <p className="text-sm text-white font-bold line-clamp-1">
                Uppinion CC
              </p>
            }
            disableTypography
            sx={{
              flexDirection: "row",
              alignItems: "center",
            }}
          />
        </Card>

        <Box
          component="div"
          sx={{
            width: "100%",
            py: "1rem",
            height: "77.5%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            overflow: "auto",
          }}
        >
          <Messages />
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
      </Box>

      <Box
        component="div"
        sx={{
          width: "25%",
          py: "1rem",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        <LabeledDivider label="Chats" />
        <TextField size="small" placeholder="Search..." sx={{mb: "1rem", mt: "0.5rem"}} />
        {chatNames.map((chat) => (
          <div>
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
                py: "0.5rem",
              }}
            >
              <Avatar sx={{ bgcolor: chat.color }}>{chat.initials}</Avatar>
              <Typography variant="body1">{chat.name}</Typography>
            </Box>
            <Divider />
          </div>
        ))}
      </Box>
    </Box>
  );
}

const Messages = () => {
  return (
    <>
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
          <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
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
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
            Lorem ipsum dolor sit amet consectetur elit.
          </Typography>
        </Card>
        <Avatar sx={{ width: "30px", height: "30px" }} />
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
    </>
  );
};
