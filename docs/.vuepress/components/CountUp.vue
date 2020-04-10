<template>
  <div>
    <ClientOnly>
      <slot name="before" />
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name:"CountUp",
  props:{
      startVal:{
          type:Number,
          default:0
      },
      endVal:{
         type:Number,
         required:true 
      },
      decimalplaces:{
          type:Number,
          default:0
      },
      duration:{
          type:Number,
          default:2
      },
      delay:{
          type:Number,
          default:0
      }
  },
  mounted () {
    this.init();
  },
  
  data(){
      return {
           counter:null
      }
  },
  methods:{
      init(){
          import("countup.js").then(module => {
              this.$nextTick(() => {
                  this.counter = new module.CountUp(this.$refs.CountUp,this.endVal,{
                    startVal:this.startVal,                 // number to start at (0)
                    decimalPlaces:this.decimalplaces,       // number of decimal places (0)
                    duration:this.duration                  // animation duration in seconds (2)
                  });

                  setTimeout(() => {
                      this.counter.start();
                  }, this.delay);
              })
          });
      }
  },
  beforeDestroy(){
      this.counter.reset();
      this.counter = null;
  }
}
</script>

<style>
</style>
