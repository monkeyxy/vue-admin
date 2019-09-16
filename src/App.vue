<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">中后台系统</div>
                    <div class="layout-nav">
                        <MenuItem name="1" >
                            <Icon type="ios-navigate"></Icon>
                            基础服务
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            其他
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content style="min-height:80vh">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">xxx</Footer>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    /* background: #5b6270; */
    /* border-radius: 3px; */
    float: left;
    position: relative;
    /* top: 15px; */
    left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
}
.layout-nav{
    overflow: hidden;
    float: right;
}
.layout-footer-center{
    text-align: center;
}
</style>
