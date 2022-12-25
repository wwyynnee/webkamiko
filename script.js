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
const blockActive19 = () => {
  $(".cmd__19 details summary div svg").toggleClass("fillActive");
  $(".cmd__19 details summary svg").toggleClass("transformActive");
}
const blockActive20 = () => {
  $(".cmd__20 details summary div svg").toggleClass("fillActive");
  $(".cmd__20 details summary svg").toggleClass("transformActive");
}
const blockActive21 = () => {
  $(".cmd__21 details summary div svg").toggleClass("fillActive");
  $(".cmd__21 details summary svg").toggleClass("transformActive");
}
const blockActive22 = () => {
  $(".cmd__22 details summary div svg").toggleClass("fillActive");
  $(".cmd__22 details summary svg").toggleClass("transformActive");
}
const blockActive23 = () => {
  $(".cmd__23 details summary div svg").toggleClass("fillActive");
  $(".cmd__23 details summary svg").toggleClass("transformActive");
}

// Вкладки
const pink = "#e9cdeb";

// Все
$(".all_btn").on("click", () => {
  $(".all_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".main_btn, .rp_btn, .img_btn").css("backgroundColor", "#242424")
  $(".main_btn, .rp_btn, .img_btn").css("color", "#777")
  $(".basic, .rp, .img").show()
  $(".spanActive").text("Все команды (▽◕ ᴥ ◕▽)")
})

// Основное
$(".main_btn").on("click", () => {
  $(".main_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .rp_btn, .img_btn").css("backgroundColor", "#242424")
  $(".all_btn, .rp_btn, .img_btn").css("color", "#777")
  $(".rp, .img").hide()
  $(".basic").show()
  $(".spanActive").text("Основные команды бота (✯◡✯)")
})

// Ролевые
$(".rp_btn").on("click", () => {
  $(".rp_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .img_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .img_btn").css("color", "#777")
  $(".basic, .img").hide()
  $(".rp").show()
  $(".spanActive").text("Команды для ролевых игр ʕ ᵔᴥᵔ ʔ")
})

// Картинки
$(".img_btn").on("click", () => {
  $(".img_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .rp_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .rp_btn").css("color", "#777")
  $(".basic, .rp").hide()
  $(".img").show()
  $(".spanActive").text("Всеми любимые картинки ツ")
})

// Меню
const menu = () => {
  $(".menu").toggle()
  $(".menuActive").toggleClass("closeMenu")
  $(".closeMenu").text("✕")
  if (!$(".menuActive").hasClass("closeMenu")) {
    $(".menuActive").text("☰")
  }
}