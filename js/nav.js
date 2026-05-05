document.addEventListener("click",event=>{
  const button=event.target.closest(".nav-btn[data-panel]");
  if(!button)return;
  const panel=document.getElementById(button.dataset.panel);
  if(!panel)return;
  document.querySelectorAll(".panel").forEach(el=>el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el=>el.classList.remove("active"));
  panel.classList.add("active");
  button.classList.add("active");
});