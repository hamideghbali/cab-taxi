import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="p-5 bg-zinc-300 min-h-screen pt-20">
      <Card>
        <CardHeader>
          <CardTitle className="mb-6 text-4xl ">Booking History</CardTitle>
          <div className="flex justify-between ">
            <div className="flex justify-start gap-4 items-center">
              <CardDescription className="text-[18px]">
                All Trips
              </CardDescription>
              <CardDescription className="text-[18px]">
                In Progress
              </CardDescription>
              <CardDescription className="text-[18px]">
                Prebookings
              </CardDescription>
              <CardDescription className="text-[18px]">
                Completed
              </CardDescription>
              <CardDescription className="text-[18px]">
                Cancelled
              </CardDescription>
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white"
              >
                + New Booking
              </Button>
            </div>
          </div>
          <hr />
        </CardHeader>
        <CardContent>
          <div className="text-gray-400 flex justify-between mb-3">
            <h3>DATE</h3>
            <h3>TIME</h3>
            <h3>TAXI COMPANY</h3>
            <h3>FROM</h3>
            <h3>TO</h3>
            <h3 className="mr-10">AMOUNT</h3>
          </div>
        </CardContent>
        <CardContent>
          <span className="flex justify-center bg-zinc-100 py-4 rounded-lg hover:bg-white">
            No data available
          </span>
        </CardContent>
        <CardFooter>
          <p className="text-gray-400 text-sm ">Items per page: 10 20 30</p>
        </CardFooter>
      </Card>
    </div>
  );
}
