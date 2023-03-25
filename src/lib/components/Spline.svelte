<script>
    import { onMount } from 'svelte';
    import { Application } from '@splinetool/runtime';
  
    /**
	 * @type {HTMLCanvasElement}
	 */
    let canvas;
  
    onMount(() => {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/tJSHhq0Kz89GiGAD/scene.splinecode');
    });
  </script>
  
  <div>
    <canvas bind:this={canvas}  width="600" height="400"></canvas>
  </div>
  