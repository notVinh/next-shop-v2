"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", order: 100, product: 200, user: 150 },
  { month: "February", order: 300, product: 300, user: 250 },
  { month: "March", order: 200, product: 400, user: 150 },
  { month: "April", order: 500, product: 100, user: 550 },
  { month: "May", order: 400, product: 200, user: 450 },
  { month: "June", order: 100, product: 600, user: 750 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  order: {
    label: "Order",
    color: "hsl(var(--chart-3))",
  },
  product: {
    label: "Product",
    color: "hsl(var(--chart-4))",
  },
  user: {
    label: "User",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

type ChartDataKey = "order" | "product" | "user";
type ChartNavProps = {
  datakey: ChartDataKey;
  label: string;
};

export function ChartNav({ datakey, label }: ChartNavProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              // dataKey="desktop"
              dataKey={datakey}
              type="natural"
              stroke="var(--color-product)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-product)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              {/* <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Line>
          </LineChart>
        </ChartContainer>
        <div className="mt-5 text-sm text-gray-600">
          <div>This month</div>
          <div className="mt-1 text-2xl font-extrabold">10 000</div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {chartData[chartData.length - 1][datakey] >
        chartData[chartData.length - 2][datakey] ? (
          <div className="flex gap-2 font-medium leading-none">
            Trending up{" "}
            <span className="text-green-600 font-extrabold underline">
              5.2%
            </span>{" "}
            this month <TrendingUp className="h-4 w-4 text-green-600 " />
          </div>
        ) : (
          <div className="flex gap-2 font-medium leading-none">
            Trending down{" "}
            <span className="text-red-600 font-extrabold underline">5.2%</span>{" "}
            this month <TrendingDown className="h-4 w-4 text-red-600" />
          </div>
        )}

        {/* <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
