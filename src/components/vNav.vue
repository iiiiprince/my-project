<template>
  <div>
    <div style="text-align: left;padding-left: 10px;margin-bottom: 10px;">
      <button class="btn " style="width: 100px"><router-link to="/main/OrderList">查询</router-link></button>
    </div>
    <div style="text-align: left;padding-left: 10px;">
      <button class="btn " style="width: 100px"><router-link to="/main/TicketsList">下单</router-link></button>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="css" scoped>
</style>
