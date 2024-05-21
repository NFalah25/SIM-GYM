<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zeus Physique</title>
	  <link rel="stylesheet" href="./output.css">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
           background-color: #0a0f24;
            color: #ffffff;
        }
        .btn-green:hover {
            background-color: #2eb82e;
        }
		    header{
            justify-content: flex-start;
        }
        header img{
            margin-right: 600px;
            margin-left: 50px;
        }
        footer hr{
            border-color: #2eb82e;
        }
    </style>
</head>
<body class="bg-slate-950">
    <header class="flex items-center p-5">
        <img src="assets/img/zeus 2.png" alt="Zeus Physique" class="hidden sm:block">
        <nav>
            <ul class="flex space-x-4">
                <li><a href="#" class="text-white">Home</a></li>
                <li><a href="#" class="text-white">Program</a></li>
                <li><a href="#" class="text-white ml-8 rounded-xl border border-white px-5 py-2">Login</a></li>
                <li><a href="#" class="bg-lime-500 text-white px-3 py-2 rounded">Register</a></li>
            </ul>
        </nav>
    </header>
    <section class="flex flex-col sm:flex-row items-center justify-center text-left py-5">
    <div class="sm:w-1/2 mb-10 sm:mb-0 sm:pl-20">
        <h2 class="text-6xl font-bold mb-4">Helps for your ideal body fitness</h2>
        <p class="mb-8">Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
        <a href="#" class="btn-green px-10 py-2 rounded">Start Training</a>
    </div>
    <div class="sm:w-1/2">
        <img src="assets/img/Right.png" alt="Fitness" class="hidden sm:block mx-auto pr-20">
    </div>
    </section>
    <section class="py-20">
        <h2 class="text-center text-5xl font-bold mb-10">Explore Our Program</h2>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-10 px-10 pl-20 pr-20">
            <div class="border-2 border-green-500 border-dashed bg-slate-950 p-5">
                <img src="assets/img/Media Container.png" alt="Cardio Zumba" class="hidden sm:block mb-4">
                <h3 class="text-xl font-bold mb-2">Cardio Zumba</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
                <p class="mt-2 text-green-400">Every Mon and Wed at 4 pm</p>
            </div>
            <div class="border-2 border-green-500 border-dashed bg-slate-950 p-5">
                <img src="assets/img/Media Container-1.png" alt="Free Weights" class="hidden sm:block mb-4">
                <h3 class="text-xl font-bold mb-2">Free Weights</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
                <p class="mt-2 text-green-400">Everyday at 6 am - 10 pm</p>
            </div>
            <div class="border-2 border-green-500 border-dashed bg-slate-950 p-5">
                <img src="assets/img/Media Container-2.png" alt="Pound Fit" class="hidden sm:block mb-4">
                <h3 class="text-xl font-bold mb-2">Pound Fit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
                <p class="mt-2 text-green-400">Every Tue and Thu at 4 pm</p>
            </div>
            <div class="border-2 border-green-500 border-dashed bg-slate-950 p-5">
                <img src="assets/img/Media Container-3.png" alt="Area Boxing" class="hidden sm:block mb-4">
                <h3 class="text-xl font-bold mb-2">Area Boxing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
                <p class="mt-2 text-green-400">Every Sat and Sun at 9 am</p>
            </div>
        </div>
    </section>
    <section class="pl-20">
        <div class="flex gap-4">
        <div class="flex flex-col bg-black bg-opacity-20">
            <img src="assets/img/Frame 75.png" class="hidden sm:block mb-4"/>
        </div>
        <div class="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full pr-20">
            <div class="flex flex-col items-start self-stretch p-2.5 my-auto text-base font-medium text-neutral-200 max-md:mt-10 max-md:max-w-full">
            <h1 class="self-stretch text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                Transform your physique with our fitness program.
            </h1>
            <div class="flex gap-4 justify-center mt-6">
                <img src="assets/img/checkmark.png" class="shrink-0 w-10 aspect-square"/>
                <p>Increase Muscle and Strength</p>
            </div>
            <div class="flex gap-4 justify-center mt-4">
                <img src="assets/img/checkmark.png" class="shrink-0 w-10 aspect-square"/>
                <p>Be Healthier than before</p>
            </div>
            <div class="flex gap-4 justify-center mt-4">
                <img src="assets/img/checkmark.png" class="shrink-0 w-10 aspect-square"/>
                <p>Increase Stamina</p>
            </div>
            <div class="flex gap-4 self-stretch mt-6 text-lg font-semibold leading-6 text-center text-white max-md:flex-wrap">
                <a href="#" class="btn-green px-3 py-2 rounded">
                    Join now
                </a>
                <a href="#" class="my-auto ml-6">Contact us</a>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section class="flex justify-center items-center px-5 py-20 w-full bg-slate-950 max-md:max-w-full">
        <div class="w-full max-w-[1200px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow items-start text-white max-md:mt-10 pl-20">
                        <h1 class="self-stretch text-4xl font-bold">
                            What Our Member Say About Us?
                        </h1>
                        <img src="assets/img/Text.png" class="mt-36 max-w-full rounded-full border-2 border-white border-solid aspect-[2.27] w-[127px] max-md:mt-10" />
                        <h3 class="mt-6 text-lg font-medium">10K+ Satisfied Customer</h3>
                    </div>
                </div>
                <div class="flex flex-col ml-20 w-3/5 max-md:ml-20 max-md:w-full pr-20">
                    <div class="flex flex-col grow self-stretch pt-5 pb-6 w-full rounded-xl border-2 border-green-500 border-dashed bg-slate-950 max-md:mt-10 max-md:max-w-full">
                        <div class="flex gap-1 self-end mr-16 max-md:mr-2.5">
                        <img src="assets/img/Star.png" class="shrink-0 w-6 aspect-square">
                        <img src="assets/img/Star.png" class="shrink-0 w-6 aspect-square">
                        <img src="assets/img/Star.png" class="shrink-0 w-6 aspect-square">
                        <img src="assets/img/Star.png" class="shrink-0 w-6 aspect-square">
                        <img src="assets/img/Star.png" class="shrink-0 w-6 aspect-square">
                        </div>
                        <div class="flex flex-col items-start pl-12 mt-10 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                            <div class="flex gap-5 justify-between items-start max-md:flex-wrap">
                                <p class="self-start text-lg text-white text-opacity-80 max-md:max-w-full">
                                    “ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”
                                </p>
                                <div class="flex justify-center items-center self-end p-20.5 mt-20 bg-lime-500">
                                <a href="#"> <img src="assets/img/Arrow Right.png" class="shrink-0 w-20 rounded-full aspect-square"/></a>
                                </div>
                            </div>
                            <div class="flex gap-4 justify-center mt-4">
                                <img loading="lazy" src="assets/img/Ellipse 5.png" class="shrink-0 w-16 rounded-full aspect-square"/>
                                <div class="flex flex-col my-auto">
                                    <p class="text-lg font-semibold text-white text-opacity-80">Jonathan Edward</p>
                                    <p class="mt-1 text-base font-medium text-neutral-500">Office Worker</p>
                                </div>
                            </div>
                            <div class="flex gap-2 items-center self-center mt-7 ml-9">
                                <div class="shrink-0 self-stretch w-4 h-4 bg-green-400 rounded-full"></div>
                                <div class="shrink-0 self-stretch my-auto w-3 h-3 bg-gray-600 rounded-full"></div>
                                <div class="shrink-0 self-stretch my-auto w-3 h-3 bg-gray-600 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="flex gap-5 justify-between items-start py-20 w-full max-md:flex-wrap max-md:max-w-full">
    <div class="flex flex-col text-sm font-medium leading-5 text-white pl-20">
    <img src="assets/img/zeus 2.png" alt="Zeus Physique" class="hidden sm:block w-48 h-auto">
        <h3 class="sm:w-1/2 mt-4">
        Highlight benefits of each exercise, both physical and mental
        </h3>
    </div>
    <div class="flex gap-5 justify-between pr-20">
        <div class="flex flex-col text-base text-white pr-10">
        <div class="text-lg font-bold">Support</div>
        <a href="#" class="mt-2.5 font-medium">FAQ</a>
        <a href="#" class="mt-4">Support Center</a>
        </div>
        <div class="flex flex-col self-start">
        <h3 class="text-lg font-bold text-white">Social Media</h3>
        <div class="flex gap-1 mt-2.5 max-md:pr-5">
        <a href="#">
            <img src="assets/img/instagram.png" class="shrink-10 w-10 aspect-square"/>
        </a>
        <a href="#">
            <img src="assets/img/Twitter.png" class="shrink-10 w-10 aspect-square"/>
        </a>
        <a href="#">
            <img src="assets/img/Facebook.png" class="shrink-10 w-10 aspect-square"/>
        </a>
        </div>
        </div>
    </div>
    </section>
    <footer class="py-5 text-start">
        <hr class="mb-5">
        <div class="flex flex-col sm:flex-row justify-between">
            <p class="flex items-center mb-2 sm:mb-0 sm:pl-20">
                <span style="font-size: x-large;">&copy; &ensp;</span>2024 Zeus Physique
            </p>
        <div class="flex items-center pr-20 text-gray-600">
            <a href="#" class="mb-2 sm:mb-0">Term of Use</a>
            <a href="#" class="mb-2 sm:mb-0 sm:pl-5">Privacy Policy</a>
        </div>
        </div>
    </footer>
</body>
</html>