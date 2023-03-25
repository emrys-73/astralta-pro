<script>
    import { onMount } from 'svelte';
  
    let words = [
      'Instagram',
      'WhatsApp',
      'Telegram',
      'Messenger'
      
    ];
    let part, i = 0, offset = 0, len = words.length, forwards = true, skip_count = 0, skip_delay = 15, speed = 120;
  
    function wordflick() {
      setInterval(function () {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        // @ts-ignore
        document.querySelector('.word').textContent = part;
      }, speed);
    }
  
    onMount(() => {
      wordflick();
    });
  </script>

  
<!-- Start block -->
<section class="bg-black">
    <div class="grid bg-transparent min-w-screen px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-5">
                <div class=" lg:ml-12 md:ml-4">
                    <!-- <h1 class="max-w-2xl mb-2 text-4xl min-h-[3em] font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white ">Your personalised <br>AI-Assistant for <div class="word"></div></h1> -->
                    <h1 class="max-w-2xl mb-2 text-4xl min-h-[2em] font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white ">Your personalised <br>AI-Assistant</h1>
                    <div class="mt-8">
                        <p class="mb-7  text-gray-300 font-light drop-shadow-lg">An expert in what you do - always available</p>
                        <p class="max-w-2xl mb-6 font-medium text-white lg:mb-8 md:text-lg lg:text-x">Just like ChatGPT - now you
                            can have your expert virtual assistant 
                            engage with your clients or audience and 
                            rovide them the value of a natural 
                            conversation style.</p>
                    </div>
                    
                </div>
            
                
            </div>
            <div class=" lg:mt-0 lg:col-span-6 lg:flex -mr-24">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src="nnb.png" alt="Natty Nick Chat">
            </div>            

    </div>
</section>
<!-- End block -->
