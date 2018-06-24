/*
  App.js
  Main entry for the application.
*/
import Blockchain from './components/Blockchain.js'
import Wallet from './components/Wallet.js'
import Transaction from './components/Transaction.js'
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
          <li 
            @mousedown="activeContent='wallet'" 
            v-bind:class="{ selected: activeContent=='wallet' }">
            <i class="fa fa-suitcase"></i>&nbsp;Wallet
          </li>
          <li 
            @mousedown="activeContent='blockchain'" 
            v-bind:class="{ selected: activeContent=='blockchain' }">
            <i class="fa fa-link"></i>&nbsp;Blockchain
          </li>
          <li 
            @mousedown="activeContent='transaction'" 
            v-bind:class="{ selected: activeContent=='transaction' }">
            <i class="fa fa-credit-card"></i>&nbsp;Transaction
          </li>
        </material-tabbar>
        <main>
          <template v-if="activeContent === 'wallet'">
            <wallet></wallet>
          </template>
          <template v-if="activeContent === 'blockchain'">
            <blockchain></blockchain>
          </template>
          <template v-if="activeContent === 'transaction'">
            <transaction></transaction>
          </template>
        </main>
      </div>`,
    components: {
      Blockchain,
      Wallet,
      Transaction,
      MaterialButton,
      MaterialTabbar
    }
  });
});
