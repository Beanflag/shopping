<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    *{
      margin:0;
      padding:0;
      text-decoration: none;
      list-style: none;
    }
    html,body,#app{
      width:100%;
      height:100%;
      overflow: hidden;
    }
    .page{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
    }
    .header{
      width:100%;
      height:45px;
      background:#ccc;
    }
    .header h3{
      text-align: center;
      line-height: 45px;
    }
    .main{
      width:100%;
      flex: 1;
      overflow-y: scroll;
    }
    .footer{
      width:100%;
      height:50px;
      background:#ccc;
      display: flex;
    }
    .footer a{
      flex: 1;
      text-align: center;
      line-height: 50px;
    }
</style>
