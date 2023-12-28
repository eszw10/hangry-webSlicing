const Hero = () => {
    return (
        <div className="xl:px-[165px] pl-4 pt-12 xl:pt-18 flex justify-between items-center bg-[#FAFAFA]">
            <div className="flex flex-col gap-4 font-bold">
                <p className="text-sm md:text-xl">Kamu laper atau haus?</p>
                <p className="text-2xl md:text-4xl md:w-[70%] xl:leading-[50px] leading-9">Tenang... ada Hangry! yang siap mengatasi</p>
                <div className="mt-6 flex gap-6">
                    <img src="/images/btn-playstore.png" alt="google-playstore" className="hidden md:block cursor-pointer"/>
                    <img src="/images/btn-appStore.png" alt="appstore" className="md:h-auto h-10 cursor-pointer"/>
                </div>
            </div>
            <img src="/images/hangry-phone.png" alt="Hangry-phone-version" className="hidden xl:block" />
            <img src="/images/hangry-phone-notxl.png" alt="Hangry-phone-version2" className="block xl:hidden" />
        </div>
    );
}
 
export default Hero;