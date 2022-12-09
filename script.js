// Список команд
const blockActive = () => {
  $(".cmd__1 details summary div svg").toggleClass("fillActive");
  $(".cmd__1 details summary svg").toggleClass("transformActive");
}
const blockActive2 = () => {
  $(".cmd__2 details summary div svg").toggleClass("fillActive");
  $(".cmd__2 details summary svg").toggleClass("transformActive");
}
const blockActive3 = () => {
  $(".cmd__3 details summary div svg").toggleClass("fillActive");
  $(".cmd__3 details summary svg").toggleClass("transformActive");
}
const blockActive4 = () => {
  $(".cmd__4 details summary div svg").toggleClass("fillActive");
  $(".cmd__4 details summary svg").toggleClass("transformActive");
}
const blockActive5 = () => {
  $(".cmd__5 details summary div svg").toggleClass("fillActive");
  $(".cmd__5 details summary svg").toggleClass("transformActive");
}
const blockActive6 = () => {
  $(".cmd__6 details summary div svg").toggleClass("fillActive");
  $(".cmd__6 details summary svg").toggleClass("transformActive");
}
const blockActive7 = () => {
  $(".cmd__7 details summary div svg").toggleClass("fillActive");
  $(".cmd__7 details summary svg").toggleClass("transformActive");
}
const blockActive8 = () => {
  $(".cmd__8 details summary div svg").toggleClass("fillActive");
  $(".cmd__8 details summary svg").toggleClass("transformActive");
}
const blockActive9 = () => {
  $(".cmd__9 details summary div svg").toggleClass("fillActive");
  $(".cmd__9 details summary svg").toggleClass("transformActive");
}
const blockActive10 = () => {
  $(".cmd__10 details summary div svg").toggleClass("fillActive");
  $(".cmd__10 details summary svg").toggleClass("transformActive");
}
const blockActive11 = () => {
  $(".cmd__11 details summary div svg").toggleClass("fillActive");
  $(".cmd__11 details summary svg").toggleClass("transformActive");
}
const blockActive12 = () => {
  $(".cmd__12 details summary div svg").toggleClass("fillActive");
  $(".cmd__12 details summary svg").toggleClass("transformActive");
}
const blockActive13 = () => {
  $(".cmd__13 details summary div svg").toggleClass("fillActive");
  $(".cmd__13 details summary svg").toggleClass("transformActive");
}
const blockActive14 = () => {
  $(".cmd__14 details summary div svg").toggleClass("fillActive");
  $(".cmd__14 details summary svg").toggleClass("transformActive");
}
const blockActive15 = () => {
  $(".cmd__15 details summary div svg").toggleClass("fillActive");
  $(".cmd__15 details summary svg").toggleClass("transformActive");
}
const blockActive16 = () => {
  $(".cmd__16 details summary div svg").toggleClass("fillActive");
  $(".cmd__16 details summary svg").toggleClass("transformActive");
}
const blockActive17 = () => {
  $(".cmd__17 details summary div svg").toggleClass("fillActive");
  $(".cmd__17 details summary svg").toggleClass("transformActive");
}
const blockActive18 = () => {
  $(".cmd__18 details summary div svg").toggleClass("fillActive");
  $(".cmd__18 details summary svg").toggleClass("transformActive");
}

// Вкладки
const pink = "#e9cdeb";

// Все
$(".all_btn").on("click", () => {
  $(".all_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".main_btn, .rp_btn, .img_btn").css("backgroundColor", "#242424")
  $(".main_btn, .rp_btn, .img_btn").css("color", "#777")
})

// Основное
$(".main_btn").on("click", () => {
  $(".main_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .rp_btn, .img_btn").css("backgroundColor", "#242424")
  $(".all_btn, .rp_btn, .img_btn").css("color", "#777")
})

// Ролевые
$(".rp_btn").on("click", () => {
  $(".rp_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .img_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .img_btn").css("color", "#777")
})

// Картинки
$(".img_btn").on("click", () => {
  $(".img_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .rp_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .rp_btn").css("color", "#777")
})