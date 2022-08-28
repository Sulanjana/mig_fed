import React from "react";
import { Auth } from "../component/auth";
import { Card } from "flowbite-react";
const Dashboard=()=>{
    return(
        <>
        <Auth>
        <div className="flex">
        <div className="max-w-sm flex-none m-8">
        <Card imgSrc="https://jobindo.com/mobile/uploaded_images/15423880.jpg">
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            Mitramas Infosys Global
            </h5>
            <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            Layanan IT
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Status Perusahaan
            </p>
            <p className="ml-8 font-normal text-gray-700 dark:text-gray-400">
            Aktif
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Singkatan
            </p>
            <p className="ml-8 font-normal text-gray-700 dark:text-gray-400">
            MIG
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Alamat Perusahaan
            </p>
            <p className="ml-8 font-normal text-gray-700 dark:text-gray-400">
            JL.Tebet Raya No.42 Jakarta Selatan
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Penanggung Jawab
            </p>
            <p className="ml-8 font-normal text-gray-700 dark:text-gray-400">
            John Doe
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Tanggal PKP
            </p>
            <p className="ml-8 font-normal text-gray-700 dark:text-gray-400">
            3 Maret 2021
            </p>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Email
            </p>
            <div className="flex">
            <div className="ml-8 mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
            </div>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
            mig@mitrasolusi.group
            </p>
            </div>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            No.Telp
            </p>
            <div className="flex">
            <div className="ml-8 mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
            021-5678-1234
            </p>
            </div>
            <p className="ml-8 font-normal text-xs text-gray-700 dark:text-gray-400">
            Situs Web
            </p>
            <div className="flex">
            <div className="ml-8 mr-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <p className=" font-normal text-gray-700 dark:text-gray-400 mb-4">
            mitramas.com
            </p>
            </div>
        </Card>
        </div>
        {/* card pertama */}
        <div className="flex-1 mt-8 mr-8">
            <div className="mb-8">
            <Card>
                <div className="flex justify-between">
                    <div>
                        <p>Lokasi</p>
                    </div>
                    <div>
                    <p className="text-xs">Lihat Semua</p>
                    </div>
                </div>
                <div className="flex justify-around">
                <div className="w-1/4">
                    <div className="bg-green-400 flex justify-around rounded-lg px-2 py-2">
                    <div className="mr-10">
                    <svg className="w-20 h-20" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>
                    <div className="mt-3">
                    <p className="font-bold text-white text-xl">20</p>
                    <p className="text-xs text-white">Induk</p>
                    </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-green-400 flex justify-around rounded-lg px-2 py-2">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div className="mt-3">
                    <p className="font-bold text-white text-xl text-right">3</p>
                    <p className="text-xs text-white">Sub Lokasi Level 1</p>
                    </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="bg-green-400 flex justify-around rounded-lg px-2 py-2">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                    </div>
                    <div className="mt-3">
                    <p className="font-bold text-white text-xl text-right">1</p>
                    <p className="text-xs text-white">Sub Lokasi Level 2</p>
                    </div>
                    </div>
                </div>
                </div>
            </Card>
            </div>
        {/* card kedua */}
        <div className="flex justify-between">
            <div className="w-2/4 mr-8">
                <div className="mb-8">
                    <Card>
                        <div className="">
                            <div className="flex justify-between mb-2">
                                <p className="mt-1">Akun Bank</p>
                                <button className="bg-green-500 text-white flex rounded-lg px-2 py-2">+ Tambah Akun Bank</button>
                            </div>
                        <div className="flex justify-between">
                            <div className="bg-yellow-400 mb-3 rounded-lg px-2 py-2 w-40 h-24">
                                <div className="mt-12 ml-24">
                                <p className="font-bold text-white text-md">Visa</p>
                                </div>
                            </div>
                            <div className=" mb-3 rounded-lg w-44 h-24">
                                <div className="mb-7 flex justify-between">
                                    <div>
                                        <h5 className="text-md  font-bold tracking-tight text-gray-900 dark:text-white">Bank Kb Bukopin</h5>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </div>
                                        <div>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <p className="font-normal text-xs mb-2 text-gray-500 dark:text-gray-400">***0876 - Yusron Taufiq</p>
                                <p className="font-normal text-xs text-gray-500 dark:text-gray-400">IDR</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="bg-cyan-700 mb-3 rounded-lg px-2 py-2 w-40 h-24">
                                <div className="mt-12 ml-24">
                                <p className="font-bold text-white text-md">Visa</p>
                                </div>
                            </div>
                            <div className=" mb-3 rounded-lg w-44 h-24">
                                <div className="mb-7 flex justify-between">
                                    <div>
                                        <h5 className="text-md  font-bold tracking-tight text-gray-900 dark:text-white">Citibank,NA</h5>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </div>
                                        <div>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <p className="font-normal text-xs mb-2 text-gray-500 dark:text-gray-400">***5525 - Si Tampan</p>
                                <p className="font-normal text-xs text-gray-500 dark:text-gray-400">USD</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Card>
                </div>
            <div>
                <Card>
                    <div className="flex justify-between">
                    <div className="">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Relasi</h5>
                    </div>
                    <div className="">
                    <p className="">Lihat Semua</p>
                    </div>
                    </div>
                    <div className="flex">
                        <div className="mt-2 mr-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        </div>
                        <div className="">
                        <p>20</p>
                        <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Memiliki</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mt-2 mr-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        </div>
                        <div className="">
                        <p>108</p>
                        <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Menggunakan</p>
                        </div>
                    </div>
                    <div className="flex mb-12">
                        <div className="mt-2 mr-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        </div>
                        <div className="">
                        <p>67</p>
                        <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Meminjam</p>
                        </div>
                    </div>
                    
                </Card>
            </div>
            </div>
            {/* card ketiga */}
            <div className="w-2/4">
                <Card>
                    <div className="">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Aktivitas</h5>
                    </div>
                    <div className="">
                    <p>Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
                    <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Hari ini, 08:00</p>
                    </div>
                    <div className="">
                    <p>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
                    <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Kemarin, 17:32</p>
                    </div>
                    <div className="mb-80">
                    <p>Yusron melakukan perubahan profile pada induk Kantor Cabang Bekasi</p>
                    <p className="font-normal text-xs text-gray-500 dark:text-gray-400">Kemarin, 17:32</p>
                    </div>
                </Card>
            </div>
        </div>
        </div>
        </div>
        </Auth>        
        </>
    )

}

export default Dashboard