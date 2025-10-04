export type TimedArray = {
  text: Array<string>;
  timing?: number;
};
export type StoryEntry = {
  text: string;
  dynamic?: Array<TimedArray>;
  timing?: number;
};
export type Scene = Array<StoryEntry>;
export const story: Array<StoryEntry> = [
  { text: "New Text", timing: 20 },
  { text: "New Text", timing: 20 },
  { text: "New Text", timing: 20 },
  { text: "Protectors, Burdens, Traumas, Comforts" },
  { text: "" },
  { text: "We all have a history." },
  { text: "Who we are now is reflective of our past." },
  {
    text: "Our $0 inform our $1 in the present.",
    dynamic: [
      {
        timing: 2000,
        text: ["joys", "burdens", "traumas", "fears"],
      },
      { timing: 3500, text: ["decisions", "actions", "purposes"] },
    ],
  },
];
