/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZnuOC1nnOea
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export function ComponentUI() {
  return (
    <div className="flex w-full min-h-screen">
      <nav className="hidden w-60 min-h-screen p-4 border-r gap-4 md:flex shrink-0">
        <div className="flex items-center h-12">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="#"
          >
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <span className="flex-1" />
        </div>
        <div className="grid gap-4">
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <HomeIcon className="w-4 h-4" />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <UserIcon className="w-4 h-4" />
            Patients
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <CalendarIcon className="w-4 h-4" />
            Appointments
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium text-gray-900"
            href="#"
          >
            <FileIcon className="w-4 h-4" />
            Medical Records
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <FileSearchIcon className="w-4 h-4" />
            Diagnostics
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <PillIcon className="w-4 h-4" />
            Prescriptions
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <MessageSquareIcon className="w-4 h-4" />
            Messages
          </Link>
          <Link
            className="flex items-center gap-2 text-sm font-medium"
            href="#"
          >
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Link>
        </div>
      </nav>
      <div className="flex flex-1 flex-col min-h-screen">
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <Button
            className="rounded-full md:hidden"
            size="icon"
            variant="ghost"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <form className="flex-1 ml-4 md:ml-6">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <BellIcon className="w-4 h-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <UserIcon className="w-4 h-4" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Patient Record
                </CardTitle>
                <Button className="rounded-full" size="icon" variant="outline">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1">
                    <div className="font-semibold">Name</div>
                    <div>John Doe</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-semibold">Date of Birth</div>
                    <div>1985-02-14</div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="font-semibold">Address</div>
                  <div>123 Main St, Springfield, IL</div>
                </div>
                <div className="grid gap-1">
                  <div className="font-semibold">Email</div>
                  <div>john.doe@example.com</div>
                </div>
                <div className="grid gap-1">
                  <div className="font-semibold">Phone</div>
                  <div>(555) 123-4567</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Appointments
                </CardTitle>
                <Button size="sm" variant="slim">
                  New Appointment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Card className="grid gap-4 p-4" variant="border">
                    <div className="flex items-center gap-4">
                      <CalendarIcon className="w-8 h-8" />
                      <div className="grid gap-1 text-sm">
                        <div className="font-semibold">Dentist</div>
                        <div>Checkup and cleaning</div>
                      </div>
                      <span className="flex-1" />
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <CalendarIcon className="w-8 h-8" />
                      <div className="grid gap-1 text-sm">
                        <div className="font-semibold">Physician</div>
                        <div>Annual physical</div>
                      </div>
                      <span className="flex-1" />
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </div>
                  </Card>
                  <Card className="grid gap-4 p-4" variant="border">
                    <div className="flex items-center gap-4">
                      <CalendarIcon className="w-8 h-8" />
                      <div className="grid gap-1 text-sm">
                        <div className="font-semibold">Dentist</div>
                        <div>Checkup and cleaning</div>
                      </div>
                      <span className="flex-1" />
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <CalendarIcon className="w-8 h-8" />
                      <div className="grid gap-1 text-sm">
                        <div className="font-semibold">Physician</div>
                        <div>Annual physical</div>
                      </div>
                      <span className="flex-1" />
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="outline"
                      >
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Weight Progress
                </CardTitle>
                <Button className="rounded-full" size="sm" variant="slim">
                  Register Scale Device
                </Button>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
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
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FileEditIcon(props) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function FileIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function FileSearchIcon(props) {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="m9 18-1.5-1.5" />
    </svg>
  );
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
  );
}

function MessageSquareIcon(props) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PillIcon(props) {
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
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
