import Image from "next/image";
export default function About() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen md:grid md:grid-cols-2">
            <div className="text-center">
                <h1 className="text-4xl font-bold">About me</h1>
                <p className="mt-4 text-lg">Hi my name is Alex, I am highly motivated by solved real world problems with technology. Also I am passionate about marketing because I know that without clients there is no business. This allow me to create solutions user-focus understanding the business necesities or the clients experience.</p>
            </div>
            <div>
                <Image
                src="/Images/profile.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full mt-1 center mx-auto"
                />
            </div>
        </div>
    );
}
