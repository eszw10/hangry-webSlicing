const Card = ({data}) => {
    return (
        <div className="flex flex-col xl:gap-6 gap-2 relative overflow-hidden">
            <div className="absolute top-4 left-4 xl:top-6 xl:left-6 bg-white h-10 w-10 xl:h-20 xl:w-20 rounded-full flex items-center justify-center">
                <img src={data.logo} alt={`logo ${data.title}`} className="xl:h-12 h-6"/>
            </div>
            <img src={data.image} alt={`${data.title}`} className="xl:h-[350px] xl:w-[350px] md:h-56 h-[167px] rounded-xl" />
            <div className="flex flex-col gap-1 xl:gap-2">
                <div className="flex items-center font-bold xl:text-3xl text-sm gap-2 cursor-pointer">
                    <p className="peer">{data.title}</p>
                    <i className="fa-solid fa-arrow-right text-base xl:text-2xl peer-hover:translate-x-3 text-primary hover:translate-x-3 duration-300 ease-in-out"></i>
                </div>
                <p className="text-accent xl:text-lg text-xs">{data.desc} &#183; {data.country}</p>
            </div>
        </div>
    );
}
 
export default Card;