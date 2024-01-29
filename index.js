var devDes = document.getElementsByClassName("dev-describtion")[0];
let totalHeight = window.innerHeight/5*4;
var devTitle = document.querySelector(".developersTitle");
var comPara = document.querySelector(".ourCommitteesDescription");
let tracks=document.querySelectorAll (".track");

function checkNetworkSpeed() {     
    if (navigator.onLine) {
        setTimeout(() => {
            // Start Splash Screen
            document.getElementById("splash").classList.add("fade");
            setTimeout(()=>{
                document.getElementById("splash").classList.add("hidden");
                document.body.style.overflow="auto";
            },900);
            // End Splash Screen

            // Start animation Header
            document.querySelector(".main-effect").style.cssText= `animation: showing-text 2s, cursor 0.4s step-end alternate;`
            setTimeout(function adding(){
                comPara === null || comPara === void 0 ? void 0 : comPara.classList.add("show1");
            }, 2000);
            // End animation Header

            // Start Animation Developers Section
            setTimeout(function adding(){
                devTitle === null || devTitle === void 0 ? void 0 : devTitle.classList.add("show1");
            }, 2700);
            setTimeout(function adding(){
                devDes === null || devDes === void 0 ? void 0 : devDes.style.opacity="1";
            }, 3400);
            window.onscroll = function showing(){
                tracks.forEach((tr)=>{
                    if(tr.getBoundingClientRect().top<totalHeight){
                        tr.classList.add("show");
                    }
                    else{
                        setTimeout(tr.classList.remove("show"),700)
                    }
                })
            }
            // End Animation Developers Section
        }, 2000);
    }
    else{
        document.getElementById("splash").style.display = "flex";
        document.body.style.overflow="hidden";
    }
}
checkNetworkSpeed();