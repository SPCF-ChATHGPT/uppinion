import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SuggestionCard from "../../components/SuggestionCard";
import EventDetailsCard from "../../components/EventDetailsCard";
import LabeledDivider from "../../components/LabeledDivider";
import { UserContext } from "../../providers/UserProvider";
import { useEvent } from "../../hooks/events/useEvent";
import MySuggestionCard from "../../components/MySuggestionCard";
import AddSuggestionCard from "../../components/AddSuggestionCard";

export default function EventDetailsPage({}) {
  const [suggestionType, setSuggestionType] = useState("venue");
  const [displayedSuggestions, setDisplayedSuggestions] = useState([]);
  const currentUser = useContext(UserContext);
  const { eventId } = useParams();
  const { suggestions, mySuggestion, event, loading, error } = useEvent(
    eventId,
    currentUser?.userId
  );

  const handleSetSuggestion = (type) => {
    setSuggestionType(type);
  };

  useEffect(() => {
    if (suggestionType) {
      let items = [];
      items = suggestions.filter(
        (suggestion) =>
          suggestion.type.toLowerCase() === suggestionType.toLowerCase()
      );

      setDisplayedSuggestions(items);
    }
  }, [suggestionType]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <EventDetailsCard
        name={event.name}
        description={event.description}
        image={event.image}
        date={event.date}
        status={event.status}
        handleSetSuggestion={handleSetSuggestion}
        currentType={suggestionType}
      />

      <AddSuggestionCard eventStatus={event.status}/>

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
        {mySuggestion.length > 0 && <LabeledDivider label="My Suggestions" />}

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
            />
          ))}

        {displayedSuggestions.length > 0 && (
          <LabeledDivider
            label={`${displayedSuggestions.length} ${
              displayedSuggestions.length > 1 ? "Suggestions" : "Suggestion"
            }`}
            withDivider={true}
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
            voted={suggestion.voted}
          />
        ))}
      </Box>
    </>
  );
}
