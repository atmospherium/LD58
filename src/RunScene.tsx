import { useEffect, useState } from "react";
import type { Scene } from "./story";
import { RollingText } from "./utils/RollingText";

type RunSceneProps = {
  scene: Scene;
};
export const RunScene = ({ scene }: RunSceneProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentScene = scene[activeIndex];
  const sceneLength = scene.length;
  useEffect(() => {
    if (activeIndex == sceneLength - 1) return;
    setTimeout(() => {
      setActiveIndex((index) => index + 1);
    }, currentScene.timing ?? 2000);
  }, [activeIndex]);
  return (
    <div>
      {scene
        .filter((scene, index) => activeIndex >= index)
        .map((entry) => {
          if (!entry.dynamic) {
            return <p>{entry.text}</p>;
          }
          const content = entry.text
            .split("$")
            .map((text, index) => (index > 0 ? text.substring(1) : text));
          return (
            <p>
              {content.map((text, index) => {
                const dynamicEntry = entry?.dynamic?.[index];
                if (!dynamicEntry) return text;
                return (
                  <>
                    {text}
                    <RollingText
                      words={dynamicEntry.text}
                      duration={dynamicEntry.timing ?? 1000}
                      loop={true}
                    />
                  </>
                );
              })}
            </p>
          );
        })}
      {activeIndex.toString()}
    </div>
  );
};
