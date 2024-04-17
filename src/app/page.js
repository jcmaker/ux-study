"use client";
import Link from "next/link";
import {
  Home,
  Bluetooth,
  Settings,
  UserRoundCog,
  Squircle,
  Plus,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex flex-col ">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">회원 정보</CardTitle>
          <Button className="rounded-full" size="icon" variant="outline">
            <Link href="/profile">
              <UserRoundCog className="w-4 h-4" />
              <span className="sr-only">편집</span>
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">이름</div>
              <div>박정우</div>
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">성별</div>
              <div>남</div>
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">생년월일</div>
              <div>2004-11-26</div>
            </div>
          </div>
          <div className="grid gap-1">
            <div className="font-semibold">신장</div>
            <div>178cm</div>
          </div>
          <div className="grid gap-1">
            <div className="font-semibold">몸무게</div>
            <div>80kg</div>
          </div>
        </CardContent>
      </Card>
      <Card className="grid gap-4 p-4" variant="border">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">등록된 장치</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-around">
          <div className=" flex">
            <Squircle />
            <span className="ml-2">한경희 스마트 체중계</span>
          </div>
          <div className="flex text-gray-500 mt-10">
            <Plus />
            <span className="ml-2">기기 추가하기</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">몸무게 변화</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart className="aspect-[4/3]" />
        </CardContent>
      </Card>
      <nav className="w-full p-4 border-r flex justify-between bottom-0 sticky bg-white">
        <Link className="flex items-center gap-2 text-sm font-medium" href="#">
          <Home className="w-8 h-8" />
        </Link>
        <Link className="flex items-center gap-2 text-sm font-medium" href="#">
          <LineChart className="w-8 h-8" />
        </Link>
        <Link className="flex items-center gap-2 text-sm font-medium" href="#">
          <Bluetooth className="w-8 h-8" />
        </Link>
        <Link className="flex items-center gap-2 text-sm font-medium" href="#">
          <Settings className="w-8 h-8" />
        </Link>
      </nav>
    </main>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 80 },
          { name: "Feb", count: 85 },
          { name: "Mar", count: 79 },
          { name: "Apr", count: 76 },
          { name: "May", count: 77 },
          { name: "Jun", count: 75 },
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
