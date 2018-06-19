/*
  Wallet.js
*/
import MaterialButton from './material-design/MaterialButton.js';

export default {
  name: 'Wallet',
  data(){
    return {
      activeContent: 'welcome',
      encryptionBits: 1024,
      rsaKey: null,
      rsaKeyJSON: '',
      passPhrase: '',
      publicKey: '',
      examplePlainText: '',
      exampleEncrypted: '',
      exampleDecrypted: '',
    }
  },
  methods: {
    generateKeys(){
      
      this.rsaKey = cryptico.generateRSAKey(this.passPhrase, this.encryptionBits);
      this.rsaKeyJSON = this.rsaKey.toJSON();
      this.publicKey = cryptico.publicKeyString(this.rsaKey);
      console.log("RsaKey:");
      console.log(this.rsaKey);




      /*console.log("Matt's passphrase: " + this.passPhrase);
      console.log("Bit length: " + this.encryptionBits);
      
      var MattsRSAkey = cryptico.generateRSAKey(this.passPhrase, this.encryptionBits);
      var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);       
      
      console.log("Matt's public key string:");
      console.log(MattsPublicKeyString);
      
      var PlainText = "Matt, I need you to help me with my Starcraft strategy.";
      
      console.log("Sam's message: " + PlainText);
      
      var EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString);
      
      console.log("The encrypted message:");
      console.log(EncryptionResult.cipher);        
      
      var DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey);
      
      console.log("The decrypted message:");
      console.log(DecryptionResult.plaintext);        
      console.log("DecryptionResult.signature: " + DecryptionResult.signature);
      this.publicKey = MattsPublicKeyString;*/
    },
    pickPassPhrase(){
      if(this.passPhrase.length >= 10){
        this.activeContent = 'keygen';
      }else{
        alert('Please pick a phrase with at least 10 digits.');
      }
    },
    pickAddress(){
      if(this.publicKey.length != 0){
        this.activeContent = 'example';
      }else{
        alert('Please press the \'Generate\'-button to generate you address.');
      }
    },
    abort(){
      // Reset all member.
      this.passPhrase = '';
      this.publicKey = '';
      this.activeContent = 'welcome';
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
      <div class="material-card" v-show="activeContent !== 'welcome'">
        <ol>
          <li>Step 1) Passphrase: <i><span>{{passPhrase}}</span></i></li>
          <li v-if="activeContent !== 'phrase'">Step 2) Generate address: <i><span>{{publicKey}}</span></i></li>
          <li v-if="activeContent === 'example'">Step 3) Example</li>
        </ol>
      </div>
      
      <!-- welcome -->
      <section class="material-card" v-show="activeContent === 'welcome'">
        <h2>Don't have an address yet?</h2>
        <p>Create your wallet and start mining.</p>
        <material-button @click.native="activeContent='phrase'">Create address</material-button>
      </section>

      <!-- phrase -->
      <section class="material-card" v-show="activeContent === 'phrase'">
        <h2>Pick your passphrase</h2>
        <label>Passphrase </label><input type="text" v-model="passPhrase">
        <p></p>
        <material-button @click.native="pickPassPhrase()">Pick</material-button>
        <material-button color="white" @click.native="abort()">Abort</material-button>
      </section>
      
      <!-- keygen -->
      <section class="material-card" v-show="activeContent === 'keygen'">
        <h2>Generate your address</h2>
        <textarea v-model="publicKey" readonly></textarea>
        <p></p>
        <material-button @click.native="generateKeys()">Generate</material-button>
        <material-button @click.native="pickAddress()">Next</material-button>
        <material-button color="white" @click.native="abort()">Abort</material-button>
      </section>

      <!-- example -->
      <section class="material-card" v-show="activeContent === 'example'">
        <h2>Example</h2>
        <p>Your private key looks like this:</p>
        <textarea readonly>{{rsaKeyJSON}}</textarea>
        <material-button>wuff!</material-button>
      </section>
    </div>`
}