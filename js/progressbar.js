window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressWidth = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress").style.width = progressWidth + "%";
});
