<script>
    import Navbar from "$lib/components/Astralta/Navbar.svelte";
    import SimpleNav from "$lib/components/Astralta/Navbar.svelte";
    import CallToAction from "$lib/components/Astralta/Landing_CTA.svelte";
</script>

<SimpleNav/>
<div class="hero min-h-screen" style="background-image: url(sec_bg-transformed.png);">
    <div class="bg-gradient-to-b from-black to-transparent w-full h-full absolute top-0 opacity-100">
        
    </div>
    <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
            <div class="relative">
                <h1 class="mb-0 text-7xl font-bold text-white drop-shadow-lg">ABOUT US</h1>
                
                <p class="mb-5  text-white font-medium drop-shadow-lg">Astralta was founded in Munich, Germany on December 2022 by <a class="text-fuchsia-400" href="https://www.linkedin.com/in/adrianm1701/" >Adrian Montoya</a> - 
                    computer scientist from the Technical University of Munich <a href="https://www.tum.de/en/">(TUM)</a> - with the goal of 
                    bringing AI-enhanced digital marketing services to growing businesses in an intuitive way. 
                    <br>
                    <br>
                    Astralta comprises a group of skilled talents, 
                    including digital marketers, computer scientists, and graphic designers, 
                    each with extensive practical experience. Our team's expertise has 
                    enabled our clients to generate more than $100,000 in revenue 
                    through our cutting-edge digital marketing solutions.
                </p>
                <!--  -->
            </div>
            <div>
                <CallToAction/>
            </div>
            
        </div>
        
    </div>
    
    
  </div>
