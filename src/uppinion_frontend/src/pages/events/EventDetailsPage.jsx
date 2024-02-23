import SuggestionCard from "../../components/SuggestionCard";
import EventDetailsCard from "../../components/EventDetailsCard";
import { Box } from "@mui/material";
import LabeledDivider from "../../components/LabeledDivider";

const suggestions = [
  {
    name: "Blockchain Summit",
    type: "Program",
    votes: 47,
    description:
      "A two-day conference bringing together blockchain experts, developers, and enthusiasts to discuss the latest trends, innovations, and challenges in the blockchain space.",
  },
  {
    name: "Crypto Hackathon",
    type: "Program",
    votes: 24,
    description:
      "A weekend-long event where teams compete to develop and present innovative blockchain-based solutions to real-world problems. Prizes awarded for the most promising projects.",
  },
  {
    name: "Decentralized Finance (DeFi) Workshop",
    type: "Program",
    votes: 29,
    description:
      "Join us for an interactive workshop exploring the world of decentralized finance (DeFi). Learn about lending, borrowing, and trading cryptocurrencies without relying on traditional financial institutions.",
  },
  {
    name: "Blockchain for Social Impact Forum",
    type: "Program",
    votes: 14,
    description:
      "Discover how blockchain technology is being used to address social and environmental challenges around the world. Hear from experts leading projects in areas such as supply chain transparency, identity management, and financial inclusion.",
  },
  {
    name: "NFT Art Exhibition",
    type: "Program",
    votes: 8,
    description:
      "Experience the intersection of blockchain technology and art at our NFT art exhibition. View and purchase digital artwork authenticated on the blockchain, and learn about the growing trend of non-fungible tokens (NFTs).",
  },
  {
    name: "Blockchain Developer Bootcamp",
    type: "Program",
    votes: 31,
    description:
      "Accelerate your career in blockchain development with our intensive bootcamp. Gain hands-on experience building decentralized applications (dApps) and smart contracts on popular blockchain platforms.",
  },
  {
    name: "Blockchain Business Networking Mixer",
    type: "Program",
    votes: 38,
    description:
      "Connect with fellow entrepreneurs, investors, and industry professionals at our blockchain business networking mixer. Build valuable relationships and explore collaboration opportunities in the rapidly evolving blockchain ecosystem.",
  },
  {
    name: "Blockchain and Gaming Symposium",
    type: "Program",
    votes: 43,
    description:
      "Explore the intersection of blockchain technology and the gaming industry at our symposium. Learn how blockchain is revolutionizing in-game economies, digital asset ownership, and player experiences.",
  },
  {
    name: "Blockchain Governance Forum",
    type: "Program",
    votes: 10,
    description:
      "Join policymakers, regulators, and blockchain experts for a discussion on governance frameworks for blockchain networks. Explore topics such as consensus mechanisms, tokenomics, and regulatory compliance.",
  },
  {
    name: "Blockchain Investment Summit",
    type: "Program",
    votes: 7,
    description:
      "Gain insights into blockchain investment opportunities at our summit. Hear from venture capitalists, angel investors, and startup founders on strategies for navigating the dynamic blockchain investment landscape.",
  },
];

export default function EventDetailsPage({}) {
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", gap: "0.75rem", mx: { lg: "5rem"} }}
    >
      <EventDetailsCard />

      <LabeledDivider label="Top Suggestions" />

      {suggestions.map((suggestion) => (
        <SuggestionCard
          key={Math.random()}
          name={suggestion.name}
          description={suggestion.description}
          type={suggestion.type}
          votes={suggestion.votes}
        />
      ))}
    </Box>
  );
}
