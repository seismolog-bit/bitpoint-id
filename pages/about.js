import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
    return (
        // <>
            <Layout title='About'>
                <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                <img src="/img/logo.png" className="w-full relative z-10" alt="" />
                                <div className="border-4 border-blue-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">BitPoint ID</h1>
                                    <p className='mb-4'>BitPoint ID merupakan software developer yang bergerak dalam ranah membangun dan mengembangkan perangkat lunak berupa: Website, Mobile Application, Software dan Desain Grafis. Kami berdiri pada Januari 2021 di Indramayu, Jawa Barat.</p>
                                    <p className='mb-4'>Kami meyakini bahwa efisiensi dan efektifitas yang ditawarkan teknologi semakin dibutuhkan oleh masyarakat di hari-hari mendatang.</p>
                                    <p className='mb-4'>Sejauh ini kami telah menghasilkan berbagai produk mulai dari aplikasi android, website, serta design grafik. Saat ini kami dalam jalur yang tepat untuk berkembang bersama dukungan anda.</p>
                                </div>
                                <div className='flex'>
                                    <Link href={{ pathname: '/product' }}>
                                        <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mr-3">
                                            Product
                                        </a>
                                    </Link>
                                    <Link href={{ pathname: '/contact' }}>
                                        <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                            Contact Us
                                        </a>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        // </>
    )
}