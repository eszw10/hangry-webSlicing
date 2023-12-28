import Card from "./Card";

const CardContainer = ({data}) => {
    return (
        <div className="xl:px-[165px] flex flex-col gap-8 py-14 px-4">
            <div className="flex flex-col gap-2">
                <p className="text-2xl xl:text-4xl font-bold">Hangry! adalah restoran dengan beragam brand</p>
                <p className="text-base xl:text-2xl text-dark-accent">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
                {data.map((item, index)=> <Card key={index} data={item}/>)}
                <div className="flex flex-col xl:gap-6 gap-2 relative overflow-hidden xl:hidden">
                    <div className="absolute top-4 left-4 xl:top-6 xl:left-6 bg-white h-10 w-10 xl:h-20 xl:w-20 rounded-full flex items-center justify-center">
                        <img src='/images/dariPada.png' alt="logo Kopi Dari|Pada" className="xl:h-12 h-6"/>
                    </div>
                    <img src='/images/dari-pada.png' alt="Kopi Dari|Pada" className="xl:h-[350px] md:w-[350px] h-[167px] rounded-xl" />
                    <div className="flex flex-col gap-1 xl:gap-2">
                        <div className="flex items-center font-bold xl:text-3xl text-sm gap-2 cursor-pointer">
                            <p className="peer">Kopi Dari|Pada</p>
                            <i className="fa-solid fa-arrow-right text-base xl:text-2xl peer-hover:translate-x-3 text-primary hover:translate-x-3 duration-300 ease-in-out"></i>
                        </div>
                        <p className="text-accent xl:text-lg text-xs">Minuman &#183; Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardContainer;