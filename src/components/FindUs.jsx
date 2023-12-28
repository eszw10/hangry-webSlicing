const FindUs = () => {
    return (
        <div className="text-accent text-xs md:text-xl xl:px-[165px] px-4 pb-10 xl:mt-16 flex flex-col items-center justify-center xl:gap-12 md:gap-6 gap-2">
            <p>Hangry! dapat kamu temukan di</p>
            <div className="flex items-center justify-center xl:gap-12 gap-2">
                <img src="/images/gofood.png" alt="gofood" className="xl:h-auto md:h-12 h-5" />
                <img src="/images/grabfood.png" alt="grabfood" className="xl:h-auto md:h-12 h-5"/>
                <img src="/images/zomato.png" alt="zomato" className="xl:h-auto md:h-12 h-5"/>
                <img src="/images/eatsbytraveloka.png" alt="eatsbytraveloka" className="xl:h-auto md:h-12 h-5"/>
            </div>
        </div>
    );
}
 
export default FindUs;