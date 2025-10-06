import React from 'react';
import Image from "next/image";
import Human from "../../../../public/img/human.png";
import Card from "@/reused/ui/Card/Card";
import {ExclamationSvg} from "@/reused/svg/ExclamationSvg";
import Link from "next/link";

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
                                <Card view={"large"}/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                            <div
                                className="flex w-full bg-card-bg gap-2 rounded-[20px] max-w-[500px] mt-[20px] py-[18px] px-[20px]">
                                <ExclamationSvg classes={"w-6 mt-1.5"}/>
                                <span className="text-base">Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</span>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="link-checkbox" className="flex w-full items-center max-w-[600px] mt-[30px]">
                                    <input id="link-checkbox" type="checkbox" value="" className="checkbox-send"/>
                                    <div className="custom-checkbox-send" />
                                    <span className="text-underline">Я согласен c <Link href="#" className="underline decoration-underline">Политикой конфиденциальности </Link> и <Link href="#" className="underline decoration-underline">Политикой конфиденциальности </Link></span></label>
                            </div>
                            <button className="flex w-full max-w-[352px] items-center justify-center text-[#191E1F] bg-default-color-accent text-[20px] cursor-pointer font-bold py-[20px] rounded-[20px] mt-[16px]">Купить</button>
                            <p className="flex text-[#9B9B9B] text-sm mt-[14px]">Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;