import { Box } from "@mui/material";
import CommunityCard from "../../components/CommunityCard";
import LabeledDivider from "../../components/LabeledDivider";
import { useRef, useState, useCallback } from "react";
import { usePaginateCommunity } from "../../hooks/pagination/usePaginateCommunity";

export default function CommunitiesPage({}) {
  const [lastVisible, setLastVisible] = useState(null);
  const { communities, error } = usePaginateCommunity(lastVisible);

  const observer = useRef();
  const lastCommunityElementVisibleRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLastVisible(communities[communities.length - 1]);
        }
      });

      if (node) observer.current.observe(node);
    },
    [communities]
  );

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
      <LabeledDivider label="Communities"></LabeledDivider>
      {communities &&
        communities.map((community, index) => {
          if (communities.length === index + 1) {
            return (
              <div key={Math.random()} ref={lastCommunityElementVisibleRef}>
                <CommunityCard
                  name={community.name}
                  description={community.description}
                  image={community.image}
                />
              </div>
            );
          } else {
            return (
              <div key={Math.random()}>
                <CommunityCard
                  name={community.name}
                  description={community.description}
                  image={community.image}
                />
              </div>
            );
          }
        })}
    </Box>
  );
}
