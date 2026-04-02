import { useQuery } from "@tanstack/react-query";
import type { Article } from "../backend.d";
import { useActor } from "./useActor";

export function useGetArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetArticle(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Article>({
    queryKey: ["article", id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      return actor.getArticle(id);
    },
    enabled: !!actor && !isFetching,
  });
}
