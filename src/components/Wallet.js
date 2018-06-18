/*
  Wallet.js
*/
import MaterialButton from './material-design/MaterialButton.js';

export default {
  name: 'Wallet',
  data(){
    return {
      generateKeyPair: false
    }
  },
  components: {
    MaterialButton
  },
  template: /*html*/`
    <div class="wallet">
      <div class="material-card">
        <h1>Wallet</h1>
      </div>
      <section class="material-card">
        <h2>Don't have an address yet?</h2>
        <p>Create your wallet and start mining.</p>
        <material-button @click.native="generateKeyPair=true">Create address</material-button>
        <template v-if="generateKeyPair">
          <h2>Generate key-pair</h2>
          <label>Public key </label><input type="text" readonly>
          <p></p>
          <label>Private key </label><input type="text" readonly>
          <p></p>
          <material-button>Generate</material-button>
          <material-button color="white" @click.native="generateKeyPair=false">Cancel</material-button>
        </template>
      </section>
    </div>`
}