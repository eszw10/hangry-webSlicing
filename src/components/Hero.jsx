const Hero = () => {
    return (
        <div className="xl:px-[165px] px-4 pt-12 pt-18 flex justify-between items-center bg-[#FAFAFA]">
            <div className="flex flex-col gap-4 font-bold">
                <p className="text-sm xl:text-xl">Kamu laper atau haus?</p>
                <p className="text-2xl xl:text-4xl xl:w-[70%] xl:leading-[50px] leading-9">Tenang... ada Hangry! yang siap mengatasi</p>
                <div className="mt-6 flex gap-6">
                    <img src="/images/btn-playstore.png" alt="google-playstore" className="hidden md:block"/>
                    <img src="/images/btn-appStore.png" alt="appstore" className="xl:h-auto h-10"/>
                </div>
            </div>
            <img src="/images/hangry-phone.png" alt="Hangry-phone-version" className="hidden xl:block" />
            <img src="/images/hangry-phone-notxl.png" alt="Hangry-phone-version" className="block xl:hidden" />
        </div>
    );
}
 
export default Hero;