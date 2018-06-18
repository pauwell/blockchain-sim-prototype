/*
  App.js
  Main entry for the application.
*/
import Blockchain from './components/Blockchain.js'
import MaterialButton from './components/material-design/MaterialButton.js'

window.addEventListener('load', function(){
  let vm = new Vue({
    el: '#app',
    data: {
      activeContent: 'welcome'
    },
    template: /*html*/`
      <div>
        <div class="tab-bar">
          <ol>
            <li @click="activeContent='welcome'" v-bind:class="{ selected: activeContent=='welcome' }">Welcome</li>
            <li @click="activeContent='blockchain'" v-bind:class="{ selected: activeContent=='blockchain' }">Blockchain</li>
            <li @click="activeContent='transaction'" v-bind:class="{ selected: activeContent=='transaction' }">Transaction</li>
          </ol>
        </div>
        <main>
          <template v-if="activeContent === 'welcome'">
            <div class="material-card">
              <h1>Welcome</h1>
              <material-button>click</material-button>
            </div>
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
      MaterialButton
    }
  });
  
 // vm.$mount('#app');
});
