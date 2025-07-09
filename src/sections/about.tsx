import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {Button, buttonVariants } from "@/components/ui/button";

export default function About() {
    return(

        <div className="grid grid-cols-2 min-h-screen">
        <div className="grid gap-6 container mx-auto px-4 py-8">
            <div >
                <h1 className="text-4xl font-bold">Applied AI Engineer: Building real world end to end solutions with AI</h1>
                <Card className="bg-gradient-to-br bg-secondary shadow-[0_12px_64px_rgba(255,255,255,0.25)] rounded-xl border border-white-700">
                    <CardContent className="p-6">
                        <p className="text-xl font-semibold leading-relaxed">
                        I am highly motivated by solving real-world problems with technology. I'm also passionate about marketing, because without clients, there is no business. This passion allows me to create user-focused solutions by understanding business needs and enhancing the client experience.
                        </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-end">
                        <p className="text-sm font-medium tracking-wide text-gray-400">ALEX ARIZA H.</p>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid grid-cols-2 ">
                <h1>SKILLS</h1>
                <h1>PROJECTS</h1>
            </div>
            <Button>CONTACT ME</Button>
        </div>

        <div >
                <Image
                src="/Images/profile2.jpg"
                alt="Profile Picture"
                width={450}
                height={450}
                className="rounded-full mt-1 center mx-auto"
                />
        </div>
    </div>
    );
}
