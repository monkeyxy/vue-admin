<template>
  <div>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="area" theme="light" width="auto" @on-select="changeMenu">
            <MenuItem :name="item.key" v-for="(item,index) in menuList" :key="index">
              {{item.text}}
            </MenuItem>
          </Menu>
        </Sider>
        <Content style="padding:10px">
           <router-view></router-view>
        </Content>
      </Layout>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data() {
    return {
      menuList:[
        {key:'other',text:'菜单1'},
       
      ]
    }
  },
  created() {
    this.initMenuKey()
  },
  methods: {
    initMenuKey(){
      console.log('init======',this.$router)
    },
    changeMenu(key){
      // this.$router.push(`/basic/${key}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
