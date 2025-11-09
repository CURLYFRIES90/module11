<template>
  <div id="app" class="container">
    <h1>Random Quote Generator</h1>

   
    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}" <br><em v-if="author">- {{ author }}</em></p>

    
    <button @click="getQuote">Get New Quote</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      quote: '',      
      author: '',    
      loading: false  
    }
  },
  methods: {
    async getQuote() {
      this.loading = true
      try {
        // Send a GET request to the Quotable API
        const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
          headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': 'c972a3b012msh95b275ac6f315c4p108d1cjsn545aff49326d'
          }
        })

        
        this.quote = response.data.content
        this.author = response.data.originator.name

      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    
    this.getQuote()
  }
}
</script>

<style>
.container {
  text-align: center;
  margin-top: 50px;
  background-color: cornsilk;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
}

h1 {
  color: hotpink;
}
</style>


