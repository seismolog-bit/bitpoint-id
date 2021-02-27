import Link from "next/link"
import Layout from "../../components/layout"

export default function Category({props, category}) {
    return (
        <Layout title={'Category ' + category.name} >
            <div className="hero bg-gray-100 py-16">
                    <div className="container px-4 sm:px-8 lg:px-8 mx-auto">
                        <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                        <div className="hero-text col-span-6">
                                
                                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Category</h2>
                                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    {category.name}
                                </p>
                                <hr className="w-12 h-1 bg-orange-500 rounded-full mt-8" />
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                    {category.content.intro}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-12 bg-white'>
                    <div className="max-w-7xl mx-auto px-4 sm:px-2 md:px-2 lg:px-8">
                        {/* <div className='mt-10'> */}
                            <div className="flex flex-row flex-wrap mx-auto">
                                {props.map(e => (
                                    <div className="transition-all duration-150 flex w-full px-4 py-4 md:w-1/2 lg:w-1/3" key={e.id}>
                                        <Link href={{ pathname: `/portfolio/${e.slug}` }}>
                                            <a>
                                                <div className="flex flex-col items-stretch min-h-full transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                                                    <div className="md:flex-shrink-0">
                                                        <img src={(e.content.teaser_image == null) ? 'img/logo.png' : e.content.teaser_image} alt="Image cover" className="object-cover w-full rounded-lg md:h-56" />
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
        </Layout>
    )
}

Category.getInitialProps = async function({ query }) {
    const rest = await fetch('https://api.storyblok.com/v1/cdn/stories/?starts_with=article&token=qrqmpGcIFKyE5WgF55Vawgtt&filter_query[categories][exists]=' + query.slug)
    const restCategory = await fetch(`https://api.storyblok.com/v1/cdn/stories/${query.slug}?token=qrqmpGcIFKyE5WgF55Vawgtt&find_by=uuid`)
    
    const json = await rest.json()
    const category = await restCategory.json()

    return {props: json.stories, category: category.story}
}