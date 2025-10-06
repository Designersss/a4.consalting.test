import React from 'react';
import clsx from "clsx";

type ViewTypeForCard = "large" | "small"

const Card = ({view} : {view?: ViewTypeForCard}) => {

    return (
        <div className={clsx("w-full h-full relative cursor-pointer bg-card-bg border-2 border-border-line", view === "large" ? "col-span-3 rounded-[34px] py-[30px] pr-[80px]" : "px-[18px] rounded-[40px] pt-[70px]")}>
            <div className="absolute top-0 left-[50px] text-[22px] font-medium bg-[#FD5656] px-2 py-[5px] rounded-b-lg">-50%</div>
            {view === "large" && <div className="absolute top-[10px] right-[20px] text-[22px] font-medium text-default-color-accent">хит!</div>}
            <div className={clsx("flex gap-10 items-center justify-end", view !== "large" && "flex-col")}>
                <div className={"flex flex-col items-center"}>
                    <span className="text-[26px] font-medium leading-[31px]">3 месяца</span>
                    <div className={clsx("flex flex-col items-end", view === "large" ? "mt-4" : "mt-[30px]")}>
                        <div className={clsx("text-[50px] font-semibold leading-[50px]", view === "large" && "text-default-color-accent")}>1990 ₽</div>
                        <div className="text-prev-price-card line-through text-[24px] leading-[29px]">3990 ₽</div>
                    </div>
                </div>
                <div className={clsx("flex text-[16px] max-w-[328px]", view !== "large" && "mb-[23px] max-w-[204px]")}>Для тех, кто хочет всегда быть в форме и поддерживать здоровье</div>
            </div>
        </div>
    );
};

export default Card;