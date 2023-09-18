<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span> 
        
        <!-- Privacy and Policy Content Goes Here -->
        <h3>Privacy & Policy Page for PS Scanner</h3>
        
        
        <h4>1. Introduction:</h4>
        <p>Thank you for choosing PS Scanner. This Privacy and Policy page outlines the practices concerning the collection, use, and sharing of your information when you use our bot.</p>
    
        <h4>2. Payment Method & Transactions:</h4>
        <p>We accept cryptocurrency as a method of payment. It is important to note that all crypto transactions are final and irreversible. Ensure that you are comfortable with your payment choice and the associated risks of cryptocurrency before confirming a transaction.</p>
    
        <h4>3. Information Collection & Storage:</h4>
        
        <ul>
            <li><strong>3.1. No Data Storage:</strong> <br> We pride ourselves on your privacy. PS Scanner does not store, retain, or archive any of your personal information. Our services are designed to ensure that your data remains your own.</li>
            <li><strong>3.2. Transactional Data:</strong> <br>  Even though we operate with blockchain, which inherently retains transaction data, PS Scanner does not maintain any separate record of these transactions outside of the blockchain.</li>
            <li><strong>3.3. No Administrative Privileges Required:</strong> <br>  Our bot does not require any administrative privileges within Discord. This ensures that we have a minimal data footprint and cannot access any data or functionality not intended for our bot.</li>
        </ul>
        <h4>4. Data Security:</h4>
        <p>While PS Scanner doesn’t store any of your personal information, we still employ best-in-class security measures to protect our bot and its functionalities. This ensures the integrity of our service and protects you from potential external threats.</p>
    

        <h4>5. Third-Party Services:</h4>
        <p>PS Scanner might interact with third-party services, such as the blockchain networks. While we strive to only integrate with reputable services, our Privacy and Policy are not extended to these third-party integrations. We recommend users to acquaint themselves with the privacy policies of any third-party service they interact with.</p>
    

        <h4>6. Changes to This Policy:</h4>
        <p>From time to time, we may update this Privacy and Policy page to reflect changes to our practices or for other operational, legal, or regulatory reasons. Users are encouraged to frequently check this page for any changes.</p>
    

        <h4>7. Contact:</h4>
        <p>For any questions regarding our Privacy and Policy, please reach out in Discord Server.</p>
      </div>
    </div>
</template>
  
<script>
export default {
    props: {
      showModal: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      }
    }
};
</script>
  
<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}
</style>
