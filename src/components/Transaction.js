/*
  Transaction.js
*/
import MaterialButton from './material-design/MaterialButton.js'

export default {
  name: 'Transaction',
  components: {
    MaterialButton
  },
  data(){
    return{
      show: false
    }
  },
  template: /*html*/`
  <div>
    <div class="material-card">
      <h1>Transaction</h1>
    </div>
    <transition name="slide">
      <div class="material-card" v-if="show">
        <h2>New Transaction</h2>
        <i class="fa fa-handshake-o"></i>
        <form>
          <input type="text">
        </form>
      </div>
    </transition>
    <material-button @click.native="show = !show" :rounded="true">+</material-button>
  </div>`
}