import React, {Dispatch, SetStateAction, useEffect} from 'react';
import clsx from "clsx";
import {ITarifs} from "@/types/tarifs.types";

type ViewTypeForCard = "large" | "small"

interface CardProps {
    view?: ViewTypeForCard;
    isSelected?: boolean;
    onSelect?: () => void;
    card: ITarifs
    setIdxBest: Dispatch<SetStateAction<number | null>>
    id: number
}

const Card = ({ view, id, isSelected = false, onSelect, card, setIdxBest }: CardProps) => {
    const discountPercentage = Math.round(((card.full_price - card.price) / card.full_price) * 100);
    useEffect(() => {
        card.is_best && setIdxBest(id)
    }, [])

    return (
        <div
            className={clsx(
                "w-full h-full relative cursor-pointer bg-card-bg border-2",
                isSelected ? "border-default-color-accent" : "border-border-line",
                view === "large" ? "col-span-3 row-start-1 rounded-[34px] py-[30px] pr-[80px]" : "px-[18px] rounded-[40px] pt-[70px]",
                "max-lg:pr-[30px] max-lg:py-[20px]",
                "transition-colors duration-200"
            )}
            onClick={onSelect}
        >
            <div className={clsx("absolute top-0 left-[50px] text-[22px] font-medium bg-[#FD5656] px-2 py-[5px] rounded-b-lg", "max-xl:left-auto", view === "large" ? "max-xl:right-[60px]" : "max-xl:right-[30px]", "max-sm:text-base max-sm:py-[3px] max-sm:px-[6px]")}>-{discountPercentage}%</div>
            {view === "large" && <div className={clsx("absolute top-[10px] right-[20px] text-[22px] font-medium text-default-color-accent", "max-xl:right-[14px] max-sm:top-[6px] max-sm:text-base")}>хит!</div>}
            <div className={clsx("flex gap-10 items-center justify-end", view !== "large" && "flex-col", "max-lg:flex-row max-lg:justify-center")}>
                <div className={"flex flex-col items-center"}>
                    <span className="text-[26px] font-medium leading-[31px] max-sm:text-[18px]">{card.period}</span>
                    <div className={clsx("flex flex-col items-end", view === "large" ? "mt-4" : "mt-[30px]", "max-sm:mt-4")}>
                        <div className={clsx("text-[50px] font-semibold leading-[50px]", view === "large" && "text-default-color-accent", "max-xl:text-[34px]  max-sm:leading-[34px]")}>{card.price}</div>
                        <div className="text-prev-price-card line-through text-[24px] leading-[29px] max-sm:text-base max-sm:-mt-2">{card.full_price}</div>
                    </div>
                </div>
                <div className={clsx("flex text-[16px] max-w-[328px]", view !== "large" && "mb-[23px] max-w-[204px]", "max-lg:mb-[0px] max-lg:max-w-[120px] max-sm:line-clamp-2")}>{card.text}</div>
            </div>
        </div>
    );
};

export default Card;