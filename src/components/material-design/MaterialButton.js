export default {
  name: 'MaterialButton',
  data(){
    return{
      isRippleActive: false 
    }
  },
  props: {
    color: {
      default: 'rgb(65, 184, 131)',
      type: String
    },
    rounded: {
      default: false,
      type: Boolean 
    }
  },
  methods: {
    ripple(){
      if(this.isRippleActive){
        return;
      }

      // Get the mouse position relative to the elements boundaries.
      let elemRect = event.target.getBoundingClientRect();
      let localX = event.pageX - window.scrollX - elemRect.left;
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
    <div :class="{ 'material-button': true, 'rounded': rounded, 'ripple': isRippleActive }" 
      :style="{ backgroundColor: this.color }" @mousedown="ripple()">
      <div class="rippler" ref="rippler"></div>
      <div class="content">
        <slot></slot>
      </div>
    </div>`
} 