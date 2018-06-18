/*
  Block.js
*/
export default {
  name: 'Block', 
  props: {
    id: Number,
    data: String, 
    prevHash: String,
    nonce: Number
  },
  data(){
    return {
      timestamp: new Date(),
      hash: String
    }
  },
  methods: {
    backColor(){
      return (this.id > 1 && this.hash.toString().substring(0, 4) != '6666' ? 'red' : 'white');
    }
  },
  computed: {
    calcHash(){
      this.hash = sha256(`${this.nonce} ${this.prevHash} ${this.data}`);
      return this.hash;
    }
  },
  template: /*html*/`
    <div class="material-card block" :style="{ background: backColor() }">
      <p>Block #<span>{{id}}</span></p>
      <hr>
      <ol>
        <li>Time: [<span>{{timestamp.toUTCString()}}</span>]</li>   
        <li>Data: [<span>{{data}}</span>]</li>
        <li>Nonce: [<span>{{nonce}}</span>]</li>
        <li>Previous hash: [<span>{{prevHash}}</span>]</li>
        <li>Hash: [<span>{{calcHash}}</span>]</li>
      </ol>
    </div>`
}