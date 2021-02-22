import Link from 'next/link'
import Layout from '../components/layout'

function Home({props}) {
  return (
    <Layout title='Home'>
      <div className="flex bg-white" style={{ height: 600 + 'px' }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-extrabold leading-8 md:text-4xl">Bangun ide mu bersama <span
                        className="text-indigo-600">BitPoint ID</span></h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">Kami hadir untuk menyelesaikan permasalahan anda,
                    buat wesite dan mobile app anda sekarang!</p>
                <div className="flex justify-center lg:justify-start mt-6">
                    <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                        href="#service">Get Started</a>
                </div>
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
            <div className="h-full object-cover" style={{ backgroundImage: 'url("img/home-bg.png")' ,
                backgroundRepeat: 'no-repeat' , backgroundSize: 'cover' }}>
                <div className="h-full"></div>
            </div>
        </div>
      </div>
      <div id='service' className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Layanan</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Cara tepat untuk menuangkan ide
                  </p>
              </div>

              <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      <div className="flex">
                          <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                  </svg>
                              </div>
                          </div>
                          <div className="ml-4">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                  Website
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                  Layanan website premium dalam berbagai model yang user friendly, mudah diedit dan digunakan
                              </dd>
                          </div>
                      </div>

                      <div className="flex">
                          <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <svg className="h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                          </div>
                          <div className="ml-4">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                  Mobile Application
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                  Mudah dalam pengoprasian dan optimal dalam kerja, mulai bisnis online anda dengan Mobile
                                  Apps
                              </dd>
                          </div>
                      </div>

                      <div className="flex">
                          <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                  <svg className="h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                              </div>
                          </div>
                          <div className="ml-4">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                  Design Graphic
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                  Produksi desain untuk menghadirkan kenyamanan pengguna dengan desain elegan dan memanjakan
                                  mata
                              </dd>
                          </div>
                      </div>

                      <div className="flex">
                          <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                  <svg className="h-6 w-6"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                              </div>
                          </div>
                          <div className="ml-4">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                  Software
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                  Bentuk sistem informasi anda untuk menghemat waktu, biaya dan berfokus kepada ekspansi
                                  bisnis anda
                              </dd>
                          </div>
                      </div>
                  </dl>
              </div>
          </div>
      </div>
      <div className='py-12 bg-white'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      A better way to send money
                  </p>
              </div>
              <div className='mt-10'>
                  <div className="flex flex-row flex-wrap mx-auto">
                      {props.stories.slice(0, (props.stories.length <6) ? 3 : 6).map(e => (
                        <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3" key={e.id}>
                            <Link href={{ pathname: '/product/' + e.slug }}>
                                <a>
                                    <div
                                    className="flex flex-col items-stretch min-h-full transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                                        <div className="md:flex-shrink-0">
                                            <img src={(e.content.teaser_image == null) ? 'img/logo.png' : e.content.teaser_image} alt="Image cover" className="object-cover w-full rounded-lg md:h-56" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  const res = await fetch('https://api.storyblok.com/v1/cdn/stories/?starts_with=article&is_startpage=false&token=qrqmpGcIFKyE5WgF55Vawgtt')
  const json = await res.json()

  return {props: json}
}

export default Home