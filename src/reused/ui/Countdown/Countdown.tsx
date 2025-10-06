import React from 'react';
import {StarSvg} from "@/reused/svg/StarSvg";

const Countdown = () => {
    return (
        <div className="flex gap-2 items-center">
            <StarSvg />
            <div className="flex items-center gap-x-1.5 text-timer-color-text font-bold text-[40px]">
                <span>2</span>
                :
                <span>15</span>
            </div>
            <StarSvg />
        </div>
    );
};

export default Countdown;