/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U5tK1xImpOh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "../../ui/card"
import { Separator } from "../../ui/separator"
import Link from "next/link"
import { Button } from "../../ui/button"

import house1Img from './pictures/house1.png';
import house2Img from './pictures/house2.png';
import house3Img from './pictures/house3.jpg';
import house4Img from './pictures/house4.jpg';
import house5Img from './pictures/house5.webp';

export default function Component() {
  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-6 md:p-8 bg-black">
      <div className="grid grid-cols-1 gap-6">
        <Card className="grid grid-cols-[1fr_2fr] rounded-lg shadow-lg">
          <div className="relative overflow-hidden rounded-l-lg">
            <div className="absolute top-4 left-4 w-full">
              <div className="bg-red-500 px-2 py-1 rounded-md text-white font-bold">Leads Generated</div>
            </div>
            <img
              src={house1Img.src}
              alt="Home Image"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-muted/80 px-4 py-2">
              <div className="text-lg font-bold text-foreground text-center">$750,000</div>
              <div className="text-sm text-foreground text-center">123 Main St, Anytown USA</div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Info</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>2,500 sq ft</div>
                  <div>4 beds, 3 baths</div>
                  <div>Lot size: 0.5 acres</div>
                  <div>Built in 2015</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Leads</span>
                <div className="text-sm text-foreground text-center">12</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Schedule</span>
                <div className="text-sm text-foreground text-center">Open House: Sat, 4/15 2-4pm</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Documents</span>
                <Link href="#" className="text-sm text-primary underline" prefetch={false}>
                  View
                </Link>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Seller</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>John Doe</div>
                  <div>555-1234</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Listing
              </Button>
            </div>
          </div>
        </Card>
        <Card className="grid grid-cols-[1fr_2fr] rounded-lg shadow-lg">
          <div className="relative overflow-hidden rounded-l-lg">
            <div className="absolute top-4 left-4 w-full">
              <div className="bg-yellow-500 px-2 py-1 rounded-md text-white font-bold">Showings in Progress</div>
            </div>
            <img
              src={house2Img.src}
              alt="Home Image"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-muted/80 px-4 py-2">
              <div className="text-lg font-bold text-foreground text-center">$450,000</div>
              <div className="text-sm text-foreground text-center">456 Oak St, Smalltown USA</div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Info</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>1,800 sq ft</div>
                  <div>3 beds, 2 baths</div>
                  <div>Lot size: 0.25 acres</div>
                  <div>Built in 2010</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Leads</span>
                <div className="text-sm text-foreground text-center">8</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Schedule</span>
                <div className="text-sm text-foreground text-center">Showing: Tue, 4/18 6-7pm</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Documents</span>
                <Link href="#" className="text-sm text-primary underline" prefetch={false}>
                  View
                </Link>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Seller</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>Jane Smith</div>
                  <div>555-5678</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Listing
              </Button>
            </div>
          </div>
        </Card>
        <Card className="grid grid-cols-[1fr_2fr] rounded-lg shadow-lg">
          <div className="relative overflow-hidden rounded-l-lg">
            <div className="absolute top-4 left-4 w-full">
              <div className="bg-blue-500 px-2 py-1 rounded-md text-white font-bold">Bid Submitted</div>
            </div>
            <img
              src={house3Img.src}
              alt="Home Image"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-muted/80 px-4 py-2">
              <div className="text-lg font-bold text-foreground text-center">$625,000</div>
              <div className="text-sm text-foreground text-center">789 Elm Rd, Middletown USA</div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Info</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>2,200 sq ft</div>
                  <div>3 beds, 2.5 baths</div>
                  <div>Lot size: 0.4 acres</div>
                  <div>Built in 2012</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Leads</span>
                <div className="text-sm text-foreground text-center">10</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Schedule</span>
                <div className="text-sm text-foreground text-center">Open House: Sun, 4/23 1-3pm</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Documents</span>
                <Link href="#" className="text-sm text-primary underline" prefetch={false}>
                  View
                </Link>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Seller</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>Michael Johnson</div>
                  <div>555-9012</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Listing
              </Button>
            </div>
          </div>
        </Card>
        <Card className="grid grid-cols-[1fr_2fr] rounded-lg shadow-lg">
          <div className="relative overflow-hidden rounded-l-lg">
            <div className="absolute top-4 left-4 w-full">
              <div className="bg-green-500 px-2 py-1 rounded-md text-white font-bold">Final Documentation</div>
            </div>
            <img
              src={house4Img.src}
              alt="Home Image"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-muted/80 px-4 py-2">
              <div className="text-lg font-bold text-foreground text-center">$900,000</div>
              <div className="text-sm text-foreground text-center">321 Pine Ave, Bigtown USA</div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Info</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>3,000 sq ft</div>
                  <div>4 beds, 3 baths</div>
                  <div>Lot size: 0.75 acres</div>
                  <div>Built in 2018</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Leads</span>
                <div className="text-sm text-foreground text-center">15</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Schedule</span>
                <div className="text-sm text-foreground text-center">Showing: Thu, 4/27 5-6pm</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Documents</span>
                <Link href="#" className="text-sm text-primary underline" prefetch={false}>
                  View
                </Link>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Seller</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>Sarah Lee</div>
                  <div>555-3456</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Listing
              </Button>
            </div>
          </div>
        </Card>
        <Card className="grid grid-cols-[1fr_2fr] rounded-lg shadow-lg">
          <div className="relative overflow-hidden rounded-l-lg">
            <div className="absolute top-4 left-4 w-full">
              <div className="bg-gray-500 px-2 py-1 rounded-md text-white font-bold">Seller Agreement</div>
            </div>
            <img
              src={house5Img.src}
              alt="Home Image"
              width={500}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-muted/80 px-4 py-2">
              <div className="text-lg font-bold text-foreground text-center">$575,000</div>
              <div className="text-sm text-foreground text-center">159 Oak Rd, Smallville USA</div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Info</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>2,000 sq ft</div>
                  <div>3 beds, 2 baths</div>
                  <div>Lot size: 0.3 acres</div>
                  <div>Built in 2014</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Leads</span>
                <div className="text-sm text-foreground text-center">6</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Schedule</span>
                <div className="text-sm text-foreground text-center">Open House: Sat, 4/29 2-4pm</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Documents</span>
                <Link href="#" className="text-sm text-primary underline" prefetch={false}>
                  View
                </Link>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Seller</span>
                <div className="grid gap-1 text-sm text-foreground text-center">
                  <div>David Brown</div>
                  <div>555-7890</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Listing
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}