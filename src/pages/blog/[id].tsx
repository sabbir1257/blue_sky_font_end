/* eslint-disable @next/next/no-img-element */
import { FacebookIcon, LinkedinIcon, ShareIcon, TagsIcon, TwitterIcon, YoutubeIcon } from '@/components/Icons/Icons';
import BlogSidePart from '@/components/pages/blog/BlogSidePart';
import RelatedPostCard from '@/components/pages/blog/RelatedPostCard';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Separator from '@/components/ui/Separator';
import { useRouter } from 'next/router'
import React from 'react'

const BlogDetailsPage = () => {
    const router = useRouter();
    console.log(router?.query?.id)
    return (
        <section>
            <EveryPageHeroSection title='BLOG Details' />

            <Container className='my-10 flex gap-10'>
                <div className='w-full'>
                    <div className='w-full max-h-[450px] h-full relative'>
                        <img className='w-full max-h-[450px] rounded-md shadow-sm h-full' src="/images/land.jpg" alt="land" />
                        <div className='absolute bottom-4 left-4'>
                            <button className='bg-blue-900 rounded-md px-4 py-1 text-sm text-white font-medium shadow-md'>May 06,2020</button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-3xl font-bold'>Its like a kind of torture to have to watch the show</h1>
                        <p className='paragraph text-wrap mt-2'>
                            A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government apartment in the sky moving on up to the east side a family to explore strange new worlds to seek out new life and new. <br />civilizations to boldly go where no man has gone before you would see the biggest gift would be from me and the card attached would say thank you for being a friend.
                            <br /><br />
                            That this group would somehow form a family that&apos;s the way we all became the Brady Bunch apartment in the sky moving on up to the east side a family to explore strange new worlds.
                            <br /> <br />
                            This tropic port aboard this tiny ship today still wanted by the government apartment in the sky moving on up to the east side a family to explore strange new worlds to seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift would be from me and the card.
                        </p>
                    </div>
                    <div className='my-5'>
                        <hr />
                        <div className='flex justify-between gap-5 mt-2'>
                            <div className='flex items-center gap-1'>
                                <TagsIcon />
                                <h1 className='paragraph'><span className='text-black font-semibold'>Tags</span> : Business, Consulting, Financial</h1>
                            </div>
                            <div className='flex items-center gap-1'>
                                <ShareIcon />
                                <h1 className='text-black paragraph font-semibold'>Shared : </h1>
                                <div className='flex items-center gap-2 text-gray-700'>
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <LinkedinIcon />
                                    <YoutubeIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-10'>
                        <h1 className='title mb-2'>RELated Posts</h1>
                        <Separator />

                        <div className='mt-5 grid grid-cols-2 gap-8'>
<RelatedPostCard />
<RelatedPostCard />
                        </div>
                    </div>
                </div>

                {/* blog side part */}
                <div className='w-[40%]'>
                    <BlogSidePart />
                </div>
            </Container>
        </section>
    )
}

export default BlogDetailsPage
