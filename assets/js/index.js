function sendMessage(itemNumber) {
  // Ambil data dari elemen HTML
  var item = document.getElementById("item" + itemNumber);
  var diamondType = item.querySelector(".diamond-type").innerText;
  var diamondPrice = item.querySelector(".diamond-price").innerText;

  // Format pesan WhatsApp
  var whatsappMessage = encodeURIComponent(
    "𝗙𝗢𝗥𝗠𝗔𝗧 𝗣𝗘𝗦𝗔𝗡𝗔𝗡\n\n" +
    "𝗣𝗥𝗢𝗗𝗨𝗞 : " + diamondType + "\n" +
    "𝗡𝗢𝗠𝗜𝗡𝗔𝗟 : " + diamondPrice + "\n" +
    "𝗜𝗗 𝗣𝗘𝗦𝗔𝗡𝗔𝗡 : " + itemNumber + "\n" +
    "𝗣𝗔𝗬𝗠𝗘𝗡𝗧 : payment.fayzaafx.tech\n\n" +
    "© Cs Fayy Shop"
  );

  // Buka WhatsApp dengan pesan yang sudah diformat
  window.location.href = "https://wa.me/6281295169487?text=" + whatsappMessage;
}