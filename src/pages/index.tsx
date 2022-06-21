import { useState } from "react";
import Image from "next/image";

type Values = {
	energy: number;
	health: number;
};

const buttonClasses =
	"inline-flex items-center px-3 py-1.5 border border-gray-500 shadow-sm font-small rounded-full text-white bg-cyan-700 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

function Display({
	stat,
	name,
	props
}: {
	stat: string;
	name: string;
	props: Values;
}) {
	const [stats, statsSet] = useState<Values>(props);
	const [heroFlag, heroFlagSet] = useState("");
	const [villainFlag, villainFlagSet] = useState("");
	return (
		<div>
			<div className="flex flex-row p-2">
				<button
					className={buttonClasses}
					onClick={() => {
						if (stat === "HP") {
							statsSet({
								energy: stats.energy,
								health: Math.max(0, stats.health - 5)
							});
							name === "heroes"
								? heroFlagSet("-5 hp")
								: villainFlagSet("-5 hp");
						} else {
							statsSet({
								energy: Math.max(0, stats.energy - 5),
								health: stats.health
							});
							name === "heroes"
								? heroFlagSet("-5 pwr")
								: villainFlagSet("-5 pwr");
						}
					}}
				>
					{`-5 ${stat}`}
				</button>
				<div className="p-1" />
				<button
					className={buttonClasses}
					onClick={() => {
						if (stat === "HP") {
							statsSet({
								energy: stats.energy,
								health: Math.max(0, stats.health - 1)
							});
							name === "heroes"
								? heroFlagSet("-1 hp")
								: villainFlagSet("-1 hp");
						} else {
							statsSet({
								energy: Math.max(0, stats.energy - 1),
								health: stats.health
							});
							name === "heroes"
								? heroFlagSet("-1 pwr")
								: villainFlagSet("-1 pwr");
						}
					}}
				>
					{`-1 ${stat}`}
				</button>

				<div className="text-2xl text-center p-2">
					{stat === "HP" ? `${stats.health} HP` : `${stats.energy} Energy`}
				</div>

				<button
					className={buttonClasses}
					onClick={() => {
						if (stat === "HP") {
							statsSet({
								energy: stats.energy,
								health: Math.min(30, stats.health + 1)
							});
							name === "heroes"
								? heroFlagSet("+1 hp")
								: villainFlagSet("+1 hp");
						} else {
							statsSet({
								energy: Math.min(20, stats.energy + 1),
								health: stats.health
							});
							name === "heroes"
								? heroFlagSet("+1 pwr")
								: villainFlagSet("+1 pwr");
						}
					}}
				>
					{`+1 ${stat}`}
				</button>
				<div className="p-1" />
				<button
					className={buttonClasses}
					onClick={() => {
						if (stat === "HP") {
							statsSet({
								energy: stats.energy,
								health: Math.min(30, stats.health + 5)
							});
							name === "heroes"
								? heroFlagSet("+5 hp")
								: villainFlagSet("+5 hp");
						} else {
							statsSet({
								energy: Math.min(20, stats.energy + 5),
								health: stats.health
							});
							name === "heroes"
								? heroFlagSet("+5 pwr")
								: villainFlagSet("+5 pwr");
						}
					}}
				>
					{`+5 ${stat}`}
				</button>
			</div>
			{name === "heroes" && <div>{heroFlag}</div>}
			{name === "villains" && <div>{villainFlag}</div>}
		</div>
	);
}

function Tracker({ name }: { name: string }) {
	const [values] = useState<Values>({ energy: 20, health: 0 });

	return (
		<div className="p-16 flex flex-col items-center justify-between">
			<Image src={`/${name}.png`} alt={name} width={64} height={64} />
			<div className="text-2xl font-bold capitalize">{name}</div>
			<Display stat="HP" props={values} name={name} />
			<Display stat="Pwr" props={values} name={name} />
		</div>
	);
}

function Home() {
	return (
		<div className="flex flex-col items-center text-center ">
			<div className="text-2xl font-bold pb-4 pt-4">
				Life/Energy Tracker App
			</div>
			<div className="flex flex-col ">
				<Tracker name={"heroes"} />
				<Tracker name={"villains"} />
			</div>
			<div className=" w-full text-xl text-center pb-2">
				<a href="https://github.com/AlbertoPerez8/health-tracker">
					Github Page
				</a>
			</div>
		</div>
	);
}

export default Home;
