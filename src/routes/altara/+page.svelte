<script>
	import Altara from "$lib/components/Altara.svelte";
	import SimpleNav from "$lib/components/SimpleNav.svelte";
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>


<SimpleNav/>
<div class="hero min-h-screen" style="background-image: url(altara.jpeg);">
    <div class="bg-gradient-to-b from-black to-transparent w-full h-3/4 absolute top-0 opacity-0">
        
    </div>
    <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
            <div class="flex flex-col pt-8 items-center gap-2 min-h-[1200px] relative top-10">
				<div class="sm:max-w-sm lg:max-w-4xl">
					<h1 class="text-3xl font-bold w-full text-center text-white pb-1">ALTARA - Our AI Assistant</h1>
					<p class=" font-light  text-gray-400 text-md text-center italic pb-6">
						Our AI Assistant
					</p>
					<p class=" font-bold  text-white text-md text-center pb-2">
						Explore what Altara can do 
						so you can imagine what it could do for your business
					</p>
					<p class=" font-regular  text-white text-md text-center pb-2">
						For some inspiration you can try asking about the following:
						<br> 
						- our story
						<br>
						- our workflow
						<br> 
						- our vision
						<br>
						or even ask it to give 
						you some free tips on how to 
						profit from AI in your business
					</p>
				</div>
				
			
				<Altara/>
				<div class="pt-6 pb-6">
					<CallToAction/>
				</div>
			</div>
			
            
        </div>
        
    </div>
</div>
<Footer/>