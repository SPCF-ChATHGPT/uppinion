import { Card, CardContent, Typography } from "@mui/material";
import colors from "../utils/colors";

export default function NoEvents({}) {
  return <Card variant="outlined">
    <CardContent sx={{textAlign: "center"}}>
      <Typography variant="h3" sx={{color: colors.primary, fontWeight: "bold", mb: "2rem"}}>Oops!</Typography>
      <Typography variant="body1">No event found. Let's start creating fun and exciting events together!</Typography>
    </CardContent>
  </Card>;
}
