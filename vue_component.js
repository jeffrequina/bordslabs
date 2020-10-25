
 var bordsVM = new Vue({
    el: '#databinding',
    data: {
       view: 'component1'
    },
    components: {
       'component1': {
          template: `
        <div id="bordsrow">
        <div id="row1" class="row">
            <div class="mt-2 col-xs-6 col-md-2">
                <iframe id="player1"
                    width="370" height="180"
                    src="https://www.youtube.com/embed/N26G-niUSSA?enablejsapi=1"
                    frameborder="0"
                    style="border: solid 4px #37474F">
                </iframe>
            </div>
            <div class="mt-2 col-xs-6 col-md-2" id="player2"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player3"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player4"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player5"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player6"></div>                   
        </div> 
        <div id="row2" class="row">
            <div class="mt-2 col-xs-6 col-md-2" id="player7"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player8"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player9"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player10"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player11"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player12"></div>                   
        </div> 
        <div id="row3" class="row">      
            <div class="mt-2 col-xs-6 col-md-2" id="player13"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player14"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player15"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player16"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player17"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player18"></div>          
        </div> 
        <div id="row4" class="row">      
            <div class="mt-2 col-xs-6 col-md-2" id="player19"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player20"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player21"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player22"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player23"></div>
            <div class="mt-2 col-xs-6 col-md-2" id="player24"></div>           
        </div>  
        </div>`
       }
    }
 });