/*
  App.js
  Main entry for the application.
*/
import Blockchain from './components/Blockchain.js'
import Wallet from './components/Wallet.js'
import MaterialButton from './components/material-design/MaterialButton.js'
import MaterialTabbar from './components/material-design/MaterialTabbar.js'

window.addEventListener('load', function(){
  let vm = new Vue({
    el: '#app',
    data: {
      activeContent: 'wallet'
    },
    template: /*html*/`
      <div>
        <material-tabbar>
          <li @click="activeContent='wallet'" v-bind:class="{ selected: activeContent=='wallet' }">Wallet</li>
          <li @click="activeContent='blockchain'" v-bind:class="{ selected: activeContent=='blockchain' }">Blockchain</li>
          <li @click="activeContent='transaction'" v-bind:class="{ selected: activeContent=='transaction' }">Transaction</li>
        </material-tabbar>
        <main>
          <template v-if="activeContent === 'wallet'">
            <wallet></wallet>
          </template>
          <template v-if="activeContent === 'blockchain'">
            <blockchain></blockchain>
          </template>
          <template v-if="activeContent === 'transaction'">
            <div class="material-card">
              <h1>Transactions</h1>
            </div>
          </template>
        </main>
      </div>`,
    components: {
      Blockchain,
      Wallet,
      MaterialButton,
      MaterialTabbar
    }
  });
});
