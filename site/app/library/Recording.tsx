import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

export default function Recording({
  rec,
  play,
}: {
  rec: {
    program: string;
  } & Doc<"recordings">;
  play: (props: { src: string; title: string }) => void;
}) {
  const url = useQuery(api.recordings.getAudioUrl, {
    id: rec._id,
  });
  if (!url) return null;
  return (
    <button
      key={rec._id}
      onClick={() => {
        play({
          title: `${rec.program} – ${rec.episodeTitle}`,
          src: url,
        });
      }}
      className="text-left py-1 hover:underline"
    >
      {rec.episodeTitle}
    </button>
  );
}
