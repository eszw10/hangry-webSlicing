const BulkOrder = () => {
    return (
        <div className="xl:py-32 py-10 xl:px-[165px] px-4 flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="flex flex-col gap-2">
                <p className="font-bold xl:text-4xl text-2xl">Makin rame, makin hemat!</p>
                <p className="xl:w-[80%] xl:text-accent text-dark-accent xl:text-2xl text-sm xl:mb-7 mb-2">Nikmati keuntungan dengan minimum 
                pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</p>
                <ul className="flex flex-col gap-6 mb-4 xl:mb-10  xl:text-2xl text-sm">
                    <li className="font-bold flex gap-2 items-center">
                        <i className="fa-solid fa-check text-primary"></i>
                        <p>Beragam pilihan menu</p>
                    </li>
                    <li className="font-bold flex gap-2 items-center">
                        <i className="fa-solid fa-check text-primary"></i>
                        <p>Semua menu diskon 20%</p>
                    </li>
                    <li className="font-bold flex gap-2">
                        <i className="fa-solid fa-check text-primary"></i>
                        <div className="">
                            <p>Gratis biaya kirim</p>
                            <p className="text-accent xl:text-base text-[12px] font-normal">*Syarat & ketentuan berlaku</p>
                        </div>   
                    </li>
                </ul>
                <button className="px-8 py-5 xl:text-2xl md:text-base text-sm text-white bg-primary hover:bg-[#83071E] duration-200 rounded-xl md:self-start font-bold">Pesan Sekarang</button>
            </div>
            <img src="/images/bulk-order.png" alt="bulk-order" className="md:h-64 xl:h-auto" />
        </div>
    );
}
 
export default BulkOrder;