import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-[66px] mb-[150px] max-sm:mt-6 max-sm:mb-[30px]">
            <div className="main-container">
                <div className="flex flex-col gap-[30px] p-[20px] border border-border-line rounded-[30px] max-sm:p-3 max-sm:gap-[10px]">
                    <div className="w-fit text-[#81FE95] text-[28px] font-medium bg-[#2D3233] border border-[#81FE95] rounded-[30px] py-4 px-[30px] max-sm:text-[18px] max-sm:pt-[10px] max-sm:px-[18px] max-sm:pb-[12px]">Гарантия возврата 30 дней</div>
                    <p className="text-[24px] font-normal max-sm:text-[14px]">Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;