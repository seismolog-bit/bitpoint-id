import Link from "next/link";
import Layout from "../../components/layout";
import markdownToHtml from "../../lib/markdown-to-html";

export default function DetailProduct({ props, content }) {

    return (
        // <>
            <Layout title={props.name}>
                <div className="bg-white pb-12">
                    <div className='max-w-screen-lg mx-auto'>
                        <div className="hero px-4 sm:px-6 py-12">
                            {/* <div className="sm:mx-8 mx-auto"> */}
                                <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                                    <div className="hero-text col-span-6">
                                        <ul className='flex mx-auto'>
                                            {props.content.categories.map(e => (
                                                <li className="text-base text-indigo-600 font-semibold tracking-wide uppercase pr-4" key={e.uuid}> 
                                                    <Link href={{ pathname: `/category/${e.uuid}` }}>
                                                        <a>
                                                            {e.name}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                            { props.name }
                                        </p>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>

                    <img src={props.content.teaser_image} className="mx-auto w-full object-cover" style={{ height : '28em'}}/>
                </div>
                
                <div className='max-w-screen-lg mx-auto'>
                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="px-4 lg:px-0 mb-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>

                
            </Layout>
        // </>
    )
}

DetailProduct.getInitialProps = async function({query}) {
    const rest = await fetch('https://api.storyblok.com/v1/cdn/stories/article/' + query.slug + '?resolve_relations=categories&token=qrqmpGcIFKyE5WgF55Vawgtt')
    const json = await rest.json()

    const markdown = await markdownToHtml(json.story.content.long_text)
    
    return { props : json.story, content: markdown }
}