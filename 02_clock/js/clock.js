function clock(){
    const hour = document.querySelector(".hour-hand");
    const min = document.querySelector(".min-hand");
    const sec = document.querySelector(".second-hand");
    // 用常數把取得的各個時針物件命名
    
    function setClock(){//這邊執行偵測時間改變時針的角度
        let data = new Date(); //變數命名把當前的時間存為date常數
        let sec_deg = data.getSeconds() * 6; //(360/60)秒針跟分針都要走完60刻度，每一度6deg
        let min_deg = data.getMinutes() * 6;//(360/60) 同上
        let hour_deg = data.getHours() * 30; //(360/12)時針只走12刻度，每一度30deg
        //上面都是以取得當前時間的各個屬性(秒、分、時)去乘上各個時針走一個刻度的角度
        
        // ``反引號寫法ES6版本，在鍵盤上的波浪號位置
        sec.style.transform = `rotate(${sec_deg}deg)`;
        min.style.transform = `rotate(${min_deg}deg)`;
        hour.style.transform = `rotate(${hour_deg}deg)`;
        //${}呼叫變數或表達式作為值應用的寫法
        //取得當前時間的值*上各個時針的倍率=變換角度的幅度
    }
    setClock()//執行時針轉換角度的涵式
    //計時器類型setInterval、setTimeout、requestAnimationFrame
    setInterval(setClock,1000);//每隔一秒鐘執行一次刷新當前時間
}
document.readyState=clock() //載入頁面完成時執行整個時鐘內容的函式

//電弧文字時鐘數字測試
