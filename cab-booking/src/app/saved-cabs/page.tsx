import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="p-5 bg-zinc-300 min-h-screen pt-20">
      <Card>
        <CardHeader>
          <CardTitle className="mb-6 text-4xl ">Favourites</CardTitle>
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white hover:bg-orange-400 hover:text-white"
                >
                  + Add Favourite
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col py-4">
                  <div className="py-5 gap-4">
                    <Input
                      placeholder="Enter name"
                      className="col-span-3 bg-gray-200"
                    />
                  </div>
                  <div className=" gap-4">
                    <Input
                      placeholder="Enter password"
                      className="col-span-3 bg-gray-200"
                    />
                  </div>
                </div>
                <DialogFooter className="flex justify-between">
                  <Button variant="ghost" className="mr-auto">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gray-200 shadow-2xl text-black shadow-gray-900 hover:bg-orange-400"
                  >
                    Save
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-gray-400 flex justify-between mb-3 text-sm">
            <h3>NAME</h3>
            <h3>ADDRESS</h3>
            <h3>FAVOURITE PICKUP</h3>
            <h3 className="mr-20">FAVOURITE DROPOFF</h3>
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
