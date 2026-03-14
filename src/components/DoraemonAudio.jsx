import React, { useState, useRef, useEffect } from 'react';

const DoraemonAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const audioUrl = "/audio/doraemon.mp3";

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.volume = 0.4;
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleRestart = (e) => {
        e.stopPropagation();
        // Reset to exactly after the silence (1.5s)
        audioRef.current.currentTime = 1.5;
        audioRef.current.volume = 0.4;
        if (!isPlaying) {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
            setIsPlaying(true);
        }
    };

    // Fix silence at start when loading
    const handleMetadataLoaded = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 1.5;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
        }
        
        // Show tooltip on mount to nudge user
        const timer = setTimeout(() => setShowTooltip(true), 1500);
        const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">

            <div className="relative flex flex-col items-end">
                {showTooltip && (
                    <div className="absolute bottom-full mb-4 right-0 px-4 py-2 bg-slate-900 dark:bg-white/10 backdrop-blur-md border border-slate-800 dark:border-white/20 rounded-2xl text-white text-sm shadow-xl animate-bounce pointer-events-auto whitespace-nowrap uppercase font-bold tracking-widest">
                        SONG MODE 🎶
                    </div>
                )}
                
                <button
                    onClick={togglePlay}
                    onDoubleClick={handleRestart}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className={`
                        group pointer-events-auto relative w-20 h-20 rounded-full flex items-center justify-center
                        transition-all duration-500 transform hover:scale-105 active:scale-95
                        bg-[#1a1c15] shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-[#2d3128]
                    `}
                    aria-label={isPlaying ? "Pause Doraemon Theme" : "Play Doraemon Theme"}
                >
                    {/* Visualizer bars in the center */}
                    <div className="flex items-center justify-center gap-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div 
                                key={i}
                                className={`w-1.5 rounded-full bg-[#88ff00] transition-all duration-300 ${isPlaying ? 'animate-music-bar' : 'h-4 opacity-80'}`}
                                style={{ 
                                    animationDelay: `${i * 0.15}s`,
                                    animationDuration: `${0.6 + Math.random() * 0.4}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Ring animation when playing */}
                    {isPlaying && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#88ff00] animate-ping opacity-10" />
                    )}
                </button>
            </div>

            <audio
                ref={audioRef}
                src={audioUrl}
                preload="auto"
                onLoadedMetadata={handleMetadataLoaded}
                loop
                onEnded={() => {
                    setIsPlaying(false);
                    audioRef.current.currentTime = 1.5; // Reset for next play
                }}
            />

            <style jsx>{`
                @keyframes music-bar {
                    0%, 100% { height: 12px; }
                    50% { height: 28px; }
                }
                .animate-music-bar {
                    animation: music-bar ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default DoraemonAudio;
