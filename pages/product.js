import Layout from '../components/layout'

export default function Product() {
    return (
        <>
            <Layout title='Product'>
                <div className="hero bg-gray-100 py-16">
                    <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                            <div className="hero-text col-span-6">
                                
                                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Product</h2>
                                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    A better way to send money
                                </p>
                                <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
                                    veritatis in
                                    accusamus quisquam.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}