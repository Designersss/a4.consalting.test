import React from 'react';
import Image from "next/image";
import Human from "../../../../public/img/human.png";
import Card from "@/reused/ui/Card/Card";

const Main = () => {
    return (
        <main className="mt-[50px]">
            <div className="main-container">
                <div className="flex flex-col gap-[110px]">
                    <h1 className="font-bold text-[40px]">Выбери подходящий для себя <span className="text-default-color-accent">тариф</span></h1>
                    <div className="flex items-center gap-[87px]">
                        <Image className="object-cover" src={Human} alt={"human"} width={380} height={767} />
                        <div>
                            <div className="grid gap-3.5 grid-cols-3">
                                <Card view={"large"} />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;