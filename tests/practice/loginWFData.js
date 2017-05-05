module.exports = {
  'login WanFang Data' : function(client){
    client
    //打开百度搜索，等待网页body渲染完成，确认百度title出现
      .url('http://www.baidu.com')
      .waitForElementVisible('body',1000)
      .assert.title('百度一下，你就知道')
    //确认学术标签出现并点击
      .assert.visible('a[name=tj_trxueshu]')
      .click('a[name=tj_trxueshu]')
      .pause(2000)
    //确认学术板块出现并选择万方数据
      .waitForElementVisible('div#m',1000)
      .click('.navlist_content>[href="http://www.wanfangdata.com.cn"]')
      .pause(5000)
    //确认网页body渲染完成，切换网页至万方数据，点击登录
      // .window_handles(function (handle) {
      //   console.log('orginal handles is:' + handle)
      //   console.log('handles is :' + JSON.stringify(handle))
      // })
      .window_handles(function(result) {
        var handle = result.value[1] ;
        client.switchWindow(handle);
        })
      .waitForElementVisible('body',1000)
      .assert.title('万方数据知识服务平台')
      .assert.visible('li[title="请登录"]')
      .click('li[title="请登录"]')
    //登录万方数据库
      .pause(2000)
      .assert.visible('input.userid')
      .assert.visible('input.password')
      .setValue('input.userid','wanyuran')
      .setValue('input.password','xueshu0907')
      .click('button.row.btn.btn-login')
      .pause(2000)
    //确认登录成功
      .assert.visible('li.profile.single')
      .click('li.profile.single')
      .assert.containsText('span.display-name','wanyuran')
      .end()
    }
}
