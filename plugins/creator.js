let handler = function (m) {
  this.sendContact(m.chat, '6283815956151', 'NurulCans', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
