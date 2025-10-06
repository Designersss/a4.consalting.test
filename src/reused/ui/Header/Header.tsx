import React from 'react';
import Countdown from "@/reused/ui/Countdown/Countdown";

const Header = () => {
    return (
        <header className="flex bg-background-green flex-col gap-1 justify-center items-center w-full py-2">
            <span className="text-2xl font-semibold">Успейте открыть пробную неделю</span>
            <Countdown />
        </header>
    );
};

export default Header;