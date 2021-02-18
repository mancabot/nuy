let handler = async m => m.reply(`
╭─〘 𝗗𝗢𝗡𝗔𝗦𝗜 〙
│ • 𝗔𝗫𝗜𝗦 [083815956151]
│ • 𝗗𝗔𝗡𝗔 [083815956151]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
