module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com.hk')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('input[name=btnK]', 2000)
      .click('input[name=btnK]')
      .pause(2000)
      .assert.containsText('div.g:first-child',
        'Rembrandt - Wikipedia')
      .end();
  }
};
