/*
  Blockchain.js
*/
import Block from './Block.js';
import MaterialButton from './material-design/MaterialButton.js'

export default {
  name: 'Blockchain',
  components: {
    Block,
    MaterialButton
  },
  data(){
    return{
      blockStorage: [], // Stores: object{ id, data, prev_hash, hash, nonce }
      newBlockData: "",
      newNonceData: 0,
      maxIterations: 1000,
      timeNeeded: 0,
      iterationsNeeded: 0
    }
  },
  created(){
    // Read blocks from the block-data.
    for (const key in globalBlockData) {
      if (globalBlockData.hasOwnProperty(key)) {
        const element = globalBlockData[key];
        this.blockStorage.push({ 
          id: element.id, 
          data: element.data,
          prevHash: element.prevHash,
          hash: element.hash,
          nonce: element.nonce 
        });
      }
    }

    // Create 'Genesis'-block.
    //let hash = sha256(`${0} 0000000000000000 <Genesis>`); 
    //this.blockStorage.push({id: 0, data: "<Genesis>", prevHash: "0000000000000000", hash: hash, nonce: 0});
  },
  methods: { 
    addBlock(id, data, prevHash, nonce){
      let hash = sha256(`${nonce} ${prevHash} ${data}`); 
      this.blockStorage.push({id: id, data: data, prevHash: prevHash, hash: hash, nonce: nonce});
    },
    mineBlock(){
      let lastBlock = this.blockStorage[this.blockStorage.length - 1];
      let iterations=0;
      let maxIterations = Number(this.maxIterations);
      let startTime = new Date();

      while(iterations < maxIterations){
        
        this.iterationsNeeded = iterations++;
        ++this.newNonceData;
        
        // Calculate the new hash.
        let calc_hash = sha256(`${this.newNonceData} ${lastBlock.hash} ${this.newBlockData}`);
        
        // Check for validity. Currently valid hashes start with '6666'.
        if(calc_hash.startsWith('6666')){
          console.log("Found: " + calc_hash + " after " + iterations + " iterations!");

          // If a valid hash was found it gets added to the chain.
          this.addBlock(lastBlock.id + 1, this.newBlockData, lastBlock.hash, this.newNonceData);

          // Measure elapsed time.
          let endTime = new Date();
          var timeDiff = endTime - startTime;
          this.timeNeeded = timeDiff;
          
          // Step.
          return;
        }
      }
    },
    isValid(){ 
      for(let i=0; i<(this.blockStorage.length - 1); ++i){
        console.log(this.blockStorage);
        if(this.blockStorage[i].hash != this.blockStorage[i+1].prevHash){

          alert("Found an error in Block #" + i);
          return;
        }
      }
      alert("No errors in the Chain!")
    },
    recalculateHash(index){
      this.blockStorage[index].hash = 
        sha256(`${this.blockStorage[index].nonce} ${this.blockStorage[index].prevHash} ${this.blockStorage[index].data}`);
    },
  },
  template: /*html*/`
  <div>
    <!-- Heading. -->
    <h1>The blockchain</h1>
    <b>Valid hashes start with '6666'</b>

    <!-- Blocks. -->
    <template v-for="(block, index) in blockStorage"> 
      <div :key="block.id">
        <block :id="block.id" :data="block.data" :prevHash="block.prevHash" :nonce="block.nonce"></block>
        <div class="edit-block material-card">
          <label>Change nonce</label><input type="text" v-model="block.nonce" @change="recalculateHash(index)">
          <label>Change previous hash</label><input type="text" v-model="block.prevHash" @change="recalculateHash(index)">
          <label>Change data</label><input type="text" v-model="block.data" @change="recalculateHash(index)">
        </div>
        <p></p>
      </div>
    </template>

    <!-- User input. -->
    <div class="user-input">
      <label>Max iterations</label>
      <select v-model="maxIterations">
        <option value="1000">1000</option>
        <option value="100000">100000</option>
        <option value="10000000">10000000</option>
      </select>
      <label>Nonce</label>
      <input type="number" v-model="newNonceData">
      <label>Data</label>
      <input type="text" v-model="newBlockData">
      <p>Time needed for last mining: <span>{{ timeNeeded }}</span>ms</p>
      
      <!-- Would be nice to let the mining process run in seperate thread: -->
      <p>Would be nice to let the mining process run in seperate thread:</p>
      <material-button @click.native="mineBlock()">Mine!</material-button>
      <material-button @click.native="isValid()">Validate</material-button>
    </div>
  </div>`
}