import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"



export default function Page() {
  return <div className="p-5">

    <Card>
      <CardHeader>
        <CardTitle className="mb-6 text-4xl">Booking History</CardTitle>
        <div className="flex  gap-4 justify-between">

        <CardDescription className="text-[20px]">All Trips</CardDescription>
        <CardDescription className="text-[20px]">In Progerss</CardDescription>
        <CardDescription className="text-[20px]">Prebookings</CardDescription>
        <CardDescription className="text-[20px]">Compeleted</CardDescription>
        <CardDescription className="text-[20px]">Cancelled</CardDescription>
        <div>
        <Button variant="outline" className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white">+ New Booking</Button>

        </div>

        </div>


      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>

  </div>;
}
