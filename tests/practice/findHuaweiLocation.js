module.exports = {
  'find Location of Huawei' : function(client){
    client
    //打开百度搜索，等待网页body显现，确认百度title出现
      .url('http://www.baidu.com')
      .waitForElementVisible('body',1000)
      .assert.title('百度一下，你就知道')
    //确认地图标签出现并点击
      .assert.visible('a[name=tj_trmap]')
      .click('a[name=tj_trmap]')
    //确认百度地图出现，输入地址点击搜索button，截图
      .pause(2000)
      .waitForElementVisible('body',1000)
      .assert.visible('input#sole-input')
      .setValue('input#sole-input','华为百草园')
      .click('button#search-button')
      .pause(2000)
      .saveScreenshot('reports/practice/findHuaweiLocation.png')
      .end()
    }
}
