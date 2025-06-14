// src/components/AudioPlayer.jsx
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container" onClick={togglePlayPause}>
      <img
        src="/assets/ironman-icon.png"
        alt="Jarvis Icon"
        className="audio-icon"
      />
      <button className="btn btn-sm btn-circle bg-light me-2">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <span className="song-title">Stark Theme</span>
      <div className="equalizer">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <audio ref={audioRef} src="/audio/stark-theme.mp3" preload="auto" loop />
    </div>
  );
};

export default AudioPlayer;
