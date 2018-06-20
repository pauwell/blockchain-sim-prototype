export default {
  name: 'MaterialTabbar',
  data(){
    return{
      isRippleActive: false 
    }
  },
  methods: {
    ripple(){
      if(this.isRippleActive){
        return;
      }

      // Get the mouse position relative to the elements boundaries.
      let elemRect = event.target.getBoundingClientRect();
      let localX = event.pageX;
      let localY = event.pageY - window.scrollY - elemRect.top; 

      // Set the background relative to the mouse position.
      this.$refs.rippler.style.left = 
        (localX - (this.rounded ? 8 : 16)) + "px";
      this.$refs.rippler.style.top = 
        (localY - (this.rounded ? 8 : 16)) + "px";

      // Trigger the ripple effect.
      this.isRippleActive = true;
      setTimeout(function(){ this.isRippleActive = false }.bind(this), 200);
    }
  },
  template: /*html*/`
    <div :class="{ 'tab-bar': true, 'ripple': isRippleActive }" @mousedown="ripple()" >
      <div class="rippler" ref="rippler"></div>
      <ol>
        <slot></slot>
      </ol>
    </div>`
} 