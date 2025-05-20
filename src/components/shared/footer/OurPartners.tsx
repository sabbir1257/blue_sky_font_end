/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container"

const OurPartners = () => {
  return (
    <section className="bg-gray-100 py-2">
    <Container >
        <div className="flex md:flex-row flex-col gap-10 lg:gap-0  justify-between items-center">
            <div>
            <h1 className="title1">OUR</h1>
            <h1 className="title1">PARTNERS</h1>
            </div>
            <div className="flex flex-wrap gap-8">
                <img src="/images/logo/p-1.png" alt="logo" />
                <img src="/images/logo/p-2.png" alt="logo" />
                <img src="/images/logo/p-3.png" alt="logo" />
                <img src="/images/logo/p-4.png" alt="logo" />
                <img src="/images/logo/p-5.png" alt="logo" />
            </div>
        </div>
    </Container>
    </section>
  )
}

export default OurPartners
