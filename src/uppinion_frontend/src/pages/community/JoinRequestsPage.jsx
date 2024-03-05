import { Box } from "@mui/material";
import JoinRequestCard from "../../components/JoinRequestCard";
import LabeledDivider from "../../components/LabeledDivider";
import { useViewJoinRequests } from "../../hooks/communities/useViewJoinRequests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function JoinRequestsPage({}) {
  const { communityId } = useParams();
  const { joinRequests, error, loading } = useViewJoinRequests(communityId);
  const [requests, setRequests] = useState(joinRequests);

  useEffect(() => {
    if (joinRequests) {
      setRequests(joinRequests);
    }
  }, [joinRequests]);

  const handleUpdateRequestCards = (userId) => {
    let updatedRequests = [];
    requests.map((request) => {
      if (request.userId != userId) {
        updatedRequests.push(request);
      }
    });
    setRequests(updatedRequests);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        m: "1rem",
        mx: { lg: "5rem" },
      }}
    >
      <LabeledDivider label="Join Requests"></LabeledDivider>
      {requests.map((request) => (
        <JoinRequestCard
          key={Math.random()}
          request={request}
          handleUpdateRequestCards={handleUpdateRequestCards}
        />
      ))}
    </Box>
  );
}
