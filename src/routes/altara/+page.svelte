<script>
	import Navbar from "$lib/components/Astralta/Navbar.svelte";
	import Altara from "$lib/components/Altara.svelte";
</script>


<Navbar/>
<div class="hero min-h-screen" style="background-image: url(/astralta/bg/bg_sea.png);">

    <div class="hero bg-opacity-0"></div>
        <div class="">
        <div class="max-w-2xl">
            <div class="flex flex-col pt-8 items-center gap-2 min-h-[1200px] relative top-10">
				<div class="sm:max-w-sm lg:max-w-4xl">
					<h1 class="text-3xl font-bold w-full text-center text-white pb-1">Altara</h1>
					<p class=" font-light  text-gray-400 text-md text-center italic pb-6">
						The first prototype
					</p>
				</div>
				
			<Altara/>
				
			</div>
			
            
        </div>
        
    </div>
</div>