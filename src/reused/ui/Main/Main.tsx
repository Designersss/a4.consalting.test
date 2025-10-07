"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Human from "../../../../public/img/human.png";
import Card from "@/reused/ui/Card/Card";
import {ExclamationSvg} from "@/reused/svg/ExclamationSvg";
import Link from "next/link";
import clsx from "clsx";
import {ITarifs} from "@/types/tarifs.types";

const Main = ({data} : {data: ITarifs[]}) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [idxBest, setIdxBest] = useState<number | null>(null);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isCheckboxError, setIsCheckboxError] = useState(false);
    const handleCardSelect = (cardId: string) => {
        setSelectedCard(cardId);
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsCheckboxChecked(checked);
        if (checked && isCheckboxError) {
            setIsCheckboxError(false);
        }
    };

    const handleBuyClick = () => {
        if (!isCheckboxChecked) {
            setIsCheckboxError(true);
            return;
        }
    };

    useEffect(() => {
        idxBest && setSelectedCard(idxBest.toString());
    }, [idxBest]);

    return (
        <main className="mt-[50px] max-sm:mt-[20px]">
            <div className="main-container">
                <div className="flex flex-col gap-[110px] max-sm:gap-[20px]">
                    <h1 className="font-bold text-[40px] max-sm:text-[24px] max-sm:max-w-[312px]">Выбери подходящий для себя <span className="text-default-color-accent">тариф</span></h1>
                    <div className="flex items-center gap-[87px] max-md:flex-col max-sm:gap-0">
                        <Image className="object-cover max-sm:w-full max-sm:max-w-[124px]" src={Human} alt={"human"} width={380} height={767} />
                        <div>
                            <div className={"grid gap-3.5 grid-cols-3 max-lg:flex max-lg:flex-col max-sm:gap-[8px]"}>
                                {data?.map((card, idx) => (
                                    <Card
                                        setIdxBest={setIdxBest}
                                        view={card.is_best ? "large" : "small"}
                                        isSelected={selectedCard === idx.toString()}
                                        onSelect={() => handleCardSelect(idx.toString())}
                                        card={card}
                                        id={idx}
                                        key={idx}
                                    />
                                ))}
                            </div>
                            <div
                                className="flex w-full bg-card-bg gap-2 rounded-[20px] max-w-[500px] mt-[20px] py-[18px] px-[20px] max-md:max-w-full max-sm:py-[14px] max-sm:px-[12px] max-sm:mt-[12px]">
                                <ExclamationSvg classes={"w-6 mt-1.5"}/>
                                <span className="text-base max-sm:text-[12px]">Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</span>
                            </div>
                            <div className="flex items-center">
                                <label
                                    htmlFor="link-checkbox"
                                    className={clsx(
                                        "flex w-full items-center max-w-[600px] mt-[30px] max-sm:mt-6 p-2 rounded-lg transition-all duration-200"
                                    )}
                                >
                                    <input
                                        id="link-checkbox"
                                        type="checkbox"
                                        checked={isCheckboxChecked}
                                        onChange={handleCheckboxChange}
                                        className="checkbox-send"
                                    />
                                    <div className={clsx(
                                        "custom-checkbox-send",
                                    )} />
                                    <span className={clsx(
                                        "text-underline max-sm:text-[12px]",
                                    )}>
                                        Я согласен c <Link href="#" className="underline decoration-underline">Политикой конфиденциальности </Link> и <Link href="#" className="underline decoration-underline">Политикой конфиденциальности </Link>
                                    </span>
                                </label>
                            </div>
                            {isCheckboxError && (
                                <p className="text-red-500 text-sm mt-2 max-sm:text-[12px]">
                                    Необходимо согласие для продолжения
                                </p>
                            )}
                            <button
                                onClick={handleBuyClick}
                                className="flex w-full max-w-[352px] items-center justify-center text-[#191E1F] bg-default-color-accent text-[20px] cursor-pointer font-bold py-[20px] rounded-[20px] mt-[16px] max-sm:text-[18px] max-sm:mt-[20px] hover:bg-opacity-90 transition-colors animate-pulse"
                            >
                                Купить
                            </button>
                            <p className="flex text-[#9B9B9B] text-sm mt-[14px] max-sm:mt-[20px] max-sm:text-[10px]">Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;