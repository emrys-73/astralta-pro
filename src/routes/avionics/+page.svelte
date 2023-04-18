<script>
	import Altara from "$lib/components/Altara.svelte";
	// @ts-ignore
	import SimpleNav from "$lib/components/SimpleNav.svelte";
	// @ts-ignore
	import CallToAction from "$lib/components/CallToAction.svelte";
	import Footer from "$lib/components/Footer.svelte";
    // @ts-ignore
</script>


<SimpleNav/>
<div class="hero min-h-screen" style="background-image: url(avx.png);">
    <div class="bg-gradient-to-b from-black to-black w-full h-full absolute top-0 opacity-30">
        
    </div>
    <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
            <div class="flex flex-col pt-8 items-center gap-2 mix-h-screen relative top-10 max-w-[400px]">
				<div class="sm:max-w-md lg:max-w-2xl">
					<h1 class="text-3xl font-bold w-full text-center text-white pb-1 italic">AGNC-AI</h1>
					<p class=" font-light  text-gray-200 text-md text-center italic pb-6">
						yet one more abbreviation
					</p>
				</div>
				
			
				<Altara/>
			</div>
			
            
        </div>
        
    </div>
</div>
<Footer/>