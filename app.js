import TelegramBot from "node-telegram-bot-api";
import Dotenv from "dotenv";
// import { read, write } from "./utils/fs.js";

Dotenv.config();

const bot = new TelegramBot(process.env.token, {
  polling: true,
});

bot.onText(/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Assalomu Alaykum ${msg.chat.first_name}`, {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: "Operatsion Sistemalar(OS)" }],
        [{ text: "Arxiv paroli" }],
        [{ text: "Arxivdan chiqarish qo`llanma" }, { text: "Statistika" }],
      ],
      resize_keyboard: true,
    }),
  });
});

bot.on("message", (msg) => {
  const chatID = msg.chat.id;

  if (msg.text === "Operatsion Sistemalar(OS)") {
    bot.sendMessage(chatID, "Operatsion sistemalardan birini tanlang.", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "Windows" }, { text: "Linux" }],
          [{ text: "MacOS" }],
          [{ text: "Android OS" }],
          [{ text: "back" }, { text: "Main Menu" }],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text === "Windows") {
    bot.sendMessage(chatID, "Windows", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "x32" }, { text: "x64" }],
          [{ text: "back" }, { text: "Main Menu" }],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text === "x64") {
    bot.sendMessage(chatID, "x64", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            { text: "Windows 11" },
            { text: "Windows 10" },
            { text: "Windows 8" },
          ],
          [{ text: "Windows 7" }, { text: "Windows Vista" }],
          [{ text: "back" }, { text: "Main Menu" }],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text === "Windows 10") {
    bot.sendMessage(chatID, "Windows 10", {
      reply_markup: JSON.stringify({
        keyboard: [
          [{ text: "1507 | x64" }, { text: "1511 | x64" }],
          [
            { text: "1607 | x64" },
            { text: "1703 | x64" },
            { text: "1709 | x64" },
          ],
          [{ text: "1803 | x64" }, { text: "1809 | x64" }],
          [{ text: "1903 | x64" }],
          [{ text: "1909 | x64" }, { text: "2004 | x64" }],
          [{ text: "20H2 | x64" }, { text: "21H1 | x64" }],
          [{ text: "21H2 | x64" }, { text: "22H2 | x64" }],
          [{ text: "back" }, { text: "Main Menu" }],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (msg.text === "22H2 | x64") {
    bot.sendPhoto(msg.chat.id, "./media/windows.jpg", {
      caption: `
          <i>Free</i>
          <span class="tg-spoiler">Take your windows</span>
          `,
      parse_mode: "HTML",
    });
    bot.sendDocument(msg.chat.id, "./media/some.txt");
  }

  // if (msg.text === "22H2 | x64") {
  //   bot.sendPhoto(msg.chat.id, "./media/lavash.jpg", {
  //     caption: `
  //         <strong>Lavash haqida 😊</strong>
  //         <i>24000</i>
  //         <span class="tg-spoiler">Tarkibi sirli va tovuqli !!!</span>
  //         `,
  //       parse_mode: "HTML",
  //       reply_markup: {
  //         inline_keyboard: [
  //           { text: "zakaz berish", callback_data: "zakaz" },
  //           {
  //             text: "batafsil",
  //             url: "https://www.google.com/search?q=lavash+img&tbm=isch&ved=2ahUKEwiM0aGe2LX-AhUWzSoKHRT1BbsQ2-cCegQIABAA&oq=la&gs_lcp=CgNpbWcQARgAMgQIIxAnMgoIABCKBRCxAxBDMgcIABCKBRBDMgcIABCKBRBDMgcIABCKBRBDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIICAAQgAQQsQM6BwgAEIAEEBM6CAgAEAgQHhATOgcIIxDqAhAnOgQIABADOgkIABCABBAKEAFQ4QZY8jpgxUhoBXAAeASAAeMBiAGlDpIBBTAuOC4ymAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=F7w_ZMzpCZaaqwGU6pfYCw&bih=625&biw=1366",
  //           },
  //         ],
  //       },
  //     });
  //   }
});

// bot.on("callback_query", async (msg) => {
//   if (msg.data === "zakaz") {
//     await bot.sendMessage(msg.message.chat.id, "Contactingizni qoldiring", {
//       reply_markup: JSON.stringify({
//         keyboard: [
//           [
//             {
//               text: "Contact berish",
//               request_contact: true,
//             },
//             {
//               text: "Locatsiyani berish",
//               request_location: true,
//             },
//           ],
//         ],
//         resize_keyboard: true,
//       }),
//     });
//   }
// });

// const contacts = read("zakaz");

// bot.on("contact", (msg) => {
//   const { phone_number, first_name, user_id } = msg.contact;

//   contacts.push({
//     user_id,
//     first_name,
//     phone_number,
//   });

//   write("zakaz", contacts);
//   return bot.sendMessage(msg.chat.id, "Operator tez orada javob beradi!!!");
// });

// bot.on("location", (msg) => {
//   let { latitude, longitude } = msg.location;
//   bot.sendLocation(msg.chat.id, latitude, longitude);
// });
