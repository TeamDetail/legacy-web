import { MUSICS } from "@src/constants/music/music.constants";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const useMusic = (player: boolean) => {
  const [volume, setVolume] = useState<number>(
    parseFloat(localStorage.getItem("volume") || "0.5")
  );
  const [canMusic, setCanMusic] = useState(
    localStorage.getItem("MUSIC")! === "1"
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation().pathname.split("/")[1];

  // 음악 키고 끄기
  useEffect(() => {
    if (localStorage.getItem("MUSIC")) {
      localStorage.setItem("MUSIC", canMusic ? "1" : "-1")
    }
  }, [canMusic])

  // 재생 및 볼륨 조절
  useEffect(() => {
    if (player) {
      if (!localStorage.getItem("MUSIC")) {
        localStorage.setItem("MUSIC", "0");
      }
      if (localStorage.getItem("MUSIC") === "1") {
        if (!audioRef.current) {
          audioRef.current = new Audio();
          audioRef.current.loop = true;
        }
        const musicUrl =
          MUSICS.find((item) => item.value.includes(location))?.url ||
          MUSICS.find((item) => item.value.includes("default"))!.url;
    
        if (musicUrl && audioRef.current.src !== musicUrl) {
          audioRef.current.src = musicUrl;
          audioRef.current.currentTime = 0;
          audioRef.current.volume = volume;
          audioRef.current.play();
        }
        // 볼륨 동기화
        if (audioRef.current.volume !== volume) {
          audioRef.current.volume = volume;
        }
      }
    }
  }, [location, volume]);

  const turnOnAudio = () => {
    setVolume(0.5);
    localStorage.setItem("volume", "0.5");
    localStorage.setItem("MUSIC", "1");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const turnOffAudio = () => {
    setVolume(0);
    localStorage.setItem("volume", "0");
    localStorage.setItem("MUSIC", "-1");
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVolume = (volume: number) => {
    setVolume(volume);
    localStorage.setItem("volume", volume.toString());
  };

  return {
    canMusic,
    setCanMusic,
    volume,
    audio: audioRef.current,
    turnOnAudio,
    turnOffAudio,
    handleVolume,
  };
};

export default useMusic;
