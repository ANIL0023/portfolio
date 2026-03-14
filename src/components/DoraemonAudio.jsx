import React, { useState, useRef, useEffect } from 'react';

const DoraemonAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const iframeRef = useRef(null);
    const widgetRef = useRef(null);
    const [isWidgetReady, setIsWidgetReady] = useState(false);

    const soundCloudUrl = "https://soundcloud.com/c-nguy-n-520304333/nst-doremon-tru-mu-a-h-c-2k1";

    useEffect(() => {
        // Load SoundCloud Widget API script
        const script = document.createElement('script');
        script.src = "https://w.soundcloud.com/player/api.js";
        script.async = true;
        
        script.onload = () => {
            if (window.SC && iframeRef.current) {
                const widget = window.SC.Widget(iframeRef.current);
                widgetRef.current = widget;
                
                widget.bind(window.SC.Widget.Events.READY, () => {
                    setIsWidgetReady(true);
                    widget.setVolume(40);
                    // Pre-warm: seek, play, and pause instantly to trigger buffering
                    widget.seekTo(2500);
                    widget.play();
                    widget.pause();
                });

                widget.bind(window.SC.Widget.Events.FINISH, () => {
                    setIsPlaying(false);
                });
            }
        };

        document.body.appendChild(script);

        // Show tooltip on mount to nudge user
        const timer = setTimeout(() => setShowTooltip(true), 1500);
        const hideTimer = setTimeout(() => setShowTooltip(false), 6000);

        return () => {
            document.body.removeChild(script);
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    const togglePlay = () => {
        if (!isWidgetReady || !widgetRef.current) return;

        if (isPlaying) {
            widgetRef.current.pause();
        } else {
            // Speed optimization: Just play. The READY hook and finish hook handle seeking if needed.
            // But to be safe, we seek only if it's near the very beginning to avoid jumpy resumes.
            widgetRef.current.getPosition((pos) => {
                if (pos < 2500) {
                    widgetRef.current.seekTo(2500);
                }
                widgetRef.current.play();
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleRestart = (e) => {
        e.stopPropagation();
        if (!isWidgetReady || !widgetRef.current) return;

        widgetRef.current.seekTo(2500);
        widgetRef.current.play();
        setIsPlaying(true);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
            {/* Hidden SoundCloud Player */}
            <iframe
                ref={iframeRef}
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundCloudUrl)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                className="hidden"
            />

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
                        ${!isWidgetReady ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    disabled={!isWidgetReady}
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
