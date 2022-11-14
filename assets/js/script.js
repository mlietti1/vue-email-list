const { createApp } = Vue;

createApp({
  data(){
    return{
      title: 'Axios Mail',
      emailList: []
    }
  },
  methods: {
    getApis(){
      for(let i = 1; i <= 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(result => {
          console.log(result.data.response);
          this.emailList.push(result.data.response)
        })
      }
    }
  },
  mounted(){
    this.getApis();
  }
}).mount('#app')