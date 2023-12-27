const FindUs = () => {
    return (
        <div className="text-accent xl:text-xl xl:px-[165px] px-4 pb-10 xl:mt-16 flex flex-col items-center justify-center xl:gap-12 gap-2">
            <p>Hangry! dapat kamu temukan di</p>
            <div className="flex items-center justify-center xl:gap-12 gap-2">
                <img src="/images/gofood.png" alt="" className="xl:h-auto h-5" />
                <img src="/images/grabfood.png" alt="" className="xl:h-auto h-5"/>
                <img src="/images/zomato.png" alt="" className="xl:h-auto h-5"/>
                <img src="/images/eatsbytraveloka.png" alt="" className="xl:h-auto h-5"/>
            </div>
        </div>
    );
}
 
export default FindUs;