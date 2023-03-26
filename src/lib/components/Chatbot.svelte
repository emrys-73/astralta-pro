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
                    <h1 id="ai-bot" class="max-w-2xl mb-2 text-4xl min-h-[2em] font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white ">Your personalised <br>AI-Assistant</h1>
                    <div class="mt-8">
                        <p class="mb-7  text-gray-300 font-light drop-shadow-lg">An expert in what you do - always available</p>
                        <p class="max-w-2xl mb-6 font-medium text-white lg:mb-8 md:text-lg lg:text-x">Just like ChatGPT - you can now
                            have an expert AI in your business or 
                            personal brand. 
                            
                            Your AI Assistant can
                            engage with your audience and 
                            provide them the value of a natural 
                            conversational style.</p>
                    </div>  

                    <div class="mb-10">
                      <a href="/altara" >
                          <button class="btn btn-primary mr-3">
                              Talk to our AI
                          </button>
                      </a>
                      <a href="https://calendly.com/adrian_cal/30?back=1&month=2023-03" >
                        <button class="btn btn-secondary">
                            Get your AI Assistant
                        </button>
                    </a>
                    </div>
                </div>
            
                
            </div>
            <div class=" lg:mt-0 lg:col-span-6 lg:flex right-0">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="" src="nnb.png" alt="Natty Nick Chat">
            </div>            

    </div>
</section>
<!-- End block -->
