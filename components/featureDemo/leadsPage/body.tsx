/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jzQoxjqXW5U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { FaUserCircle } from "react-icons/fa";

export default function Component() {
  const [expandedSeller, setExpandedSeller] = useState(null)
  const sellers = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Anytown USA",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Jane Smith",
          phone: "555-1234",
          email: "jane@email.com",
          notes: "Interested in 3-bedroom home",
        },
        {
          id: 2,
          name: "Bob Johnson",
          phone: "555-5678",
          email: "bob@email.com",
          notes: "Looking for a fixer-upper",
        },
        {
          id: 3,
          name: "Sarah Lee",
          phone: "555-9012",
          email: "sarah@email.com",
          notes: "Preapproved for up to $500k",
        },
        {
          id: 4,
          name: "Michael Chen",
          phone: "555-3456",
          email: "michael@email.com",
          notes: "First-time home buyer",
        },
        {
          id: 5,
          name: "Emily Davis",
          phone: "555-7890",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 6,
          name: "Alex Patel",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 7,
          name: "Olivia Lee",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Doe",
      address: "456 Oak Rd, Smalltown CA",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Tom Wilson",
          phone: "555-3456",
          email: "tom@email.com",
          notes: "First-time home buyer",
        },
        {
          id: 2,
          name: "Emily Davis",
          phone: "555-7890",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 3,
          name: "Alex Chen",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 4,
          name: "Olivia Patel",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 5,
          name: "David Lee",
          phone: "555-8901",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 6,
          name: "Jessica Nguyen",
          phone: "555-2345",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 7,
          name: "Tom Wilson",
          phone: "555-6789",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
      ],
    },
    {
      id: 3,
      name: "Michael Johnson",
      address: "789 Elm St, Bigcity NY",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Alex Chen",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 2,
          name: "Olivia Patel",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 3,
          name: "David Lee",
          phone: "555-8901",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 4,
          name: "Jessica Nguyen",
          phone: "555-2345",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 5,
          name: "Tom Wilson",
          phone: "555-6789",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
        {
          id: 6,
          name: "Emily Davis",
          phone: "555-3456",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 7,
          name: "David Lee",
          phone: "555-6543",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
      ],
    },
    {
      id: 4,
      name: "Sarah Johnson",
      address: "321 Oak St, Smalltown CA",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Jessica Nguyen",
          phone: "555-8901",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 2,
          name: "Tom Wilson",
          phone: "555-2345",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
        {
          id: 3,
          name: "Emily Davis",
          phone: "555-6789",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 4,
          name: "Alex Chen",
          phone: "555-3456",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 5,
          name: "Olivia Patel",
          phone: "555-7890",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 6,
          name: "David Lee",
          phone: "555-2109",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 7,
          name: "Michael Chen",
          phone: "555-1234",
          email: "michael@email.com",
          notes: "First-time home buyer",
        },
      ],
    },
    {
      id: 5,
      name: "David Park",
      address: "456 Pine Rd, Bigcity NY",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Emily Davis",
          phone: "555-7890",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 2,
          name: "Alex Chen",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 3,
          name: "Olivia Patel",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 4,
          name: "David Lee",
          phone: "555-8901",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 5,
          name: "Jessica Nguyen",
          phone: "555-2345",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 6,
          name: "Tom Wilson",
          phone: "555-6789",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
        {
          id: 7,
          name: "Sarah Lee",
          phone: "555-9012",
          email: "sarah@email.com",
          notes: "Preapproved for up to $500k",
        },
      ],
    },
    {
      id: 6,
      name: "Lisa Chen",
      address: "789 Maple Ave, Smalltown CA",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "Alex Chen",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 2,
          name: "Olivia Patel",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 3,
          name: "David Lee",
          phone: "555-8901",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 4,
          name: "Jessica Nguyen",
          phone: "555-2345",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 5,
          name: "Tom Wilson",
          phone: "555-6789",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
        {
          id: 6,
          name: "Emily Davis",
          phone: "555-3456",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 7,
          name: "Michael Chen",
          phone: "555-1234",
          email: "michael@email.com",
          notes: "First-time home buyer",
        },
      ],
    },
    {
      id: 7,
      name: "Anna Lee",
      address: "159 Elm Rd, Bigcity NY",
      image: "/placeholder.svg",
      buyers: [
        {
          id: 1,
          name: "David Lee",
          phone: "555-8901",
          email: "david@email.com",
          notes: "Preapproved for up to $750k",
        },
        {
          id: 2,
          name: "Jessica Nguyen",
          phone: "555-2345",
          email: "jessica@email.com",
          notes: "Interested in a condo",
        },
        {
          id: 3,
          name: "Tom Wilson",
          phone: "555-6789",
          email: "tom@email.com",
          notes: "Looking for a 2-bedroom home",
        },
        {
          id: 4,
          name: "Emily Davis",
          phone: "555-3456",
          email: "emily@email.com",
          notes: "Relocating for new job",
        },
        {
          id: 5,
          name: "Alex Chen",
          phone: "555-2109",
          email: "alex@email.com",
          notes: "Interested in luxury homes",
        },
        {
          id: 6,
          name: "Olivia Patel",
          phone: "555-6543",
          email: "olivia@email.com",
          notes: "Looking for a fenced yard",
        },
        {
          id: 7,
          name: "Sarah Lee",
          phone: "555-9012",
          email: "sarah@email.com",
          notes: "Preapproved for up to $500k",
        },
      ],
    },
  ]
  const handleExpand = (sellerId) => {
    setExpandedSeller(expandedSeller === sellerId ? null : sellerId)
  }
  return (
    <>
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <h1 className="text-xl font-semibold">Leads</h1>
      </header>
      <div className="overflow-scroll h-[calc(100%-56px)]">
        <div className="px-4 py-8 bg-gray-300">
          <div className="space-y-8">
            {sellers.map((seller) => (
              <div key={seller.id} className="bg-white rounded-lg shadow-md">
                <div
                  className="flex items-center justify-between px-4 py-6 cursor-pointer"
                  onClick={() => handleExpand(seller.id)}
                >
                  <div className="flex items-center space-x-4">
                    <FaUserCircle className="w-[64px] h-[64px] rounded-md"/>
                    {/* <img src="/placeholder.svg" alt={seller.name} width={64} height={64} className="rounded-md" /> */}
                    <div>
                      <h3 className="font-semibold text-black">{seller.name}</h3>
                      <p className="text-gray-500">{seller.address}</p>
                    </div>
                  </div>
                  <SquareChevronDownIcon className="w-6 h-6 text-gray-500" />
                </div>
                {expandedSeller === seller.id && (
                  <div className="border-t border-gray-200 px-4 py-12">
                    <h4 className="text-lg font-semibold mb-4 text-white">Potential Buyers</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full table-auto">
                        <thead>
                          <tr className="bg-gray-100 text-gray-500 font-medium">
                            <th className="px-4 py-2 text-left bg-black text-white">Name</th>
                            <th className="px-4 py-2 text-left bg-black text-white">Contact</th>
                            <th className="px-4 py-2 text-left bg-black text-white">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {seller.buyers.map((buyer) => (
                            <tr key={buyer.id} className="border-b border-gray-200">
                              <td className="px-4 py-3 text-black">
                                <div className="flex items-center justify-between">
                                  <span>{buyer.name}</span>
                                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                    Final paperwork
                                  </span>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                                  <div className="h-full rounded-full bg-green-500" style={{ width: "80%" }} />
                                </div>
                              </td>
                              <td className="px-4 py-3 text-black">
                                <div className="space-y-1">
                                  <p>{buyer.phone}</p>
                                  <p>{buyer.email}</p>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-black">
                                This is a detailed note about the buyer's interests and requirements. The note provides
                                valuable information to the seller about the buyer's preferences and needs.
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function SquareChevronDownIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 10-4 4-4-4" />
    </svg>
  )
}