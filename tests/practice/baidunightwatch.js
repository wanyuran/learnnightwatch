module.exports = {
  'test Baidu Nightwatch' : function(client){
    client
    //打开百度搜索，等待网页body显现，确认百度title出现
      .url('http://www.baidu.com')
      .waitForElementVisible('body',1000)
      .assert.title('百度一下，你就知道')
    //确认搜索条出现，搜索条中输入要查找得信息nightwatch
      .assert.visible('input[id=kw]')
      .setValue('input[id=kw]','nightwatch')
    //确认百度一下button出现，点击搜索button
      .assert.visible('input[id=su]')
      .click('input[id=su]')
      .pause(2000)
    //确认页面跳转成功，截图
      .waitForElementVisible('body',1000)
      .saveScreenshot('reports/baidunightwatch.png')
      .end()
    }
}
