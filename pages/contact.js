import Link from 'next/link'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <>
            <Layout title='Contact'>
                <div className='min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative'>
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex mx-auto">
                        {/* <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')" }}></div> */}

                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                            <iframe className='rounded-l-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9428.557490070914!2d108.48646643511707!3d-6.493793179136996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjknMzkuMSJTIDEwOMKwMjknMjQuMiJF!5e0!3m2!1sid!2sid!4v1614384598986!5m2!1sid!2sid" width="100%" height="100%" style={{ margin: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>

                        <div className="w-full md:w-1/2 px-10">
                            <div className="hero">
                                {/* <div className="container "> */}
                                    <div className="hero-wrapper items-center">

                                        <div className="hero-text">
                                            
                                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hubungi kami</h2>
                                            
                                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto mb-8">
                                                Website dan Aplikasi yang kami buat akan mendapatkan dukungan teknis untuk pengelolaan yang lebih baik.
                                            </p>

                                            
                                            <hr className="w-12 h-1 bg-orange-500 rounded-full my-8" />

                                            <div className="my-4 flex items-center">
                                                <span className="inline-block">
                                                    <svg className='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </span>
                                                <a href="tel:+6283897122272" className="ml-6 text-xl text-gray-500">+62 838-9712-2272</a>
                                            </div>
                                            <div className="my-4 flex items-center">
                                                <span className="inline-block">
                                                <svg className='h-5' viewBox="-23 -21 682 682.66669" xmlns="http://www.w3.org/2000/svg"><path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fillRule="evenodd"/></svg>
                                                </span>
                                                <a href="tel:+6283897122272" className="ml-6 text-xl text-gray-500">Whatsapp</a>
                                            </div>
                                            <div className="my-4 flex items-center">
                                                <span className="inline-block">
                                                <svg className='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </span>
                                                <a href="tel:+6283897122272" className="ml-6 text-xl text-gray-500">hi@bitpoint.id</a>
                                            </div>
                                            <div className="my-4 flex items-center">
                                                <span className="inline-block">
                                                    <svg className='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </span>
                                                <a href="tel:+6283897122272" className="ml-6 text-xl text-gray-500">Blok Oyoran, Desa Krangkeng, Kec. Krangkeng, Kab. Indramayu, Jawa Barat</a>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                                
                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}