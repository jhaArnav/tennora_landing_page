/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UwRApiZ4Sac
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../../../components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar"

import calendlyImg from './pictures/calendly2.png';

export default function Component() {
  return (
    <div className="flex flex-col h-[calc(100%-56px)]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
          <h1 className="text-xl font-semibold">Scheduling</h1>
        </header>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 p-6 h-full overflow-scroll bg-gray-300">
        <div className="bg-background rounded-lg shadow-lg">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold">Upcoming Meetings - Scheduling: Powered by Calendly</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Day
              </Button>
              <Button variant="outline" size="sm">
                Week
              </Button>
              <Button variant="outline" size="sm">
                Month
              </Button>
            </div>
          </div>
          <div className="p-4">
            <img
              src={calendlyImg.src}
              width={350}
              height={350}
              alt="Calendar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg h-full overflow-scroll">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Next Meetings</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Showing - 123 Main St</div>
                  <div className="text-sm text-muted-foreground">Today, 3:00 PM - 4:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Open House - 456 Oak St</div>
                  <div className="text-sm text-muted-foreground">Tomorrow, 1:00 PM - 3:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Seller Meet - 789 Elm Rd</div>
                  <div className="text-sm text-muted-foreground">Friday, 10:00 AM - 11:00 AM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Open House - 321 Pine St</div>
                  <div className="text-sm text-muted-foreground">May 5th, 2:00 PM - 4:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Showing - 654 Oak Rd</div>
                  <div className="text-sm text-muted-foreground">May 7th, 11:00 AM - 12:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Listing Presentation - 987 Maple Ave</div>
                  <div className="text-sm text-muted-foreground">May 9th, 4:00 PM - 5:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Open House - 159 Elm St</div>
                  <div className="text-sm text-muted-foreground">May 15th, 1:00 PM - 3:00 PM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
            <div className="flex flex-col bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold">Showing - 789 Oak St</div>
                  <div className="text-sm text-muted-foreground">May 22nd, 10:00 AM - 11:00 AM</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}