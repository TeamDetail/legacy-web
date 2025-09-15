import { MUSICS } from "@src/constants/music/music.constants";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const useMusic = () => {
  const [volume, setVolume] = useState<number>(
    parseFloat(localStorage.getItem("volume") || "0.5")
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation().pathname.split("/")[1];

  useEffect(() => {
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

    return () => {
      // 페이지 이동 시 음악을 끄지 않음
    };
  }, [location, volume]);

  const turnOnAudio = () => {
    setVolume(0.5);
    localStorage.setItem("volume", "0.5");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const turnOffAudio = () => {
    setVolume(0);
    localStorage.setItem("volume", "0");
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  return {
    volume,
    audio: audioRef.current,
    turnOnAudio,
    turnOffAudio,
    setVolume: (v: number) => {
      setVolume(v);
      localStorage.setItem("volume", v.toString());
    },
  };
};

export default useMusic;
