"use client";

import { usePlayer } from "@/components/PlayerBar/PlayerContext";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { FC, PropsWithChildren, useMemo } from "react";
import Recording from "./Recording";

const Recordings: FC<{ programId: Id<"programs"> }> = ({ programId }) => {
  const recordings = useQuery(api.recordings.list, {
    id: programId,
	status: "published",
  });
  const { play } = usePlayer();

  const sorted = useMemo(
    () => recordings?.slice().sort((a, b) => b._creationTime - a._creationTime),
    [recordings]
  );

  if (!sorted) return <Container>Загрузка…</Container>;
  if (sorted.length === 0) return <Container>Нет записей</Container>;

  return (
    <Container>
      {sorted.map((rec) => (
        <Recording key={rec._id} rec={rec} play={play} />
      ))}
    </Container>
  );
};

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col items-start bg-stone-700/50 text-white rounded-xl p-4 w-full">
    {children}
  </div>
);

export default Recordings;
