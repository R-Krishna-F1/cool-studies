async function writeClipboard(text){
  if(navigator.clipboard?.writeText){
    await navigator.clipboard.writeText(text);
    return;
  }
  const area=document.createElement("textarea");
  area.value=text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

document.addEventListener("click",async event=>{
  const button=event.target.closest(".copy-btn");
  if(!button)return;
  const pre=button.nextElementSibling;
  if(!pre)return;
  try{await writeClipboard(pre.innerText);}catch{}
  button.textContent="copied!";
  setTimeout(()=>{button.textContent="copy";},1500);
});