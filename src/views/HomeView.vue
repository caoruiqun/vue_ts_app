<template>
    <el-container>
      <el-header height="80px">
        <el-row :gutter="20">
          <el-col :span="4"><img class="logo" src="../assets/logo.png" alt=""></el-col>
          <el-col :span="16"><h2>后台系统</h2></el-col>
          <el-col class="btn-text" :span="4"><el-button type="text">Tina</el-button></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            text-color="#fff"
          >
            <el-menu-item index="1">
              <el-icon><icon-menu /></el-icon>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>订单列表</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>

<style lang="scss" scoped>
.logo{
  height: 80px;
}
h2{
  text-align: center;
  color: #fff;
  height: 80px;
  line-height: 80px;
}
.el-header{
  background: #545c64;
}
.btn-text{
  text-align: right;
  height: 80px;
  line-height: 80px;
  .el-button--text{
    color: #fff;
  }
}
.el-aside{
  .el-menu{
    height: calc(100vh - 80px);
  }
}
</style>
