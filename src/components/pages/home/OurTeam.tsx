
import Container from '@/components/ui/Container'
import Separator from '@/components/ui/Separator'
import React from 'react'
import TeamsCard from '../teams/TeamsCard'

const OurTeam = () => {
    return (
        <Container className='mb-20'>
            <section className="flex flex-col items-center gap-5">
                <h1 className="title">Our TEAM</h1>
                <Separator />
                <p className="paragraph">A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
                {/* service cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 w-full">
                    <TeamsCard imageUrl='/images/man1.jpg'/>
                    <TeamsCard imageUrl='/images/man2.jpg'/>
                    <TeamsCard imageUrl='/images/man3.jpg'/>
                    <TeamsCard imageUrl='/images/man4.jpg'/>
                </div>
            </section>
        </Container>
    )
}



export default OurTeam
