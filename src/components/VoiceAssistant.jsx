import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function VoiceAssistant({ onQuerySpoken, recommendationText }) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const toggleListening = () => {
    if (!speechSupported) {
      alert("Speech recognition is not supported in this browser. Please try Google Chrome or MS Edge.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      if (onQuerySpoken) {
        onQuerySpoken(transcript);
      }
    };

    recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleSpeakRecommendation = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech not supported in browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = recommendationText || "AI Advisor ready. Please run a gadget search to listen to the recommendation audio summary.";
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      {/* Speech-to-Text Mic Button */}
      <button
        onClick={toggleListening}
        type="button"
        title="Voice Search (Click and Speak)"
        style={{
          background: isListening 
            ? 'rgba(244, 63, 94, 0.25)' 
            : 'rgba(56, 189, 248, 0.15)',
          border: isListening 
            ? '1px solid rgba(244, 63, 94, 0.6)' 
            : '1px solid rgba(56, 189, 248, 0.4)',
          color: isListening ? 'var(--accent-rose)' : 'var(--primary-cyan)',
          padding: '8px 14px',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.82rem',
          fontWeight: 600,
          transition: 'all 0.2s ease',
          boxShadow: isListening ? '0 0 15px rgba(244, 63, 94, 0.4)' : 'none'
        }}
      >
        {isListening ? (
          <>
            <MicOff size={16} className="animate-pulse" /> Listening...
          </>
        ) : (
          <>
            <Mic size={16} /> Voice Search
          </>
        )}
      </button>

      {/* Text-to-Speech Playback Button */}
      <button
        onClick={handleSpeakRecommendation}
        type="button"
        title="Read Audio Recommendation"
        style={{
          background: isSpeaking ? 'rgba(52, 211, 153, 0.25)' : 'rgba(255, 255, 255, 0.05)',
          border: isSpeaking ? '1px solid rgba(52, 211, 153, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
          color: isSpeaking ? 'var(--accent-emerald)' : 'var(--text-muted)',
          padding: '8px 12px',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.82rem',
          fontWeight: 600,
          transition: 'all 0.2s ease'
        }}
      >
        {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
        {isSpeaking ? 'Stop Audio' : 'AI Voice Advice'}
      </button>
    </div>
  );
}
