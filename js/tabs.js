document.addEventListener("click",event=>{
  const button=event.target.closest(".tab[data-tab-target]");
  if(!button)return;
  const panel=button.closest(".panel");
  const target=panel?.querySelector(`#${button.dataset.tabTarget}`);
  if(!panel||!target)return;
  panel.querySelectorAll(".tab").forEach(el=>el.classList.remove("active"));
  panel.querySelectorAll(".tab-content").forEach(el=>el.classList.remove("active"));
  button.classList.add("active");
  target.classList.add("active");
});