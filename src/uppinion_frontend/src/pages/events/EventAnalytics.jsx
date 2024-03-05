import {
  Box,
  Card,
  Typography,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";

import LabeledDivider from "../../components/LabeledDivider";
import colors from "../../utils/colors";

export default function EventAnalytics({}) {
  const typeButtons = ["Venue", "Theme", "Program", "Others"];

  const chartSetting = {
    yAxis: [],
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset = [
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 1",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 2",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 3",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 4",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 5",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 6",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 7",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 8",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 9",
    },
    {
      male: Math.floor(Math.random() * 100),
      female: Math.floor(Math.random() * 100),
      month: "Top 10",
    },
  ];

  const data = [
    { label: "Group A", value: 400 },
    { label: "Group B", value: 300 },
  ];

  const valueFormatter = (value) => `${value} votes`;
  return (
    <Box component="div" sx={{ mb: "7rem" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          mx: { xs: "1rem", lg: "5rem" },
          mt: "1rem",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            gap: "1rem",
            borderRadius: 3,
            px: "1rem",
            py: "0.5rem",
          }}
        >
          {typeButtons.map((btn) => (
            <Button
              key={Math.random()}
              size="small"
              variant={btn === "Theme" ? "contained" : "text"}
              color="violet"
              sx={{ fontWeight: btn === "Theme" ? "bold" : null }}
            >
              {btn}
            </Button>
          ))}
        </Card>

        <Card variant="outlined" sx={{ p: "1rem", borderRadius: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", mb: "1rem" }}>
            Theme Suggestions
          </Typography>
          <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "male", label: "Male Votes", valueFormatter },
              { dataKey: "female", label: "Female Votes", valueFormatter },
            ]}
            {...chartSetting}
          />
        </Card>

        <Box component="div" sx={{ display: "flex", gap: 1 }}>
          <Card
            variant="outlined"
            sx={{
              p: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              247
            </Typography>
            <Typography variant="body2">Total suggestions</Typography>
          </Card>

          <Card
            variant="outlined"
            sx={{
              p: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              134/151
            </Typography>
            <Typography variant="body2">Members who voted</Typography>
          </Card>
        </Box>

        <LabeledDivider
          withDivider={true}
          label="Top Theme Suggestions"
        ></LabeledDivider>

        <Card elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              px: { xs: "0rem", lg: "1rem" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                p: "1rem",
                width: "4rem",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.primary,
                borderRadius: 3,
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: colors.primary }}
              >
                36
              </p>
              <p className="text-xs" style={{ color: colors.primary }}>
                VOTES
              </p>
            </Card>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Cathlyn's Suggestion
              </Typography>
              <Typography variant="body2">Type: THEME</Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto maxime tempora cupiditate cum nesciunt quam deserunt harum
              exercitationem odit, natus iste quos quod commodi quas.
            </Typography>
          </CardContent>
          <Divider />
        </Card>

        <Card elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              px: { xs: "0rem", lg: "1rem" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                p: "1rem",
                width: "4rem",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.primary,
                borderRadius: 3,
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: colors.primary }}
              >
                27
              </p>
              <p className="text-xs" style={{ color: colors.primary }}>
                VOTES
              </p>
            </Card>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Mel's Suggestion
              </Typography>
              <Typography variant="body2">Type: THEME</Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto maxime tempora cupiditate cum nesciunt quam deserunt harum
              exercitationem odit, natus iste quos quod commodi quas.
            </Typography>
          </CardContent>
          <Divider />
        </Card>

        <Card elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              px: { xs: "0rem", lg: "1rem" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                p: "1rem",
                width: "4rem",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.primary,
                borderRadius: 3,
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: colors.primary }}
              >
                57
              </p>
              <p className="text-xs" style={{ color: colors.primary }}>
                VOTES
              </p>
            </Card>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Alexander's Suggestion
              </Typography>
              <Typography variant="body2">Type: THEME</Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto maxime tempora cupiditate cum nesciunt quam deserunt harum
              exercitationem odit, natus iste quos quod commodi quas.
            </Typography>
          </CardContent>
          <Divider />
        </Card>

        <Card elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              px: { xs: "0rem", lg: "1rem" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                p: "1rem",
                width: "4rem",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.primary,
                borderRadius: 3,
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: colors.primary }}
              >
                53
              </p>
              <p className="text-xs" style={{ color: colors.primary }}>
                VOTES
              </p>
            </Card>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Edmar's Suggestion
              </Typography>
              <Typography variant="body2">Type: THEME</Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto maxime tempora cupiditate cum nesciunt quam deserunt harum
              exercitationem odit, natus iste quos quod commodi quas.
            </Typography>
          </CardContent>
          <Divider />
        </Card>

        <Card elevation={0}>
          <CardContent
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              px: { xs: "0rem", lg: "1rem" },
            }}
          >
            <Card
              variant="outlined"
              sx={{
                p: "1rem",
                width: "4rem",
                height: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.primary,
                borderRadius: 3,
              }}
            >
              <p
                className="text-lg font-bold"
                style={{ color: colors.primary }}
              >
                47
              </p>
              <p className="text-xs" style={{ color: colors.primary }}>
                VOTES
              </p>
            </Card>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Prince's Suggestion
              </Typography>
              <Typography variant="body2">Type: THEME</Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{ py: "0", px: { xs: "0rem", lg: "1rem" }, mb: "1rem" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iusto maxime tempora cupiditate cum nesciunt quam deserunt harum
              exercitationem odit, natus iste quos quod commodi quas.
            </Typography>
          </CardContent>
          <Divider />
        </Card>
      </Box>
    </Box>
  );
}
