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
          <CardTitle className="mb-6 text-4xl ">Payment Methods</CardTitle>
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white hover:bg-orange-400 hover:text-white"
                >
                  + New Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Add new card</DialogTitle>
                </DialogHeader>

                <div className="gap-4 py-4">
                  <Label htmlFor="name" className="text-right text-[10px] ">
                    NAME ON CARD
                  </Label>
                  <Input
                    id="name"
                    placeholder="NAME ON CARD"
                    className="col-span-3 mt-2"
                  />
                </div>
                <div className=" gap-4">
                  <Label htmlFor="username" className="text-right text-[10px]">
                    CARD NUMBER
                  </Label>
                  <Input
                    id="username"
                    placeholder="1234 1234 1234 1234"
                    className="col-span-3 mt-2"
                  />
                </div>
                <div className="flex justify-evenly gap-4 my-5">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-[10px]">CARD EXPIRY</Label>
                    <Input type="number" placeholder="MM/YY" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-[10px]">CVC</Label>
                    <Input type="password" placeholder="CVC" />
                  </div>
                </div>
                <div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-[10px]">POSTAL CODE</Label>
                    <Input placeholder="POSTAL CODE" />
                  </div>
                </div>
                <DialogFooter className="flex justify-between">
                  <Button variant="ghost" className="mr-auto">Ghost</Button>
                  <Button
                    type="submit"
                    className="bg-orange-400 shadow-2xl shadow-gray-900 hover:bg-orange-400"
                  >
                    Save
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-gray-400 flex justify-between mb-3">
            <h3>PAYMENT METHOD</h3>
            <h3>EXPIRY</h3>
            <h3 className="mr-20">CARD NAME</h3>
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
