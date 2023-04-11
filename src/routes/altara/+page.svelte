<script>
	import Altara from "$lib/components/Altara.svelte";
	import SimpleNav from "$lib/components/SimpleNav.svelte";
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>


<SimpleNav/>
<div class="hero min-h-screen" style="background-image: url(gym_bg.png);">
    <div class="bg-gradient-to-b from-black to-black w-full h-full absolute top-0 opacity-30">
        
    </div>
    <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
            <div class="flex flex-col pt-8 items-center gap-2 min-h-[1200px] relative top-10">
				<div class="sm:max-w-sm lg:max-w-4xl">
					<h1 class="text-3xl font-bold w-full text-center text-white pb-1">Natty Nick's AI</h1>
					<p class=" font-light  text-gray-400 text-md text-center italic pb-6">
						24/7 Gym bro
					</p>
				</div>
				
			
				<Altara/>
			</div>
			
            
        </div>
        
    </div>
</div>
<Footer/>