import Container from "@/components/ui/Container"
import Separator from "@/components/ui/Separator"
import CoreValuesCard from "./CoreValuesCard"

const CoreValues = () => {
  return (
    <Container className="flex py-16 bg-gray-50 w-full flex-col justify-center items-center gap-3">
      <h1 className="title">CORE VALUES</h1>
      <Separator />

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <CoreValuesCard />
            <CoreValuesCard />
            <CoreValuesCard />
      </div>
    </Container>
  )
}

export default CoreValues
