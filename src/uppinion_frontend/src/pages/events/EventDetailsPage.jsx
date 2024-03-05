import { Box, Card, Avatar, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SuggestionCard from "../../components/SuggestionCard";
import EventDetailsCard from "../../components/EventDetailsCard";
import LabeledDivider from "../../components/LabeledDivider";
import { UserContext } from "../../providers/UserProvider";
import { useEvent } from "../../hooks/events/useEvent";
import MySuggestionCard from "../../components/MySuggestionCard";
import AddSuggestionCard from "../../components/AddSuggestionCard";
import EventChat from "../../components/EventChat";
import Loading from "../../components/Loading";

export default function EventDetailsPage({}) {
  const currentUser = useContext(UserContext);
  const { eventId } = useParams();
  const {
    suggestions,
    mySuggestion,
    categorizedSuggestions,
    event,
    loading,
    error,
  } = useEvent(eventId, currentUser?.userId);

  const [suggestionType, setSuggestionType] = useState("venue");
  const [displayedSuggestions, setDisplayedSuggestions] = useState([]);
  const [displayedTopSuggestions, setDisplayedTopSuggestions] = useState([]);
  const [topSuggestions, setTopSuggestions] = useState({});
  const [openChat, setOpenChat] = useState(false);

  const handleSetSuggestion = (type) => {
    setSuggestionType(type);
  };

  useEffect(() => {
    let items = [];
    items = suggestions.filter(
      (suggestion) =>
        suggestion.type.toLowerCase() === suggestionType.toLowerCase()
    );

    setDisplayedSuggestions(items);
  }, [suggestionType, suggestions]);

  useEffect(() => {
    let typesArr = ["venue", "theme", "program", "others"];

    typesArr.map((type) => {
      if (categorizedSuggestions[type]?.length > 0) {
        categorizedSuggestions[type].sort(
          (a, b) => b.votes.length - a.votes.length
        );

        categorizedSuggestions[type].slice(0, 10);
      }
    });

    setTopSuggestions(categorizedSuggestions);
  }, [categorizedSuggestions]);

  useEffect(() => {
    setDisplayedTopSuggestions(topSuggestions[suggestionType.toLowerCase()]);
  }, [suggestionType, topSuggestions]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box component="div" sx={{ display: "flex", gap: "0", mb: "7rem" }}>
        <Box component="div" sx={{ width: { xs: "100%", lg: "100%" } }}>
          <EventDetailsCard
            name={event.name}
            description={event.description}
            image={event.image}
            date={event.date}
            status={event.status}
            handleSetSuggestion={handleSetSuggestion}
            currentType={suggestionType}
          />

          <AddSuggestionCard eventStatus={event.status} />

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
            {displayedTopSuggestions?.length > 0 && (
              <LabeledDivider label="Top Suggestions" />
            )}

            {displayedTopSuggestions?.map((suggestion) => (
              <SuggestionCard
                key={Math.random()}
                name={suggestion.name}
                description={suggestion.description}
                type={suggestion.type}
                votes={suggestion.votes.length}
                suggestionId={suggestion.suggestionId}
                suggestedBy={suggestion.user_id}
                voted={suggestion.voted}
                eventStatus={event.status}
              />
            ))}

            {mySuggestion.length > 0 && (
              <LabeledDivider
                label="My Suggestions"
                withDivider={!displayedTopSuggestions?.length === 0}
              />
            )}

            {mySuggestion.length > 0 &&
              mySuggestion.map((suggestion) => (
                <MySuggestionCard
                  key={Math.random()}
                  name={suggestion.name}
                  description={suggestion.description}
                  type={suggestion.type}
                  votes={suggestion.votes.length}
                  suggestionId={suggestion.suggestionId}
                  voted={suggestion.voted}
                  eventStatus={event.status}
                />
              ))}

            {displayedSuggestions.length > 0 && (
              <LabeledDivider
                label={`${displayedSuggestions.length} ${
                  displayedSuggestions.length > 1 ? "Suggestions" : "Suggestion"
                }`}
              />
            )}

            {displayedSuggestions.map((suggestion) => (
              <SuggestionCard
                key={Math.random()}
                name={suggestion.name}
                description={suggestion.description}
                type={suggestion.type}
                votes={suggestion.votes.length}
                suggestionId={suggestion.suggestionId}
                suggestedBy={suggestion.user_id}
                voted={suggestion.voted}
                eventStatus={event.status}
              />
            ))}
          </Box>
        </Box>

        <Avatar
          src={event.image}
          sx={{
            width: "50px",
            height: "50px",
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            display: openChat ? "none" : "flex",
          }}
          onClick={() => setOpenChat(true)}
        />
        <EventChat
          open={openChat}
          handleClose={() => setOpenChat(false)}
          image={event.image}
        />
        {/* <Box
          component="div"
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            width: "25%"
          }}
        >
          <Card
            variant="outlined"
            sx={{
              position: "sticky",
              overflow: "auto",
              top: "5rem",
              borderRadius: 0,
              width: "100%",
              height: "92dvh",
            }}
          >
            <EventChat />
          </Card>
        </Box> */}
      </Box>
    </>
  );
}
