"use client"

import React, { useState, useEffect } from 'react';
import {StarSvg} from "@/reused/svg/StarSvg";
import clsx from "clsx";
import {useTimerStore} from "@/store/timerStore";

interface CountdownProps {
    initialMinutes?: number;
}

const Countdown = ({ initialMinutes = 2 }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
    const [isBlinking, setIsBlinking] = useState(false);
    const setTimerValue = useTimerStore((state) => state.setTimerValue);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    useEffect(() => {
        setTimerValue(timeLeft);
    }, [timeLeft, setTimerValue]);

    useEffect(() => {
        setIsBlinking(timeLeft <= 30 && timeLeft > 0);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return {
            minutes: mins.toString().padStart(2, '0'),
            seconds: secs.toString().padStart(2, '0')
        };
    };

    const { minutes, seconds } = formatTime(timeLeft);

    return (
        <div className={clsx(isBlinking && "animate-pulse", "flex gap-2 items-center")}>
            <StarSvg fill={isBlinking ? "#FF4E4E" : ""} />
            <div className={clsx(
                "flex items-center gap-x-1.5 font-bold text-[40px] transition-all duration-300",
                isBlinking
                    ? "text-[#FF4E4E]"
                    : "text-timer-color-text"
            )}>
                <span>{minutes}</span>
                :
                <span>{seconds}</span>
            </div>
            <StarSvg fill={isBlinking ? "#FF4E4E" : ""} />
        </div>
    );
};

export default Countdown;