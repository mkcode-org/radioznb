import { type FunctionReference, anyApi } from "convex/server";
import { type GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  auth: {
    isAuthenticated: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    loggedInUser: FunctionReference<"query", "public", any, any>;
    signIn: FunctionReference<
      "action",
      "public",
      {
        calledBy?: string;
        params?: any;
        provider?: string;
        refreshToken?: string;
        verifier?: string;
      },
      any
    >;
    signOut: FunctionReference<"action", "public", Record<string, never>, any>;
  };
  genres: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    create: FunctionReference<"mutation", "public", { name: string }, any>;
    remove: FunctionReference<"mutation", "public", { id: Id<"genres"> }, any>;
  };
  people: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    get: FunctionReference<"query", "public", { id: Id<"people"> }, any>;
    create: FunctionReference<
      "mutation",
      "public",
      { name: string; telegramAccount?: string },
      any
    >;
    update: FunctionReference<
      "mutation",
      "public",
      { id: Id<"people">; name: string; telegramAccount?: string },
      any
    >;
    remove: FunctionReference<"mutation", "public", { id: Id<"people"> }, any>;
  };
  programs: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    get: FunctionReference<"query", "public", { id: Id<"programs"> }, any>;
    create: FunctionReference<
      "mutation",
      "public",
      { description?: string; hostId?: Id<"people">; name: string },
      any
    >;
    update: FunctionReference<
      "mutation",
      "public",
      {
        description?: string;
        hostId?: Id<"people">;
        id: Id<"programs">;
        name: string;
      },
      any
    >;
    remove: FunctionReference<
      "mutation",
      "public",
      { id: Id<"programs"> },
      any
    >;
  };
  recordings: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    get: FunctionReference<"query", "public", { id: Id<"recordings"> }, any>;
    generateUploadUrl: FunctionReference<
      "mutation",
      "public",
      Record<string, never>,
      any
    >;
    create: FunctionReference<
      "mutation",
      "public",
      {
        airDate: string;
        audioFileId: Id<"_storage">;
        description?: string;
        duration?: number;
        episodeTitle: string;
        genreIds: Array<Id<"genres">>;
        guests: Array<Id<"people">>;
        hosts: Array<Id<"people">>;
        keywords?: string;
        programId: Id<"programs">;
        status: "draft" | "published" | "hidden";
        type: "live" | "podcast";
      },
      any
    >;
    update: FunctionReference<
      "mutation",
      "public",
      {
        airDate: string;
        audioFileId?: Id<"_storage">;
        description?: string;
        duration?: number;
        episodeTitle: string;
        genreIds: Array<Id<"genres">>;
        guests: Array<Id<"people">>;
        hosts: Array<Id<"people">>;
        id: Id<"recordings">;
        keywords?: string;
        programId: Id<"programs">;
        status: "draft" | "published" | "hidden";
        type: "live" | "podcast";
      },
      any
    >;
    remove: FunctionReference<
      "mutation",
      "public",
      { id: Id<"recordings"> },
      any
    >;
    getRecordingPeople: FunctionReference<
      "query",
      "public",
      { recordingId: Id<"recordings"> },
      any
    >;
    getRecordingGenres: FunctionReference<
      "query",
      "public",
      { recordingId: Id<"recordings"> },
      any
    >;
    getAudioUrl: FunctionReference<
      "query",
      "public",
      { id: Id<"recordings"> },
      any
    >;
  };
};
export type InternalApiType = {};
