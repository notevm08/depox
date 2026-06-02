
const log=document.getElementById('log');
document.getElementById('launchBtn').onclick=()=>{
 const steps=[
 'Инициализация безопасного шлюза API...',
 'Проверка изоляции модуля значков... ОК',
 'SUCCESS: Все системы готовы.'
 ];
 log.textContent='';
 steps.forEach((s,i)=>setTimeout(()=>log.textContent+=s+'\n',i*1000));
};

let up=0,down=0;
function render(){
 document.getElementById('voteResult').textContent=`За: ${up} | Против: ${down}`;
}
document.getElementById('upvote').onclick=()=>{up++;render();};
document.getElementById('downvote').onclick=()=>{down++;render();};
render();
