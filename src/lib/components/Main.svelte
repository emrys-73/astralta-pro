<script>
    import CallToAction from "./CallToAction.svelte"
    import Subtitle from "./Subtitle.svelte";
</script>

    <div class="hero min-h-screen" style="background-image: url(bg_main.png);">
        <div class="bg-gradient-to-b from-black to-transparent w-full h-1/3 absolute top-16">
            
        </div>
        <div class="hero-overlay bg-opacity-25"></div>
            <div class="hero-content text-center text-neutral-content">
            <div class="max-w-2xl">
                <div class="relative">
                    <h1 class="mb-0 text-7xl font-bold text-white drop-shadow-lg">ASTRALTA</h1>
                    <p class="mb-5  text-zinc-100 font-thin">AI Digital Marketing Solutions</p>
                    <!--  -->
                    <Subtitle/>
                    <div class="mb-14">
                        <CallToAction/>
                    </div>
                </div>
                
            </div>
        </div>
        
      </div>
